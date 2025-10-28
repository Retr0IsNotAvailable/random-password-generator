import chars from './data/characters.js'; // character groups
import copyPassword from './passwordUtils/copy.js'; // clipboard helper

// DOM elements
const passwordBox = document.getElementById('password');
const generatePasswdButton = document.getElementById('generate-passwd-button');
const copyElement = document.getElementById('copy');

const length = 16; // desired password length

// return one random character from a string
function pickRandom(str) {
  return str[Math.floor(Math.random() * str.length)];
}

let passwd; // last generated password

// create a password (one from each group, then fill to length)
function createPassword() {
  let passwd = '';

  for (const char in chars) {
    passwd += pickRandom(chars[char]);
  }

  while (length > passwd.length) {
    passwd += pickRandom(chars.allChars);
  }
  
  passwordBox.value = passwd;

  return passwd;
}

// generate and store password
generatePasswdButton.addEventListener('click', () => {
  passwd = createPassword();
});

// copy current password
copyElement.addEventListener('click', () => {
  copyPassword(passwd);
});