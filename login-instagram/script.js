var email = document.getElementById('email')
var senha = document.getElementById('senha')
var button = document.getElementById('button')

function login() {
    if (email.value.length != 0 && senha.value.length != 0) {
        button.style.backgroundColor = '#0095F6'
    }
}