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
  const inputCurrentValue =
    email === '' || password === ''
      ? alert('Fill all the fields: "Email" and "Password"!')
      : console.log(FormData);
  event.currentTarget.reset();

  // if (mail === '' || password === '') {
  //   alert('Заполните поле');
  // } else {
  //   const FormData = {
  //     mail,
  //     password,
  //   };
  //   console.log(FormData);
  // }
  // event.currentTarget.reset();

  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {});
}
