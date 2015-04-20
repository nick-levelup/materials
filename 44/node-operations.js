// Добавление и удаление узлов

// Создание элементов: createElement

document.createElement(tag) // Создает новый элемент с указанным тегом:
document.createTextNode(text) // Создает новый текстовый узел с данным текстом:

// Клонирование

newElem = elem.cloneNode(bool)

// true - Клонирует элемент elem, вместе с атрибутами, включая вложенные в него
// false Клонирует элемент elem, вместе с атрибутами, но без подэлементов.


// Добавление элемента: appendChild, insertBefore

// Добавляет elem в список дочерних элементов parentElem.
// Новый узел добавляется в конец списка.
parentElem.appendChild(elem)

// Вставляет elemв список дочерних parentElem,
// перед элементом nextSibling.
insertedElement = parentElem.insertBefore(newElement, nextSibling)


// Удаление узлов: removeChild
// Для удаления узла есть два метода:

// Удаляет elem из списка детей parentElem.
parentElem.removeChild(elem)

// Среди детей parentElem заменяет currentElem на elem.
parentElem.replaceChild(elem.currentElem)