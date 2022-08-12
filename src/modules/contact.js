function Contact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const title = document.createElement('p');
  title.innerHTML = 'Contact Us!';

  const form = document.createElement('form');

  const firstName = createInputElements('text', 'firstname', 'firstname', 'Your First Name...');
  const lastName = createInputElements('text', 'lastname', 'lastname', 'Your Last Name...');
  const email = createInputElements('email', 'email', 'email', 'Your E-Mail...');

  const textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'subject');
  textArea.setAttribute('name', 'subject');
  textArea.setAttribute('placeholder', 'Write us something...');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.innerHTML = 'Submit';

  form.appendChild(firstName);
  form.appendChild(lastName);
  form.appendChild(email);
  form.appendChild(textArea);
  form.appendChild(submitButton);

  contact.appendChild(title);
  contact.appendChild(form);

  return contact;
}

function createInputElements(type, id, name, placeholder) {
  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('id', id);
  input.setAttribute('name', name);
  input.setAttribute('placeholder', placeholder);

  return input;
}

export default Contact;