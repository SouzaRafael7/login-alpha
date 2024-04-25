const nameInput = document.getElementById('name');

if (nameInput) {
  nameInput.setAttribute('required', true);
}

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Encontrar isso
const loginForm = document.getElementById('formLogin');

loginForm.addEventListener('submit', (event) => {

  if (emailInput.value === '' || passwordInput.value === '') {
    event.preventDefault();
    alert('Por favor, preencha todos os campos.');
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    event.preventDefault();
    alert('Por favor, digite um e-mail válido.');
  }
});


// Funções para direcionamento de páginas

function paginaLogin() {
  window.location.href = "login.html";
}

function paginaWelcome() {
  window.location.href = "bem-vindo.html";
}