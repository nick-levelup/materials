// http://phantomjs.org/api/webpage/
var page = require('webpage').create();

// http://phantomjs.org/api/webpage/method/open.html
page.open('https://fincontrol.firebaseapp.com/', function(status) {

  console.log("Status: " + status);

  if (status === "success") {
    // http://phantomjs.org/api/webpage/method/render.html
    page.render('79/phantomjs/example.png');
  }

  phantom.exit();
});
