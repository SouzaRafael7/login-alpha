const form = document.getElementById('login-form');
 
form.addEventListener('submit', (event) => {
    event.preventDefault();
 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
 
    if (email === 'admin' && password === 'senha123') {
   
        window.location.href = 'index.html';
    } else {
     
        alert('Email ou senha incorretos.');
    }
});