// Jujupedia - Storage System (Simplified & Working)
const FAVORITES_KEY = 'jujupedia_favorites';

function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
}

function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function addFavorite(characterId, characterName) {
    let favs = getFavorites();
    if (!favs.some(f => f.id == characterId)) {
        favs.push({ id: characterId, name: characterName, dateAdded: new Date().toISOString() });
        saveFavorites(favs);
        console.log('Added favorite:', characterName);
    }
}

function removeFavorite(characterId) {
    let favs = getFavorites();
    favs = favs.filter(f => f.id != characterId);
    saveFavorites(favs);
    console.log('Removed favorite:', characterId);
}

function isCharacterFavorited(characterId) {
    return getFavorites().some(f => f.id == characterId);
}

// IMPORTANT: Export to global window object
window.isCharacterFavorited = isCharacterFavorited;
window.addFavorite = addFavorite;
window.removeFavorite = removeFavorite;
window.getFavorites = getFavorites;

console.log('storage.js loaded - favorites ready');