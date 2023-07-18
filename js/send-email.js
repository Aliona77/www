const form = document.querySelector(".contact__form");

const submitForm = (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("mail").value.trim();
  const message = document.getElementById("msg").value.trim();
 

  
  // Check if name and email fields are not empty
  if (!name && !email) {
    alert("Please fill in name and email.");
    return; 
  }
  if (!name) {
    alert("Please enter your name.");
    return; 
  }
  if  (!email) {
    alert("Please provide your email.");
    return;
  }

  // Check if the email is in a valid format
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return; 
  }

   const mailtoLink = `mailto:chaban.aliona1@gmail.com?&body=${encodeURIComponent(
     `${message}`
   )}`;

  window.location.href = mailtoLink;

  // reset form
  form.reset();
};

form.addEventListener("submit", submitForm);
