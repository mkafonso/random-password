const input = document.querySelector('input');
const button = document.querySelector('button');

function generatePassword(length = 16) {
  let password = '';

  // characters used to generate password
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxz0123456789@#$';

  for (let i = 0; i < length; i++) {
    let at = Math.floor(Math.random() * charset.length + 1);

    password += charset.charAt(at);
  }

  return password;
}

button.addEventListener('click', () => {
  input.value = generatePassword(16);
});
