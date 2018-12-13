const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(`<html>
<head>
<title>Dominate Color</title>
</head>
<body>
<p>Hello world</p>
</body>
</html>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"