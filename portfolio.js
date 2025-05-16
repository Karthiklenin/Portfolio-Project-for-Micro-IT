document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      // Simulate sending a message (could be integrated with EmailJS or a backend)
      document.getElementById('form-response').textContent = `Thanks, ${name}! Your message has been sent.`;
      document.getElementById('contact-form').reset();
    } else {
      document.getElementById('form-response').textContent = 'Please fill out all fields.';
    }
  });
  