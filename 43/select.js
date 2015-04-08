/*

document.getElementById или просто id
getElementsByTagName
getElementsByName
getElementsByClassName
querySelectorAll
querySelector
matches
closest

*/

// document.getElementById
/* === */
document.getElementById('content')
/* === */

// elem.getElementsByTagName(tag)
// Можно получить всех потомков, передав звездочку '*' вместо тега:
// Возвращается коллекция, а не элемент
// Метод getElementsByTagName может искать внутри любого элемента.
/* === */
document.getElementsByTagName('div')
document.getElementsByTagName('*')
/* === */


// document.getElementsByName(name)
// Вызов document.getElementsByName(name)
// позволяет получить все элементы с данным атрибутом name.
/* === */
document.getElementsByName('age');
/* === */


// elem.getElementsByClassName(className)
// IE9 +
// Вызов elem.getElementsByClassName(className) возвращает
// коллекцию элементов с классом className. Находит элемент и в том
// случае, если у него несколько классов, а искомый – один из них.
/* === */
document.getElementsByClassName('.container')
/* === */

// elem.querySelectorAll(css)
// IE8+
// Вызов elem.querySelectorAll(css) возвращает все элементы внутри elem,
// удовлетворяющие CSS-селектору css.

/* === */
document.querySelectorAll('.container > h2')
/* === */

// elem.querySelector(css)
// IE8+
// Вызов elem.querySelector(css) возвращает первый элемент,
// соответствующий CSS-селектору css.
/* === */
document.querySelector('.container > h2')
/* === */

// elem.matches(css)
// IE9+
// Метод elem.matches(css) ничего не ищет, а проверяет,
// удовлетворяет ли elem селектору css. Он возвращает true либо false.
/* === */
elem.matches('a[href$="zip"]')
/* === */



/*


    Все элементы label внутри таблицы. Должно быть 3 элемента.
    Первую ячейку таблицы (со словом "Возраст").
    Вторую форму в документе.
    Форму с именем search, без использования её позиции в документе.
    Элемент input в форме с именем search. Если их несколько, то нужен первый.
    Элемент с именем info[0], без точного знания его позиции в документе.
    Элемент с именем info[0], внутри формы с именем search-person.


<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
</head>

<body>
    <form name="search">
        <label>Поиск по сайту:
            <input type="text" name="search">
        </label>
        <input type="submit" value="Искать!">
    </form>
    <hr>
    <form name="search-person">
        Поиск по посетителям:
        <table id="age-table">
            <tr>
                <td>Возраст:</td>
                <td id="age-list">
                    <label>
                        <input type="radio" name="age" value="young">до 18</label>
                    <label>
                        <input type="radio" name="age" value="mature">18-50</label>
                    <label>
                        <input type="radio" name="age" value="senior">более 50</label>
                </td>
            </tr>
            <tr>
                <td>Дополнительно:</td>
                <td>
                    <input type="text" name="info[0]">
                    <input type="text" name="info[1]">
                    <input type="text" name="info[2]">
                </td>
            </tr>
        </table>
        <input type="submit" value="Искать!">
    </form>
</body>

</html>


*/