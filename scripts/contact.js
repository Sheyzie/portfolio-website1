
// get the DOM elements
const nameField = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const errorSpan = document.querySelector(".error-span");

const sendBtn = document.getElementById("submitBtn");

// add event listener to the send button

sendBtn.addEventListener("click", (e) => {
  // prevent form submission
  e.preventDefault();

  clearErrors();

  let valid = true;

  // validate nameField
  if (!nameField.value) {

    showError(nameField, "Name is required");
    valid = false;

  } else if (!isNaN(nameField.value)) {

    showError(nameField, "Name should not contain numbers");
    valid = false;
  }

  // validate emailField
  if (!email.value) {

    showError(email, "Email is required");
    valid = false;

  } else if (!isValidEmail(email.value)) {

    showError(email, "Please enter a valid email address");
    valid = false;

  }
  // validate subjectField

  if (!subject.value) {

    showError(subject, "Subject is required");
    valid = false;
  }

  // validate messageField
  if (!message.value) {

    showError(message, "Message is required");
    valid = false;

  } 

  if (valid) {
    // form submission logic here
    sendMessage()
    // clear the form fields
    nameField.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } else {
    return valid
  }

});

// add event listener to inputs and textarea
nameField.addEventListener("input", () => clearErrors());
email.addEventListener("input", () => clearErrors());
subject.addEventListener("input", () => clearErrors());
message.addEventListener("input", () => clearErrors());

// show error message
function showError(input, message) {
  const errorList = document.getElementById(`error-${input.name}`);
  errorList.innerText = message;
  errorSpan.style.display = "block";
}

// clear error messages
function clearErrors() {
  const errorLists = document.querySelectorAll(".error");

  errorLists.forEach((span) => (span.innerText = ""));
  errorSpan.style.display = "none";
}

// validate email format
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// sending the email
async function sendMessage() {

  // creating email content
  const emailContent = {
    name: nameField.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  }
  
  // sending mail to emailjs
 emailjs.send('service_sheyzie', 'template_ap9mczv', emailContent).then(() => {
  errorSpan.innerHTML = "Message sent successfully";
  errorSpan.style.color = 'green';
  errorSpan.style.backgroundColor = 'lightgreen';
  errorSpan.style.display = "block";

  setTimeout(() => {
    errorSpan.innerHTML = "";
    errorSpan.style.display = "none";
  }, 3000)
 })


}