// Тип: nodeType
// http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-1950641247

element.nodeType // 1

// Самые важные - 1,3,8

// Задача
// Написать функцию которая принимает в параметр узел, и возвращает массив
// всех 
// 1. дочерних текстовых узлов
// 2. дочерних текстовых узлов рекурсивно

getChildTextNodes() // []
getTextNodes() // []


// Тег: nodeName и tagName
document.body.nodeName //BODY
document.body.tagName //BODY


// innerHTML: содержимое элемента
// Свойство innerHTML есть только у узлов­элементов.
// Оно позволяет получить HTML­содержимое узла в виде строки.
// В innerHTML можно и читать и писать.

// Запись
document.body.innerHTML='<b>тест';
// Чтение
document.body.innerHTML //<b>тест</b>

// - Добавление innerHTML+=осуществляет перезапись
// - Скрипты не выполняются
// - Все изображения и другие ресурсы будут перезагружены.
// - IE < 9 есть проблемы с style и script в начале innerHTML


// outerHTML: HTML узла целиком

//<div id="hi">Привет <b>Мир</b></div>
var div = document.getElementById('hi');
div.outerHTML; //<div>Привет<b>Мир</b></div>


// nodeValue/data: содержимое текстового узла
// Можно записать и читать


// Задача

// написать функцию hello
// которая в качестве аргумента получает имя пользователя
// после вызова она обновляет приветствие
// <div>Привет, <span id="user-name"></span></div>