var page = require('webpage').create();

// http://phantomjs.org/api/webpage/handler/on-resource-requested.html
page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};

// http://phantomjs.org/api/webpage/handler/on-resource-received.html
page.onResourceReceived = function(response) {
  console.log('Receive ' + JSON.stringify(response, undefined, 4));
};

page.open('https://fincontrol.firebaseapp.com/', function () {
  phantom.exit();
});
