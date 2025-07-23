(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.getElementById('visit-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = this;
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
    .then(() => {
      alert('Visit request sent successfully!');
      form.reset();
      submitButton.textContent = 'Submit Request';
      submitButton.disabled = false;
    }, (error) => {
      alert('Failed to send request. Please try again.');
      console.error('EmailJS error:', error);
      submitButton.textContent = 'Submit Request';
      submitButton.disabled = false;
    });
});

