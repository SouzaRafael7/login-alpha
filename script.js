const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameInput = document.getElementById('name');
if (nameInput) {
      nameInput.setAttribute('required', true);
    }

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
    function abrirOutraPagina() {
      window.location.href = "login.html";
    }
    
    function abrirOutraPagina1() {
      window.location.href = "inicial.html";
    }
    function abrirOutraPagina2() {
      window.location.href = "bem-vindo.html";
    }