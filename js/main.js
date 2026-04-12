// Jujupedia - Main JavaScript File
// Handles API fetching, initialization, and global state

let globalCharacterData = [];

// JJK Anime ID for Jikan API (Season 1 = 40748)
const JJK_ANIME_ID = 40748;

// DOM Elements
const characterGrid = document.getElementById('character-grid');

// ============================================
// LOADING OVERLAY WITH ANIMATED DOTS
// ============================================

let dotCount = 0;
const dotContainer = document.getElementById('loading-dots');

function animateLoadingDots() {
    if (!dotContainer) return;
    dotCount = (dotCount + 1) % 4;
    let dots = '.'.repeat(dotCount);
    dotContainer.textContent = dots;
}

// Start the dot animation
const dotInterval = setInterval(animateLoadingDots, 500);

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            clearInterval(dotInterval);
        }, 500);
    }
}

// ============================================
// API FETCHING
// ============================================

async function fetchJJKCharacters() {
    try {
        console.log('Fetching JJK characters from Jikan API...');
        
        const response = await fetch(`https://api.jikan.moe/v4/anime/${JJK_ANIME_ID}/characters`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        globalCharacterData = data.data;
        
        console.log(`Successfully fetched ${globalCharacterData.length} characters`);
        
        // Store for search functionality
        if (typeof window.storeCharacterData === 'function') {
            window.storeCharacterData(globalCharacterData);
        }
        
        // Render characters
        if (typeof renderCharacterCards === 'function') {
            renderCharacterCards(globalCharacterData);
        } else {
            console.error('renderCharacterCards function not found - card.js may not be loaded');
            if (characterGrid) {
                characterGrid.innerHTML = '<div class="loading">Error: card.js not loaded properly</div>';
            }
        }
        
        // Hide loading overlay
        hideLoadingOverlay();
        
    } catch (error) {
        console.error('Error fetching JJK characters:', error);
        if (characterGrid) {
            characterGrid.innerHTML = `
                <div class="loading">
                    <p>Failed to load characters.</p>
                    <p style="font-size: 0.8rem; margin-top: 10px;">${error.message}</p>
                    <button onclick="location.reload()" style="margin-top: 15px; padding: 8px 16px; background: #9b30ff; border: none; color: white; border-radius: 5px; cursor: pointer;">Retry</button>
                </div>
            `;
        }
        // Still hide overlay after error
        setTimeout(hideLoadingOverlay, 1000);
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Jujupedia initializing...');
    
    // Fetch JJK characters
    fetchJJKCharacters();
});

console.log('main.js loaded successfully');