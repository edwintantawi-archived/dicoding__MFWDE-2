import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import registerServiceWorker from './utils/sw-register';
import App from './views/app';

const app = new App({
  toggler: document.querySelector('.nav__toggle'),
  drawer: {
    navigation: document.querySelector('.nav'),
    layer: document.querySelector('.layer'),
  },
  header: document.querySelector('.header'),
  content: document.querySelector('#content'),
});

window.addEventListener('load', () => {
  app.renderPage();
  registerServiceWorker();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
