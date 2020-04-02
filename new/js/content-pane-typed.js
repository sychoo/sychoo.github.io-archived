// Wed 2020-04-01 17:18:49 EDT
// Written by Simon Chu

// Reference:
// https://github.com/mattboldt/typed.js/
var loadJavaScript = function (JavaScriptURL, implementationFunctionName, insertionLocation) {
  var scriptTag = document.createElement('script');

  scriptTag.src = JavaScriptURL;
  scriptTag.onload = implementationFunctionName;
  scriptTag.onreadystatechange = implementationFunctionName;
  insertionLocation.appendChild(scriptTag);
};

var typedEffect = function () {
  var html = `
  <p id="greeting">Hello,^150 World!^350 I'm</p>
  <p id="name">\`Simon Chu\`</p>^500
  <p id="description">And I'm a <strong>Computer Science PhD student</strong> at University of California,^150 Irvine</p>
  <hr>
  \`
  <ul>
    <li>
      <a href="life/index.html">
        Life
      </a>
      <span>|</span>
    </li>

    <li>
      <a href="career/index.html">
        Career
      </a>
      <span>|</span>
    </li>

    <li>
      <a href="journal/index.html">
        Journal
      </a>
      <span>|</span>
    </li>

    <li>
      <a href="resume/index.html">
        Resume
      </a>
    </li>
    \`
    `
  var typed = new Typed('.typed', {
    strings: [html],
    contentType: "html",
    //typeSpeed: 40,
    typeSpeed: 0,
    showCursor: false,
  //  onStop: (arrayPosition, self) => function() {self.option.showCursor = false}
  });
  //console.log(typed.option);
}
loadJavaScript('https://cdn.jsdelivr.net/npm/typed.js@2.0.11', typedEffect, document.head);

