const data01 = document.getElementById('data-1');
const data02 = document.getElementById('data-2');
const data03 = document.getElementById('data-3');
const calendario = new Date();
const dia = calendario.getDate();
const mes = calendario.getMonth();
const ano = calendario.getFullYear();

function data() {
    for (let c = 1; c <= 31; c++) {
        let option = document.createElement('option');
        option.setAttribute('value', c);
        option.setAttribute('id', c);
        option.text = c;
        data01.appendChild(option);
    }

    for (let c = 0; c < 12; c++){
        const sec02 = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        let option = document.createElement('option');
        option.setAttribute('value', sec02[c]);
        option.text = sec02[c];
        data02.appendChild(option);
    }

    for (let c = ano; c >= 1905; c--) {
        let option = document.createElement('option');
        option.setAttribute('value', c);
        option.text = c;
        data03.appendChild(option);
    }
}