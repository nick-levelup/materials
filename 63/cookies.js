// https://github.com/carhartl/jquery-cookie

document.cookie

/*
Эта строка состоит из пар ключ=значение,
которые перечисляются через точку с запятой с пробелом "; ".
*/

/*
path=/mypath
    Путь, внутри которого будет доступ к cookie.
    Если не указать, то имеется в виду текущий путь и все пути ниже него.
    Как правило, используется path=/,
    то есть cookie доступно со всех страниц сайта.

domain=site.com
    Домен, на котором доступно cookie.
    Если не указать, то текущий домен.
    Допустимо указывать текущий домен site.com и его поддомены,
    например forum.site.com.
    Если указать специальную маску .site.com, то cookie будет доступно на
    сайте и всех его поддоменах. Это используется, например, в случаях,
    когда кука содержит данные авторизации и должна быть доступна как на site.com,
    так и на forum.site.com.

expires=Tue, 19 Jan 2038 03:14:07 GMT

    Дата истечения куки в формате GMT.
    Получить нужную дату можно, используя объект Date.
    Его можно установить в любое время, а потом вызвать
    toUTCString(), например:

    Если дату не указать, то cookie будет считаться «сессионным».
    Такое cookie удаляется при закрытии браузера.
    Если дата в прошлом, то кука будет удалена.
*/

/*
    Имя и значение (после encodeURIComponent) вместе не должны превышать 4кб.
    Общее количество cookie на домен ограничено 30-50, в зависимости от браузера.
    Разные домены 2го уровня полностью изолированы. Но в пределах доменов 3го уровня
    куки можно ставить свободно с указанием domain.
    Сервер может поставить cookie с дополнительным флагом HttpOnly. Cookie
    с таким параметром передаётся только в заголовках, оно никак не доступно из JavaScript.
*/
