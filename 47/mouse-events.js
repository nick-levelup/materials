// Простые
/*
mousedown
    Кнопка мыши нажата над элементом.
mouseup
    Кнопка мыши отпущена над элементом.
mouseover
    Мышь появилась над элементом.
mouseout
    Мышь ушла с элемента.
mousemove
    Каждое движение мыши над элементом генерирует это событие. 
*/


// Составные
/*

click
    Вызывается при клике мышью, то есть при mousedown, а затем mouseup на одном элементе
contextmenu
    Вызывается при клике правой кнопкой мыши на элементе.
dblclick
    Вызывается при двойном клике по элементу. 
*/

// Порядок
// mousedown → mouseup → click.


// Для получения кнопки мыши в объекте event есть свойство which.

event.which === 1 // левая кнопка
event.which === 2 // средняя кнопка
event.which === 3 // правая кнопка


// Модификаторы shift, alt, ctrl и meta

event.shiftKey
event.altKey
event.ctrlKey
event.metaKey // для Mac


// Координаты в окне: clientX/Y
event.clientX
event.clientY

// Координаты относительно документа: pageX/Y
event.pageX
event.pageY