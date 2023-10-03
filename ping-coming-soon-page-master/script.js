const notifyBtn = document.getElementById('notify-btn');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message');

notifyBtn.addEventListener('click', function () {
  const message = [];
  const emailFormat = [];

  if (emailInput.value === '' || emailInput.value === null) {
    message.push('Whoops! It looks like you forgot to add your email');
    emailInput.style.borderColor = 'red';
  }

  if (emailFormat.value !== '/^[w.-]+@[a-zA-Zd.-]+.[a-zA-Z]{2,}$/') {
    emailFormat.push('Please provide a valid email address');
    emailInput.style.borderColor = 'red';
  }

  if (emailFormat.length > 0) {
    errorMessage.innerText = emailFormat.join('');
  }

  if (message.length > 0) {
    errorMessage.innerText = message.join(',');
  }
});
