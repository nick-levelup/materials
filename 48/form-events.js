/***********/

'focus' // Событие фокусировки на элемент
'blur' // Событие срабатывает, когда фокусировка убрана


/*
Задачи

  1. Проверка форм по событию
  2. Изменение полей форм, когда они не в фокусе (плейсхолдер)
  3. Выполнение фоновых задач в не фокусированных окнах
*/

/***********/
element.focus(); // ставит фокус на элементе
element.blur(); // убирает фокус с элемента


document.activeElement // Текущий элемент, на котором фокус


/***********/
'change' // происходит по окончании изменении значения элемента формы

'input' // происходит по изменению поля

/*
Задачи
  1. Проверка форм по событию
  2. Создание калькуляторов
*/


/************/
'submit' // происходит при отправки формы

form.submit() // отправить форму. метод

/*
Задачи
  1. Проверка форм по событию
  2. Отправка данных на сервер
  3. Отмена действия по умолчанию
*/