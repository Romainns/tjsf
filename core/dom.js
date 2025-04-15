export function createElement(type, props = {}, ...children) {
    const el = document.createElement(type);
    // Gestion des attributs et des événements
    for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("on") && typeof value === "function") {
    const eventType = key.slice(2).toLowerCase(); // onClick → click
    el.addEventListener(eventType, value);
    } else {
    el.setAttribute(key, value);
    }
    }
    // Gestion des enfants
    children.forEach((child) => {
    if (Array.isArray(child)) {
    child.forEach((nested) => appendChild(el, nested));
    } else {
    appendChild(el, child);
    }
    });
    return el;
    }
    function appendChild(parent, child) {
    if (typeof child === "string" || typeof child === "number") {
    parent.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
    parent.appendChild(child);
    } else if (typeof child === "function") {
    const result = child();
    if (result instanceof Node) {
    parent.appendChild(result);
    }
    }
    }
    document.addEventListener('DOMContentLoaded', () => {
        const root = document.getElementById('app');
        root.appendChild(App.render()); // On appelle explicitement la méthode render
        });