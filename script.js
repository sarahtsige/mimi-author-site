const form = document.getElementById('signup-form');
const button = document.getElementById('signup-button');
const errorMessage = document.getElementById('signup-error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorMessage.hidden = true;
  button.disabled = true;
  button.textContent = 'Signing up…';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form),
    });
    const result = await response.json();

    if (result.success) {
      button.textContent = 'Thank you!';
      form.reset();
    } else {
      throw new Error(result.message || 'Submission failed');
    }
  } catch (err) {
    button.disabled = false;
    button.textContent = 'Sign up';
    errorMessage.hidden = false;
  }
});
