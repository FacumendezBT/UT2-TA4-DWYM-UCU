const btn = document.getElementById('btn');
const inicioInput = document.getElementById('inicio');
const finInput = document.getElementById('fin');

btn.addEventListener('click', function () {
    let inicio = parseInt(inicioInput.value);
    let fin = parseInt(finInput.value);
    sumAll(inicio, fin);
});

/**
 * Función que recibe dos números y muestra por consola
 * la suma de todos los numeros entre ellos.
 * @param {number} inicio - Es el número inicial
 * @param {number} fin - Es el número final
 */
function sumAll(inicio, fin){
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    console.log(suma);
}