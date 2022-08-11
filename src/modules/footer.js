function Footer() {
  const footer = document.createElement('footer');
  const madeBy = document.createElement('p');
  madeBy.innerHTML = '&copy; made by Ugur Sadiklar';
  footer.appendChild(madeBy);
  return footer;
}

export default Footer;
