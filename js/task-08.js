const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const FormData = {
    email,
    password,
  };
  if (email === '' || password === '') {
    alert('Заполните поле');
  } else {
    console.log(FormData);
    event.currentTarget.reset();
  }
}
