var data01 = document.getElementById('data-1')
var data02 = document.getElementById('data-2')
var data03 = document.getElementById('data-3')
var calendario = new Date()
var dia = calendario.getDate()
var mes = calendario.getMonth()
var ano = calendario.getFullYear()

function data() {
    for (var c = 1; c <= 31; c++) {
        var option = document.createElement('option')
        option.setAttribute('value', c)
        option.setAttribute('id', c)
        option.text = c
        data01.appendChild(option)
    }

    for (var c = 0; c < 12; c++){
        var sec02 = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        var option = document.createElement('option')
        option.setAttribute('value', sec02[c])
        option.text = sec02[c]
        data02.appendChild(option)
    }

    for (var c = ano; c >= 1905; c--) {
        var option = document.createElement('option')
        option.setAttribute('value', c)
        option.text = c
        data03.appendChild(option)
    }
}