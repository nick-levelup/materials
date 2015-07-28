/*
npm

https://www.npmjs.com/
http://habrahabr.ru/post/206678/
http://habrahabr.ru/post/206678/

По умолчанию npm будет устанавливать все пакеты в локальном каталоге, в которым вы сейчас работаете. Это правильно. 
npm install http-server

Если вы хотите чтобы пакет был доступен всем приложениям, его нужно установить глобально:
npm install http-server -g

Удаление
npm uninstall http-server
npm uninstall http-server -g

Установка определённой версии пакета
npm install http-server@0.3.0

npm install express --save
npm install grunt --save-dev


Patch releases: 1.0 or 1.0.x or ~1.0.4
Minor releases: 1 or 1.x or ^1.0.4
Major releases: * or x
*/