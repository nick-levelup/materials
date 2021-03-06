// Наборы
/[еао]/ // любой символ из этих трёх: 'а', 'е', или 'о'.

// диапазоны символов
/[a-z]/
/[0-5]/
/[0-9A-Z]/

"Exception 0xAF" // найти xAF

/\d/ // [0-9],
/\w/ // [a-zA-Z0-9_],
/\s/ // [\t\n\v\f\r ] плюс несколько юникодных пробельных символов.

// исключающие диапазоны
/[^аеуо]/ // любой символ, кроме 'a', 'e', 'y', 'o'.
/[^0-9]/ // любой символ, кроме цифры, то же что \D.
/[^\s]/ // любой не-пробельный символ, то же что \S.

"alice15@gmail.com" //любые символы, кроме букв, цифр и пробелов:

// В квадратных скобках большинство специальных
// символов можно использовать без экранирования

/*
Найдет ли регэксп /Java[^script]/ что-нибудь в строке Java?
А в строке JavaScript?
*/

/*
"Завтрак в 09:00. Обед - в 21-30"; // 09:00, 21-30
*/





// Квантификаторы

/x{n}/ // Количество {n}

/\d{5}/
/\d\d\d\d\d/

//от-до
/x{3,5}/
/\d{3,5}/

// от и более
{x,}

"+7(903)-123-45-67" // 7,903,123,45,67

// Короткие обозначения

+ === {1,}
? === {0,1}
* === {0,}


/\d+/ // ?
"Можно писать color или colour" // color, colour

"0 1 12.345 7890" // 12.345
"<BODY> ... </BODY>" // <BODY>
"<h1>Привет!</h1>" // <h1>, </h1>
"Привет!... Как дела?....." // ..., .....
"color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2" // #121212,#AA00ef


// Скобочные группы
/(go)+/
/go+/

// или

/html|php|css|java(script)?/gi

"Сначала появился HTML, затем CSS, потом JavaScript" // ?

// Для указания границ альтернации используют скобки (...),
// например: before(XXX|YYY)after будет искать
// beforeXXXafter или beforeYYYafter.