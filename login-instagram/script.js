const email = document.getElementById('email');
const senha = document.getElementById('senha');
const button = document.getElementById('button');

function login() {
    if (email.value.length != 0 && senha.value.length != 0) {
        button.style.backgroundColor = '#0095F6';
    }
}