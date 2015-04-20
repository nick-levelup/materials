elem.style
// Свойство style дает доступ к стилю элемента.
// Это свойство можно как читать, так и править.

element.style.width = '100px';
element.style.zIndex = 10000;
element.style.cssFloat = 'left' // исключение
element.style.MozBorderRadius = '5px';

// Чтобы сбросить поставленный стиль,
// присваивают в style пустую строку:
element.style.width = "";

// Свойство style позволяет читать эту информацию, но лишь ту,
// которая доступна напрямую из свойства/атрибута "style"

// Для того, чтобы получить текущее используемое значение (used value)
// свойства, используется метод

window.getComputedStyle(element, pseudo) // IE9+

element //значения для которого нужно получить
pseudo // Указывается, если нужен стиль псевдоэлемента,

var computedStyle = getComputedStyle(document.body, '');
alert(computedStyle.marginTop); // выведет отступ в пикселях
alert(computedStyle.color); // выведет цвет

// При обращении к сокращенному:
// padding, margin, border — правильный результат не гарантируется.