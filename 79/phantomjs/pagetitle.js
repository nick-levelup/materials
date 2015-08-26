var page = require('webpage').create();

page.open('http://vk.com', function() {

  // http://phantomjs.org/api/webpage/method/evaluate.html
  var title = page.evaluate(function() {
    return document.title;
  });

  console.log('Page title is ' + title);

  phantom.exit();
});
