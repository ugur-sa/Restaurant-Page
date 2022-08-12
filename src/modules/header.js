const Header = () => {
  function createListElement(s) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.innerHTML = s;
    a.setAttribute('id', s);
    li.appendChild(a);

    return li;
  }
  const header = document.createElement('header');
  const nav = document.createElement('div');
  nav.classList.add('nav');
  const ul = document.createElement('ul');

  ul.appendChild(createListElement('Home'));
  ul.appendChild(createListElement('Menu'));
  ul.appendChild(createListElement('Contact Us'));

  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
}

export default Header;
