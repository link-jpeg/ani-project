// Jujupedia - Complete Search and Filter System
// Handles searching, filtering, and sorting characters

let currentFilter = 'all';
let currentSearchTerm = '';
let currentSortBy = 'default';
let allCharacters = [];

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        // Real-time search with debounce
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                currentSearchTerm = e.target.value.toLowerCase();
                applyFiltersAndSearch();
            }, 300);
        });
    }
    
    // Setup filter buttons
    setupFilterButtons();
    
    // Setup sort dropdown (if added later)
    setupSorting();
}

function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update current filter
            currentFilter = btn.getAttribute('data-filter');
            
            // Reset search when filter changes (optional)
            // const searchInput = document.getElementById('search-input');
            // if (searchInput) searchInput.value = '';
            // currentSearchTerm = '';
            
            applyFiltersAndSearch();
        });
    });
}

function setupSorting() {
    console.log('Sorting ready - add sort controls to enable');
}

function applyFiltersAndSearch() {
    if (!allCharacters.length) {
        console.warn('No character data available for filtering');
        return;
    }
    
    let filtered = [...allCharacters];
    
    // Apply search filter
    if (currentSearchTerm) {
        filtered = filtered.filter(character => {
            const name = character.character.name.toLowerCase();
            const role = character.role?.toLowerCase() || '';
            return name.includes(currentSearchTerm) || role.includes(currentSearchTerm);
        });
    }
    
    // Apply category filter
    filtered = applyCategoryFilter(filtered);
    
    // Apply sorting
    filtered = applySorting(filtered);
    
    // Render results
    if (typeof renderCharacterCards === 'function') {
        renderCharacterCards(filtered);
    }
    
    // Show result count
    showResultCount(filtered.length);
}

function applyCategoryFilter(characters) {
    if (currentFilter === 'all') return characters;
    
    return characters.filter(character => {
        const name = character.character.name.toLowerCase();
        const role = character.role?.toLowerCase() || '';
        
        switch(currentFilter) {
            case 'students':
                return role.includes('main') || 
                       name.includes('itadori') || 
                       name.includes('yuji') ||
                       name.includes('fushiguro') || 
                       name.includes('megumi') ||
                       name.includes('kugisaki') ||
                       name.includes('nobara') ||
                       name.includes('inumaki') ||
                       name.includes('panda') ||
                       name.includes('zenin');
                       
            case 'teachers':
                return name.includes('gojo') || 
                       name.includes('satoru') ||
                       name.includes('nanami') ||
                       name.includes('kento') ||
                       name.includes('geto') ||
                       name.includes('suguru');
                       
            case 'villains':
                return name.includes('sukuna') || 
                       name.includes('ryomen') ||
                       name.includes('mahito') || 
                       name.includes('kenjaku') || 
                       name.includes('jogo') ||
                       name.includes('hanami') ||
                       name.includes('dagon') ||
                       name.includes('toji') ||
                       name.includes('fushiguro') && name.includes('toji');
                       
            case 'special-grade':
                return name.includes('gojo') || 
                       name.includes('sukuna') || 
                       name.includes('yuta') || 
                       name.includes('okotsu') ||
                       name.includes('geto') ||
                       name.includes('kenjaku');
                       
            default:
                return true;
        }
    });
}

function applySorting(characters) {
    switch(currentSortBy) {
        case 'name-asc':
            return [...characters].sort((a, b) => 
                a.character.name.localeCompare(b.character.name)
            );
        case 'name-desc':
            return [...characters].sort((a, b) => 
                b.character.name.localeCompare(a.character.name)
            );
        case 'favorites-desc':
            return [...characters].sort((a, b) => 
                (b.favorites || 0) - (a.favorites || 0)
            );
        case 'favorites-asc':
            return [...characters].sort((a, b) => 
                (a.favorites || 0) - (b.favorites || 0)
            );
        default:
            return characters;
    }
}

function showResultCount(count) {
    // Remove existing count display
    const existingCount = document.querySelector('.result-count');
    if (existingCount) existingCount.remove();
    
    // Create new count display
    const countDisplay = document.createElement('div');
    countDisplay.className = 'result-count';
    countDisplay.textContent = `Found ${count} character${count !== 1 ? 's' : ''}`;
    countDisplay.style.cssText = `
        text-align: center;
        margin: 10px 0;
        color: #9b30ff;
        font-size: 0.9rem;
    `;
    
    const filterSection = document.querySelector('.filter-section');
    if (filterSection && !document.querySelector('.result-count')) {
        filterSection.insertAdjacentElement('afterend', countDisplay);
    }
}

// ============================================
// PUBLIC API
// ============================================

function setSearchTerm(term) {
    currentSearchTerm = term.toLowerCase();
    applyFiltersAndSearch();
}

function setFilter(filter) {
    currentFilter = filter;
    applyFiltersAndSearch();
}

function setSorting(sortType) {
    currentSortBy = sortType;
    applyFiltersAndSearch();
}

function updateCharacterData(data) {
    allCharacters = data;
    applyFiltersAndSearch();
}

// ============================================
// EXPORT TO GLOBAL SCOPE
// ============================================

window.JujupediaSearch = {
    setSearchTerm,
    setFilter,
    setSorting,
    updateCharacterData,
    getCurrentFilter: () => currentFilter,
    getCurrentSearchTerm: () => currentSearchTerm
};

// Store character data when loaded
window.storeCharacterData = (data) => {
    allCharacters = data;
    applyFiltersAndSearch();
};

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    setupSearch();
});

console.log('search.js loaded successfully');
