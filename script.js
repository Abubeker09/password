const inputBox = document.querySelector('input');
const Box = document.querySelector('.box');

const UperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialCharacters = "@#$%^&*()_+-=[]{}|;:,.<>?/`~!@#$";

const allCase = UperCase + lowerCase + number + specialCharacters;

function Generate() {
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += allCase[Math.floor(Math.random() * allCase.length)];
  }
  inputBox.value = password;
}

function copyPssword() {
  inputBox.select();
  document.execCommand("copy");
}

Box.addEventListener('input', function() {
  var content = Box.innerHTML;
  localStorage.setItem('Box', content);
});

window.onload = () => {
  if (localStorage.getItem('Box')) {
    Box.innerHTML = localStorage.getItem('Box');
  }
};

function Save() {
  Box.innerHTML +=  `🔐: ${  inputBox.value}<br>`;
  localStorage.setItem('Box', Box.innerHTML);
}
