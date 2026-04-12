// ============================================
// FALLBACK STORAGE FUNCTIONS (in case storage.js fails)
// ============================================

if (typeof isCharacterFavorited === 'undefined') {
    window.isCharacterFavorited = function(id) {
        const favs = JSON.parse(localStorage.getItem('jujupedia_favorites') || '[]');
        return favs.some(f => f.id == id);
    };
    window.addFavorite = function(id, name) {
        const favs = JSON.parse(localStorage.getItem('jujupedia_favorites') || '[]');
        if (!favs.some(f => f.id == id)) {
            favs.push({ id, name, dateAdded: new Date().toISOString() });
            localStorage.setItem('jujupedia_favorites', JSON.stringify(favs));
        }
    };
    window.removeFavorite = function(id) {
        let favs = JSON.parse(localStorage.getItem('jujupedia_favorites') || '[]');
        favs = favs.filter(f => f.id != id);
        localStorage.setItem('jujupedia_favorites', JSON.stringify(favs));
    };
}

// ============================================
// CHARACTER DETAIL MODAL FUNCTIONS
// ============================================

function showCharacterDetails(name, imageUrl, role) {
    
    if (typeof getCharacterDetails === 'undefined') {
        console.error('character-data.js not loaded yet');
        return;
    }
    
    const details = getCharacterDetails(name);
    
    const nameEl = document.getElementById('modal-character-name');
    const imageEl = document.getElementById('modal-character-image');
    const roleEl = document.getElementById('modal-character-role');
    const gradeEl = document.getElementById('modal-character-grade');
    const techniqueEl = document.getElementById('modal-character-technique');
    const domainEl = document.getElementById('modal-character-domain');
    const bioEl = document.getElementById('modal-character-bio');
    const vaEl = document.getElementById('modal-character-va');
    
    if (nameEl) nameEl.textContent = name;
    if (imageEl) imageEl.src = imageUrl;
    if (roleEl) roleEl.textContent = role;
    if (gradeEl) gradeEl.textContent = details.grade;
    if (techniqueEl) techniqueEl.textContent = details.technique;
    if (domainEl) domainEl.textContent = details.domain || 'None';
    if (bioEl) bioEl.textContent = details.bio;
    if (vaEl) vaEl.textContent = details.voiceActors;
    
    const modal = document.getElementById('character-modal');
    if (modal) modal.style.display = 'flex';
}

function setupCharacterModal() {
    const modal = document.getElementById('character-modal');
    const closeBtn = document.querySelector('.character-modal-close');
    
    if (closeBtn) {
        closeBtn.onclick = () => {
            if (modal) modal.style.display = 'none';
        };
    }
    
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// ============================================
// CARD CREATION
// ============================================

function createCharacterCard(character) {
    const charData = character.character;
    const role = character.role || 'Unknown';
    const favoritesCount = character.favorites || 0;
    const characterId = charData.mal_id;
    const characterName = charData.name;
    const imageUrl = charData.images?.jpg?.image_url || 'https://via.placeholder.com/300x400?text=No+Image';
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const isFavorited = isLoggedIn && isCharacterFavorited(characterId);
    const safeName = characterName.replace(/'/g, "\\'");
    
    return `
        <div class="character-card" data-id="${characterId}" data-name="${safeName}" onclick="showCharacterDetails('${safeName}', '${imageUrl}', '${role}')">
            <img src="${imageUrl}" alt="${characterName}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x400?text=No+Image'">
            <h3>${characterName}</h3>
            <div class="role">${role}</div>
            <div class="grade">⭐ ${favoritesCount.toLocaleString()} favorites</div>
            ${isLoggedIn ? `
                <button class="favorite-btn ${isFavorited ? 'active' : ''}" data-id="${characterId}" onclick="event.stopPropagation()">
                    ${isFavorited ? '❤️ Favorited' : '♡ Add to Favorites'}
                </button>
            ` : `
                <button class="favorite-btn login-required" onclick="event.stopPropagation(); document.getElementById('login-modal').style.display='flex';">
                    🔒 Login to Favorite
                </button>
            `}
        </div>
    `;
}

function renderCharacterCards(characterList) {
    const grid = document.getElementById('character-grid');
    if (!grid) return;
    
    if (!characterList || characterList.length === 0) {
        grid.innerHTML = '<div class="loading"><p>No characters found...</p></div>';
        return;
    }
    
    grid.innerHTML = characterList.map(char => createCharacterCard(char)).join('');
    setupCharacterModal();
    
    // Attach favorite button events
    document.querySelectorAll('.favorite-btn:not(.login-required)').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.getAttribute('data-id');
            const card = this.closest('.character-card');
            const name = card?.getAttribute('data-name') || '';
            
            if (this.classList.contains('active')) {
                removeFavorite(id);
                this.classList.remove('active');
                this.textContent = '♡ Add to Favorites';
            } else {
                addFavorite(id, name);
                this.classList.add('active');
                this.textContent = '❤️ Favorited';
            }
        });
    });
}

console.log('card.js loaded');