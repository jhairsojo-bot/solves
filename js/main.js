import { mensaje } from "./mensaje.js";

function actualizarUI(resultado, frase) {
    resultado.textContent = frase;
}

const inputNumero = document.querySelector('input');
const botonFrase = document.querySelector('button');
const resultado = document.getElementById('textoResultado');

inputNumero.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        botonFrase.click();
    }
});

botonFrase.addEventListener('click', function () {

    const valorInput = Number(inputNumero.value);

    if (isNaN(valorInput)) {
        resultado.textContent = 'NO SE PERMITEN CARACTERES.';
        resultado.style.color = 'red';
        return;
    } else if (valorInput > 50 || valorInput < 1) {
        resultado.textContent = 'NUMERO FUERA DE RANGO';
        resultado.style.color = 'red';
        return;
    } else {
        resultado.style.color = 'green';
    }

    let valorFinal = mensaje(valorInput);
    actualizarUI(resultado, valorFinal);
});