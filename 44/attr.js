// http://www.w3.org/TR/REC-DOM-Level-1/level-one-html.html#ID-58190037
// http://www.w3.org/TR/REC-DOM-Level-1/level-one-html.html#ID-48250443
// http://www.w3.org/TR/html-markup/input.text.html


// Атрибуты
elem.hasAttribute(name) //­ проверяет наличие атрибута
elem.getAttribute(name) //­ получает значение атрибута
elem.setAttribute(name,value) //­ устанавливает атрибут
elem.removeAttribute(name) //­ удаляет атрибут

/*
- Могут быть только строками.
- Их имя нечувствительно к регистру(т.к. это HTML)
- Видны в innerHTML(за исключением старых IE)

- Все атрибуты элемента можно получить с помощью свойства attributes,
которое содержит псевдо­массив объектов типа Attr
*/

// Свойста
// Стандартные свойства DOM синхронизируются с атрибутами.

// id
// href Синхронизация не гарантирует одинакового значения.
// value синхронизируется только из атрибута в свойство:

// Исключение: атрибут "class"соответствует свойству className.
// Не работает в IE<9, точнее — не работает установка класса.