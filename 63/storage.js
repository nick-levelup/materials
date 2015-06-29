/*
sessionStorage
localStorage
*/

localStorage.setItem('favoriteflavor','vanilla');
localStorage.getItem('favoriteflavor');
localStorage.removeItem('favoriteflavor');

// Save object?

JSON.stringify()
JSON.parse()

// Where To Find Local Storage Data?

// Clear all data?
localStorage.clear()

// Events?
// https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent
window.addEventListener("storage", handle_storage, false);

/*
event.

event.key - string  the named key that was added, removed, or modified
event.oldValue - any the previous value (now overwritten), or null if a new item was added
event.newValue - any the new value, or null if an item was removed
event.url - string  the page which called a method that triggered this change
*/

// Task
// 1. Remember value in user text input
// 2. Link all pages
// 3. Save form data to sesiion storage