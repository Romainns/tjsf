let state = {}; // État global partagé par l’application
let renderFn = null; // Fonction de rendu à rappeler lors d’un changement d’état
export function createState(initialState, renderer) {
state = { ...initialState }; // Initialisation
renderFn = renderer;
}
export function setState(newState) {
state = { ...state, ...newState }; // Fusion de l’état existant avec le nouveau
if (typeof renderFn === 'function') {
renderFn(); // Mise à jour de l’interface
}
}
export function getState() {
return { ...state }; // Retourne une copie de l’état
}
