function Home() {
  const about = document.createElement('div');
  about.classList.add('about');

  const chefImage = document.createElement('div');
  chefImage.classList.add('chef');

  const welcome = document.createElement('div');
  welcome.classList.add('welcome');

  const welcomeText = document.createElement('p');
  const welcomeTextContent = 'Hello, my name is ______.</br>This restaurant was founded in 1930</br>and is cooking the same dishes as 90 years ago';
  welcomeText.innerHTML = welcomeTextContent;
  welcome.appendChild(welcomeText);
  about.appendChild(chefImage);
  about.appendChild(welcome);

  return about;
}

export default Home;
