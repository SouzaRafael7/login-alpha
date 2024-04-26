
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');

  if (emailInput == "" || passwordInput == "") {
    alert("Favor, preencher todos os campos");
  }


const formLogin = document.getElementById('formLogin')
const meuBotao = document.getElementById('queBotao')

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href='bem-vindo.html';
})