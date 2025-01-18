document.addEventListener('DOMContentLoaded', function () {
  const ex0 = `const yeti = new Yeti();

yeti.show({
  message: 'This is a default Yeti alert!'
});`

  const ex = `const yeti = new Yeti();

document.getElementById('show-btn').addEventListener('click', () => {
  yeti.show({
    message: 'This is a default Yeti alert!'
  });
});`

  const ex1HTML = `<div class="flexrow">
  <button id="info-btn">Show Yeti info</button>
  <button class="ok" id="ok-btn">Show Yeti OK</button>
  <button class="warn" id="warn-btn">Show Yeti warn</button>
  <button class="nok" id="nok-btn">Show Yeti NOK</button>
</div>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");

const ex1JS = `const yeti = new Yeti();
const getMessage = (severity) => \`You clicked the \${severity} button. Here is your YETI \${severity}!\`;  

document.getElementById('info-btn').addEventListener('click', () => {
  yeti.show({
    message: getMessage('info'),
  });
});

document.getElementById('ok-btn').addEventListener('click', () => {
  yeti.show({
    message: getMessage('ok'),
    severity: 'ok'
  });
});

document.getElementById("warn-btn").addEventListener('click', () => {
  yeti.show({
    message: getMessage('warn'),
    severity: 'warn'
  });
});

document.getElementById('nok-btn').addEventListener("click", () => {
  yeti.show({
    message: getMessage('nok'),
    severity: 'nok'
  });
});`

const ex2 = `const yeti = new Yeti();
const getMessage = (severity) => \`You clicked the \${severity} button. Here is your YETI \${severity}!\`;  

document.getElementById('info-btn').addEventListener('click', () => {
  yeti.show({
    title: 'YETI INFO',
    message: getMessage('info')
  });
});

document.getElementById('ok-btn').addEventListener('click', () => {
  yeti.show({
    title: 'YETI OK',
    message: getMessage('ok'),
    severity: 'ok'
  });
});

document.getElementById("warn-btn").addEventListener('click', () => {
  yeti.show({
    title: 'YETI WARN',
    message: getMessage('warn'),
    severity: 'warn'
  });
});

document.getElementById('nok-btn').addEventListener("click", () => {
  yeti.show({
    title: 'YETI NOK',
    message: getMessage('nok'),
    severity: 'nok'
  });
});`

const ex3 = `const yeti = new Yeti();
const getMessage = (severity) => \`You clicked the \${severity} button. Here is your YETI \${severity}!\`;  

document.getElementById("info-btn-3").addEventListener("click", () => {
  yeti.show({
    message: getMessage("info"),
    fadeOnNext: false
  });
});

document.getElementById("ok-btn-3").addEventListener("click", () => {
  yeti.show({
    message: getMessage("ok"),
    severity: "ok",
    fadeOnNext: false
  });
});

document.getElementById("warn-btn-3").addEventListener("click", () => {
  yeti.show({
    message: getMessage("warn"),
    severity: "warn",
    fadeOnNext: false
  });
});

document.getElementById("nok-btn-3").addEventListener("click", () => {
  yeti.show({
    message: getMessage("nok"),
    severity: "nok",
    fadeOnNext: false
  });
});`

const ex4 = `const yeti = new Yeti();

document.getElementById("info-btn-4").addEventListener("click", () => {
  yeti.show({
    message: 'This alert will last 0,5s',
    fadeOnNext: false,
    time: 500
  });
});

document.getElementById("ok-btn-4").addEventListener("click", () => {
  yeti.show({
    message: 'This alert will last 1s',
    severity: "ok",
    fadeOnNext: false,
    time: 1000
  });
});

document.getElementById("warn-btn-4").addEventListener("click", () => {
  yeti.show({
    message: 'This alert will last 2s',
    severity: "warn",
    fadeOnNext: false,
    time: 2000
  });
});

document.getElementById("nok-btn-4").addEventListener("click", () => {
  yeti.show({
    message: 'This alert will last 3s',
    severity: "nok",
    fadeOnNext: false,
    time: 3000
  });
});`

const ex5 = `const yeti = new Yeti();

document.getElementById("info-btn-5").addEventListener("click", () => {
  yeti.show({
    message: 'Alert without shadow neither border',
    shadow: false
  });
});

document.getElementById("ok-btn-5").addEventListener("click", () => {
  yeti.show({
    message: 'Alert With border',
    border: 1
  });
});

document.getElementById("warn-btn-5").addEventListener("click", () => {
  yeti.show({
    message: 'Alert with left border',
    severity: "warn",
    border: 2
  });
});

document.getElementById("nok-btn-5").addEventListener("click", () => {
  yeti.show({
    message: 'Alert with border, but no shadow',
    severity: "nok",
    shadow: false,
    border: 1,
  });
});`

document.getElementById('ex0').innerHTML = `<pre><code class="language-javascript">${ex0}</code></pre>`;
document.getElementById('ex').innerHTML = `<pre><code class="language-javascript">${ex}</code></pre>`;
document.getElementById('ex1-html').innerHTML = `<pre><code class="language-html">${ex1HTML}</code></pre>`;
document.getElementById('ex1-js').innerHTML = `<pre><code class="language-javascript">${ex1JS}</code></pre>`;
document.getElementById('ex2').innerHTML = `<pre><code class="language-javascript">${ex2}</code></pre>`;
document.getElementById('ex3').innerHTML = `<pre><code class="language-javascript">${ex3}</code></pre>`;
document.getElementById('ex4').innerHTML = `<pre><code class="language-javascript">${ex4}</code></pre>`;
document.getElementById('ex5').innerHTML = `<pre><code class="language-javascript">${ex5}</code></pre>`;

hljs.highlightAll();

});
