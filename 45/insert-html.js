elem.insertAdjacentHTML(where, html);

// Метод insertAdjacentHTML позволяет вставлять произвольный HTML в любое место документа,
// в том числе и между узлами!

html // Строка HTML, которую нужно вставить
where
/*
Куда по отношению к elem вставлять строку. Всего четыре варианта:
1. beforeBegin — перед elem.
2. afterBegin — внутрь elem, в самое начало.
3. beforeEnd — внутрь elem, в конец.
4. afterEnd — после elem.
*/

/*
<ul>
  <li>1</li>
  <li>2</li>
  <li>5</li>
</ul>
*/

// вставляет в произвольное место не строку HTML, а элемент newElem.
elem.insertAdjacentElement(where, newElem)

//создаёт текстовый узел из строки text и вставляет
// его в указанное место относительно elem.
elem.insertAdjacentText(where, text)
