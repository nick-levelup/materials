// Использование шаблонов
// Handlebars.js
// Underscore.js

// Handlebars templates look like regular HTML, with embedded handlebars expressions. 
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{body}}
  </div>
</div>

// You can deliver a template to the browser by including it in a <script> tag. 
<script id="entry-template" type="text/x-handlebars-template">
  <div class="entry">
    <h1>{{title}}</h1>
    <div class="body">
      {{body}}
    </div>
  </div>
</script>

// Compile a template in JavaScript by using Handlebars.compile
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

// Get the HTML result of evaluating a Handlebars template
// by executing the template with a context. 

var context = {title: "My New Post", body: "This is my first post!"};
var html    = template(context);

//res
<div class="entry">
  <h1>My New Post</h1>
  <div class="body">
    This is my first post!
  </div>
</div>

// escaping
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{{body}}}
  </div>
</div>

// Template comments with {{!-- --}} or {{! }}. 
<div class="entry">
  {{!-- only output this author names if an author exists --}}
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{/if}}
</div>

<div class="entry">
  {{! This comment will not be in the output }}
  <!-- This comment will be in the output -->
</div>

// Paths
<div class="entry">
  <h1>{{title}}</h1>
  <h2>By {{author.name}}</h2>

  <div class="body">
    {{body}}
  </div>
</div>

// Block Expressions 
// Helpers 
// Partials 