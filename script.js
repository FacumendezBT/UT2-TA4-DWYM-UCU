const btn = document.getElementById('btn');
const inicioInput = document.getElementById('inicio');
const finInput = document.getElementById('fin');

btn.addEventListener('click', function () {
    let a = parseInt(inicioInput.value);
    let b = parseInt(finInput.value);
    sumAll(a, b);
});

/**
 * Función que recibe dos números y muestra por consola
 * la suma de todos los numeros entre ellos.
 * @param {number} a - Es el número inicial
 * @param {number} b - Es el número final
 */
function sumAll(a, b){
    let suma = 0;
    for (let i = a; i <= b; i++) {
        suma += i;
    }
    console.log(suma);
}