import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/admin.css';
import '../styles/user.css';
import App from './views/app';
import './utils/navbar';

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
  const btn4 = document.getElementById('nav-btn4');
  const btn5 = document.getElementById('nav-btn5');
  const btn6 = document.getElementById('nav-btn6');
  const scroll = window.scrollY;

  if (scroll < 350) {
    if (scrollImage) {
      scrollImage.setAttribute('src', './logo/Logo Bedu v2.png');
    }
    if (navbar) {
      navbar.classList.remove('BgColour');
    }
    if (btn) {
      btn.style.color = 'var(--bg-color)';
    }
    if (btn2) {
      btn2.style.color = 'var(--bg-color)';
    }
    if (btn3) {
      btn3.style.color = 'var(--bg-color)';
    }
    if (btn4) {
      btn4.style.color = 'var(--bg-color)';
    }
    if (btn5) {
      btn5.style.color = 'var(--bg-color)';
    }
    if (btn6) {
      btn6.style.color = 'var(--bg-color)';
    }
  } else {
    if (scrollImage) {
      scrollImage.setAttribute('src', './logo/Logo Bedu.png');
    }
    if (navbar) {
      navbar.classList.add('BgColour');
    }
    if (btn) {
      btn.style.color = 'var(--container-color)';
    }
    if (btn2) {
      btn2.style.color = 'var(--container-color)';
    }
    if (btn3) {
      btn3.style.color = 'var(--container-color)';
    }
    if (btn4) {
      btn4.style.color = 'var(--container-color)';
    }
    if (btn5) {
      btn5.style.color = 'var(--container-color)';
    }
    if (btn6) {
      btn6.style.color = 'var(--container-color)';
    }
  }
}

window.addEventListener('scroll', scrollValue);
