const form = document.querySelector(".contact__form");
// const name = document.getElementById("name").value;
// const mail = document.getElementById("mail").value;
// const message = document.getElementById("msg").value;

const submitForm = (e) => {
  e.preventDefault();

 const mailtoLink = 'mailto:chaban.aliona1@gmail.com';

  window.location.href = mailtoLink;
};

form.addEventListener("submit", submitForm);
