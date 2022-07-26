const email = document.getElementById('email');
const senha = document.getElementById('senha');
senha.addEventListener('input', login);
const button = document.getElementById('button');

function login() {
    if (senha.value.length != 0) {
        button.style.backgroundColor = '#0095F6';
    } else {
        button.style.backgroundColor = '#B2DFFC';
    }
}