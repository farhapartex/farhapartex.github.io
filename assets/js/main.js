(function () {
  // Mobile menu
  var menuBtn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
  }

  // Light / dark toggle
  var root = document.documentElement;
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Code blocks: language label + copy button
  document.querySelectorAll('div.highlighter-rouge').forEach(function (block) {
    var match = block.className.match(/language-(\S+)/);
    var lang = match ? match[1] : '';
    if (lang === 'plaintext') lang = '';

    var bar = document.createElement('div');
    bar.className = 'code-bar';
    var label = document.createElement('span');
    label.textContent = lang;
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      var code = block.querySelector('pre code') || block.querySelector('pre');
      navigator.clipboard.writeText(code.innerText).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      });
    });
    bar.appendChild(label);
    bar.appendChild(btn);
    block.insertBefore(bar, block.firstChild);
  });
})();
