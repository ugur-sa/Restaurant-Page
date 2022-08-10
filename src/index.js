import './styles.css';
import Header from './modules/header';
import Main from './modules/main';
import Footer from './modules/footer';

const body = document.querySelector('body');

const content = document.createElement('div');
content.setAttribute('id', 'content');

const header = Header();
const main = Main();
const footer = Footer();

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);
body.appendChild(content);

