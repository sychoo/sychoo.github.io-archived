// Wed 2020-04-01 17:18:49 EDT
// Written by Simon Chu

// Reference:
// https://github.com/mattboldt/typed.js/

var loadJavaScript = function(JavaScriptURL, implementationFunctionName, insertionLocation) {
    var scriptTag = document.createElement('script');

    scriptTag.src = JavaScriptURL;
    scriptTag.onload = implementationFunctionName;
    scriptTag.onreadystatechange = implementationFunctionName;
    insertionLocation.appendChild(scriptTag);
};

var introHTML =
    `
  <p id="greeting">Hello,^150 World!^350 I'm</p>
  <p id="name">\`Simon Chu\`</p>^500
  <p id="description">And I'm a <strong>Computer Science PhD student</strong> at University of California,^150 Irvine</p>
  `;

var introHTMLDisplayAll =
    `
  \`
  <div class="cssanimation sequence fadeInTop">
    <p id="greeting">Hello, World! I'm</p>
    <p id="name">Simon Chu</p>
    <p id="description">And I'm a <strong>Computer Science PhD student</strong> at University of California, Irvine</p>
  </div>
  \`
  `;

var menuHTML =
    `
    \`
  <hr class="cssanimation sequence fadeInRight">
  <ul class="cssanimation sequence fadeInBottom">
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
    `;

var checkReferrer = function() {
    ref = document.referrer;

    // if the webpage is redirected from a sub-site of simonchu.org, stop the 
    // typing effect
    if (ref.match(/^https?:\/\/([^\/]+\.)?simonchu\.org(\/|$)/i)) {
        introHTML = introHTMLDisplayAll;
    }
}

var checkReload = function() {
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        introHTML = introHTMLDisplayAll;
    }
}

var typedEffect = function() {
    checkReferrer();
    checkReload();

    var html = introHTML + menuHTML;

    var typed = new Typed('.typed', {
        strings: [html],
        contentType: "html",
        typeSpeed: 40,
        showCursor: false,
    });
}

// load to the index page along with the typed.js CDN
loadJavaScript('https://cdn.jsdelivr.net/npm/typed.js@2.0.11', typedEffect, document.head);