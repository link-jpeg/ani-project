// Jujupedia - Main JavaScript File
// Handles API fetching, loading overlay, and global data

let globalCharacterData = [];
let currentFilter = 'all';
let currentSearchTerm = '';

// JJK Anime ID for Jikan API (Season 1 = 40748)
const JJK_ANIME_ID = 40748;

// DOM Elements
const characterGrid = document.getElementById('character-grid');
const searchInput = document.getElementById('search-input');

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
setInterval(animateLoadingDots, 500);

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }
}

// ============================================
// API FETCHING
// ============================================

async function fetchJJKCharacters() {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${JJK_ANIME_ID}/characters`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        globalCharacterData = data.data;
        
        // Render the characters
        if (typeof renderCharacterCards === 'function') {
            renderCharacterCards(globalCharacterData);
        }
        
        // Hide loading overlay
        hideLoadingOverlay();
        
    } catch (error) {
        console.error('Error fetching JJK characters:', error);
        if (characterGrid) {
            characterGrid.innerHTML = '<div class="loading">Failed to load characters. Please refresh the page.</div>';
        }
        // Still hide overlay after error
        setTimeout(hideLoadingOverlay, 1000);
    }
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================

function filterCharacters() {
    let filtered = [...globalCharacterData];
    
    // Apply search filter
    if (currentSearchTerm) {
        filtered = filtered.filter(character => 
            character.character.name.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    // Apply category filter (based on role)
    if (currentFilter !== 'all') {
        filtered = filtered.filter(character => {
            const role = character.role?.toLowerCase() || '';
            const name = character.character.name.toLowerCase();
            
            switch(currentFilter) {
                case 'students':
                    return role.includes('main') || name.includes('itadori') || name.includes('fushiguro') || name.includes('kugisaki');
                case 'teachers':
                    return role.includes('supporting') && (name.includes('gojo') || name.includes('nanami'));
                case 'villains':
                    return name.includes('sukuna') || name.includes('mahito') || name.includes('kenjaku') || name.includes('jogo');
                case 'special-grade':
                    return name.includes('gojo') || name.includes('sukuna') || name.includes('yuta') || name.includes('geto');
                default:
                    return true;
            }
        });
    }
    
    // Render filtered results
    if (typeof renderCharacterCards === 'function') {
        renderCharacterCards(filtered);
    }
}

// Setup filter buttons
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update current filter
            currentFilter = btn.getAttribute('data-filter');
            
            // Apply filter
            filterCharacters();
        });
    });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function setupSearch() {
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        filterCharacters();
    });
}

// ============================================
// LOGOUT FUNCTIONALITY
// ============================================

function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    const loginBtn = document.getElementById('login-btn');
    const userGreeting = document.getElementById('user-greeting');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userEmail');
            if (loginBtn) loginBtn.style.display = 'block';
            if (logoutBtn) logoutBtn.style.display = 'none';
            if (userGreeting) userGreeting.style.display = 'none';
            
            // Refresh the page to reset favorite buttons
            location.reload();
        });
    }
}

// ============================================
// CHECK LOGIN STATUS ON PAGE LOAD
// ============================================

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const userGreeting = document.getElementById('user-greeting');
    
    if (isLoggedIn && loginBtn && logoutBtn && userGreeting) {
        const userEmail = localStorage.getItem('userEmail') || 'User';
        userGreeting.textContent = `👤 ${userEmail.split('@')[0]}`;
        userGreeting.style.display = 'inline';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    checkLoginStatus();
    
    // Setup search
    setupSearch();
    
    // Setup filters
    setupFilters();
    
    // Setup logout
    setupLogout();
    
    // Fetch JJK characters
    fetchJJKCharacters();
});
