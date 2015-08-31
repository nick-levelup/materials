/*
Протокол WebSocket предназначен для решения любых задач и снятия ограничений обмена данными между браузером и сервером.

Он позволяет пересылать любые данные, на любой домен, безопасно и почти без лишнего сетевого трафика.

IE10+, FF11+, Chrome 16+, Safari 6+, Opera 12.5+.
В более старых версиях FF, Chrome, Safari, Opera есть поддержка черновых редакций протокола.

*/

// http
var socket = new WebSocket("ws://echo.websocket.org");

// https
var socket = new WebSocket("wss://echo.websocket.org");

// Events

/* ==== */
socket.onopen = function() {
  console.log("Соединение установлено.");
};

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log('Соединение закрыто чисто');
  } else {
    console.log('Обрыв соединения'); // например, "убит" процесс сервера
  }
  console.log('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function(event) {
  console.log("Получены данные " + event.data);
};

socket.onerror = function(error) {
  console.log("Ошибка " + error.message);
};
/* ==== */

/*
Для посылки данных используется метод socket.send(data). Пересылать можно любые данные.
*/

socket.send("Привет");

//

socket.send(form.elements[0].file);


/*
Протокол WebSocket работает над HTTP.

Это означает, что при соединении браузер отправляет специальные заголовки,
спрашивая: «поддерживает ли сервер WebSocket?».

Если сервер в ответных заголовках отвечает «да, поддерживаю», то дальше HTTP прекращается и
общение идёт на специальном протоколе WebSocket, который уже не имеет с HTTP ничего общего.
*/

/*
В протокол встроена проверка связи при помощи управляющих фреймов типа PING и PONG.
Иначе говоря, сервер всегда знает, жив ли посетитель или у него проблема с сетью.
*/

/*
Коды закрытия

Коды закрытия вебсокета event.code, чтобы не путать их с HTTP-кодами, состоят из 4 цифр:

1000
Нормальное закрытие.

1001
Удалённая сторона «исчезла». Например, процесс сервера убит или браузер перешёл на другую страницу.

1002
Удалённая сторона завершила соединение в связи с ошибкой протокола.

1003
Удалённая сторона завершила соединение в связи с тем, что она получила данные, которые не может принять.
Например, сторона, которая понимает только текстовые данные, может закрыть соединение с таким кодом, если приняла бинарное сообщение.
*/

/*
<!-- форма для отправки сообщений -->
<form name="publish">
  <input type="text" name="message" />
  <input type="submit" value="Отправить" />
</form>

<!-- здесь будут появляться входящие сообщения -->
<div id="subscribe"></div>
*/

/* ==== */
// создать подключение
var socket = new WebSocket("ws://localhost:8081");

// отправить сообщение из формы publish
document.forms.publish.onsubmit = function() {
  var outgoingMessage = this.message.value;

  socket.send(outgoingMessage);
  return false;
};

// обработчик входящих сообщений
socket.onmessage = function(event) {
  var incomingMessage = event.data;
  showMessage(incomingMessage);
};

// показать сообщение в div#subscribe
function showMessage(message) {
  var messageElem = document.createElement('div');
  messageElem.appendChild(document.createTextNode(message));
  document.getElementById('subscribe').appendChild(messageElem);
}

/* ==== */
// npm install node-static
// npm install ws

var WebSocketServer = new require('ws');

// подключенные клиенты
var clients = {};

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
  port: 8081
});
webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("новое соединение " + id);

  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);

    for (var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('соединение закрыто ' + id);
    delete clients[id];
  });

});