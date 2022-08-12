import './styles.css';
import Header from './modules/header';
import Home from './modules/home';
import Menu from './modules/menu';
import Contact from './modules/contact';
import Footer from './modules/footer';
import { clear } from './modules/functions';

const body = document.querySelector('body');

const content = document.createElement('div');
content.setAttribute('id', 'content');

const header = Header('Home');
const mainElement = document.createElement('div');
mainElement.classList.add('main');
const home = Home();
const footer = Footer();

mainElement.appendChild(home);

content.appendChild(header);
content.appendChild(mainElement);
content.appendChild(footer);
body.appendChild(content);


const homeNav = document.getElementById('Home');
const menuNav = document.getElementById('Menu');
homeNav.classList.add('underline');

const homeButton = document.getElementById('Home');
const menuButton = document.getElementById('Menu');
const contactNav = document.getElementById('Contact Us');
const contactButton = document.getElementById('Contact Us');

const main = document.querySelector('.main');

homeButton.addEventListener('click', () => {
  clear(main);
  const home = Home();
  main.appendChild(home);
  homeNav.classList.add('underline');
  menuNav.classList.remove('underline');
  contactNav.classList.remove('underline');
});
menuButton.addEventListener('click', () => {
  clear(main);
  const menu = Menu();
  main.appendChild(menu);
  homeNav.classList.remove('underline');
  menuNav.classList.add('underline');
  contactNav.classList.remove('underline');
});
contactButton.addEventListener('click', () => {
  clear(main);
  const contact = Contact();
  main.appendChild(contact);
  homeNav.classList.remove('underline');
  menuNav.classList.remove('underline');
  contactNav.classList.add('underline');
});
