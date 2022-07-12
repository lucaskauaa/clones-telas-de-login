var email = document.getElementById('email')
var digite = document.getElementById('digite')

function verificar() {
    if (email.value.length == 0) {
        email.style.borderColor = '#D93025'
        digite.style.color = '#D93025'
        digite.style.fontSize = '13px'
        digite.style.marginBottom = '10px'
        digite.innerHTML = '<strong>!</strong> Digite um e-mail ou número de telefone'
    } else {
        digite.innerHTML = ' '
    }
}