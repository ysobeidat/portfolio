const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value.trim();
    const comments = document.getElementById("comments").value.trim();
    const formHint = document.getElementById("formHint");

    if (!fullName || !email || !country || !comments) {
      alert("Please fill in all fields before submitting.");
      formHint.textContent = "Some fields are still empty. Please complete the form.";
      return;
    }

    // Basic email-format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      formHint.textContent = "Please check your email address.";
      return;
    }

    alert("Your form has been submitted successfully!");
    formHint.textContent = "Thank you! Your form was submitted successfully.";

    // This assignment form demonstrates client-side validation.
    // It does not send/store messages on a server.
    contactForm.reset();
  });
}
