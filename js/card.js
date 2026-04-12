// Jujupedia - Card Rendering
// This file displays characters on the page

function createCharacterCard(character) {
    const charData = character.character;
    const role = character.role || 'Unknown';
    
    // Get image URL
    const imageUrl = charData.images?.jpg?.image_url || 'https://via.placeholder.com/300x400?text=No+Image';
    
    return `
        <div class="character-card" data-id="${charData.mal_id}">
            <img src="${imageUrl}" alt="${charData.name}">
            <h3>${charData.name}</h3>
            <div class="role">${role}</div>
            <button class="favorite-btn" data-id="${charData.mal_id}">
                ♡ Add to Favorites
            </button>
        </div>
    `;
}

function renderCharacterCards(characterList) {
    const grid = document.getElementById('character-grid');
    if (!grid) return;
    
    if (!characterList || characterList.length === 0) {
        grid.innerHTML = '<div class="loading">No characters found...</div>';
        return;
    }
    
    grid.innerHTML = characterList.map(char => createCharacterCard(char)).join('');
}

console.log('card.js loaded successfully');

