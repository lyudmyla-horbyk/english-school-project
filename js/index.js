document.querySelector(".contactus-form").addEventListener("submit", showAlert);

function showAlert(event) {
  event.preventDefault();

  const contactusNameInput = document.querySelector(".contactus-form-input");
  console.log(contactusNameInput.value);
  const contactusEmailInput = document.querySelector(
    ".contactus-form-input[type='email']"
  );
  console.log(contactusEmailInput.value);
  const contactusMessageInput = document.querySelector(
    ".contactus-form-textarea"
  );
  console.log(contactusMessageInput.value);

  fetch("/feedback", {
    body: JSON.stringify({
      name: contactusNameInput.value,
      email: contactusEmailInput.value,
      message: contactusMessageInput.value
    }),
    method: "post",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(() => alert("Message Send"))
    .catch(() => alert("Error"));
}
