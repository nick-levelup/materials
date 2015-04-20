classList // IE10+
// Свойство предоставляет удобный интерфейс для работы
// с отдельными классами.

elem.classList.contains(cls)
// возвращает true/false, в зависимости от того,
// есть ли у элемента класс cls.

elem.classList.add/remove(cls) // добавляет/удаляет класс cls

// если класса cls нет, добавляет его, если есть — удаляет.
elem.classList.toggle(cls)