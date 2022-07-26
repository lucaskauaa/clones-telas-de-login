const email = document.getElementById('email');
const senha = document.getElementById('senha');
senha.addEventListener('input', login);
const button = document.getElementById('button');

function login() {
    button.style.backgroundColor = '#0095F6';
}