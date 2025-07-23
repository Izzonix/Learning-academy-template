(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = this;
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
    .then(() => {
      alert('Message sent successfully!');
      form.reset();
      submitButton.textContent = 'Send Message';
      submitButton.disabled = false;
    }, (error) => {
      alert('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
      submitButton.textContent = 'Send Message';
      submitButton.disabled = false;
    });
});

