import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/admin.css';
import '../styles/user.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// scroll
function scrollValue() {
  const scrollImage = document.getElementById('logo');
  const navbar = document.getElementById('bar-nav');
  const btn = document.getElementById('nav-btn');
  const btn2 = document.getElementById('nav-btn2');
  const btn3 = document.getElementById('nav-btn3');
  const scroll = window.scrollY;

  if (scroll < 350) {
    scrollImage.setAttribute('src', './logo/Logo Bedu v2.png');
    navbar.classList.remove('BgColour');
    btn.style.color = 'var(--bg-color)'; btn2.style.color = 'var(--bg-color)'; btn3.style.color = 'var(--bg-color)';
  } else {
    scrollImage.setAttribute('src', './logo/Logo Bedu.png');
    navbar.classList.add('BgColour');
    btn.style.color = 'var(--container-color)'; btn2.style.color = 'var(--container-color)'; btn3.style.color = 'var(--container-color)';
  }
}

window.addEventListener('scroll', scrollValue);
