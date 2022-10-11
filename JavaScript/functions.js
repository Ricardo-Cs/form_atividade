/* Máscaras ER */
function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito.
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos.
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos.
    return v;
}
function id(el) {
    return document.getElementById(el);
}
window.onload = function () {
    id('telefone').onkeyup = function () {
        mascara(this, mtel);
    }
}


//Filtrando cidades com base no estado escolhido pelo usuário no form.
class FiltrarCidadesPorEstados {
    constructor() {
        this.estadoInput = document.querySelector('#estado');
        this.cidadeInput = document.querySelector('#cidade');
    }

    getMyCity(events) {
        const UF = events.currentTarget.value;

        fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`
        )
            .then((r) => r.json())
            .then((cidades) => {
                this.addListOfCity(cidades);
            });
    }

    getMyStates() {
        fetch(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
        )
            .then((r) => r.json())
            .then((data) => {
                this.addListOfStates(data);
            });
    }

    addListOfStates(estados) {
        estados.forEach((estado) => {
            const option = document.createElement('option');
            option.value = estado.sigla;
            option.innerText = estado.nome;

            this.estadoInput.appendChild(option);
        });
    }

    addListOfCity(cidades) {
        this.cidadeInput.innerText = '';

        cidades.forEach((cidade) => {
            const option = document.createElement('option');
            option.innerText = cidade.nome;
            this.cidadeInput.appendChild(option);
            this.cidadeInput.removeAttribute('disabled');
        });
    }

    bindEvent() {
        this.getMyCity = this.getMyCity.bind(this);
    }

    addEvent() {
        this.estadoInput.addEventListener('input', this.getMyCity);
    }

    init() {
        this.bindEvent();
        this.getMyStates();
        this.addEvent();
    }
}

const filtrarCidadesPorEstado = new FiltrarCidadesPorEstados();
filtrarCidadesPorEstado.init();