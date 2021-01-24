const Handlebars = require('handlebars');
import menuTemplate from './templates/menu.hbs';
import menuItems from './menu.json';
import './sass/styles.scss';

// console.log(menuItems);
// console.log(menuTemplate);

const markup = menuTemplate(menuItems);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  menu: document.querySelector('.js-menu'),
  themeSwitcher: document.querySelector('#theme-switch-toggle'),
  page: document.querySelector('body'),
};

function isDarkTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    refs.themeSwitcher.checked = true;
  } else refs.themeSwitcher.checked = false;
}
function defaultTheme() {
  localStorage.setItem('theme', Theme.LIGHT);
  refs.page.classList.add(localStorage.getItem('theme'));
}
function savedTheme() {
  refs.page.classList.add('theme', localStorage.getItem('theme'));
  isDarkTheme();
}
function setTheme() {
  localStorage.getItem('theme') !== null ? savedTheme() : defaultTheme();
}
function lightTheme() {
  refs.page.classList.add('theme', localStorage.getItem('theme'));
  refs.page.classList.remove('theme', Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}
function darkTheme() {
  localStorage.setItem('theme', Theme.DARK),
    refs.page.classList.add('theme', localStorage.getItem('theme'));
}
function themeHandler() {
  if (!refs.themeSwitcher.checked) {
    lightTheme();
    return;
  } else darkTheme();
}
setTheme();
refs.menu.insertAdjacentHTML('beforeend', markup);
refs.themeSwitcher.addEventListener('change', themeHandler);
