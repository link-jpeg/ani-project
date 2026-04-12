// Jujupedia - Favorites Page

async function loadFavorites() {
    const grid = document.getElementById('favorites-grid');
    const clearBtn = document.getElementById('clear-favorites-btn');
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    
    if (!isLoggedIn) {
        grid.innerHTML = '<div class="loading">🔒 Please login to view your favorites</div>';
        if (clearBtn) clearBtn.style.display = 'none';
        return;
    }
    
    const favorites = getFavorites();
    
    if (!favorites || favorites.length === 0) {
        grid.innerHTML = '<div class="loading">No favorites yet. Browse <a href="characters.html" style="color: #9b30ff;">Characters</a> and click ♡ to add!</div>';
        if (clearBtn) clearBtn.style.display = 'none';
        return;
    }
    
    if (clearBtn) clearBtn.style.display = 'block';
    
    grid.innerHTML = '<div class="loading">Loading your favorites...</div>';
    
    // Fetch each character's details from API
    const results = [];
    for (const fav of favorites) {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/characters/${fav.id}`);
            const data = await response.json();
            results.push({ fav, data: data.data });
        } catch (error) {
            console.error('Error fetching:', fav.id);
            results.push({ fav, data: null });
        }
    }
    
    // Display results
    grid.innerHTML = results.map(result => {
        if (!result.data) {
            return `
                <div class="character-card">
                    <h3>${result.fav.name}</h3>
                    <div class="role">Could not load image</div>
                    <button class="favorite-btn active" onclick="removeFromFavorites('${result.fav.id}', '${result.fav.name.replace(/'/g, "\\'")}')">
                        ❤️ Remove
                    </button>
                </div>
            `;
        }
        return `
            <div class="character-card">
                <img src="${result.data.images.jpg.image_url}" alt="${result.fav.name}">
                <h3>${result.fav.name}</h3>
                <div class="role">Added on ${new Date(result.fav.dateAdded).toLocaleDateString()}</div>
                <button class="favorite-btn active" onclick="removeFromFavorites('${result.fav.id}', '${result.fav.name.replace(/'/g, "\\'")}')">
                    ❤️ Remove
                </button>
            </div>
        `;
    }).join('');
}

function removeFromFavorites(id, name) {
    if (confirm(`Remove ${name} from favorites?`)) {
        removeFavorite(id);
        showNotification(`Removed ${name} from favorites`);
        loadFavorites();
    }
}

function setupClearFavorites() {
    const clearBtn = document.getElementById('clear-favorites-btn');
    if (clearBtn) {
        clearBtn.onclick = () => {
            if (confirm('Remove ALL characters from favorites?')) {
                localStorage.setItem('jujupedia_favorites', '[]');
                loadFavorites();
                showNotification('All favorites cleared');
            }
        };
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #9b30ff;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10002;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();
    setupClearFavorites();
});