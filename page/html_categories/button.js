
const btnAdds = document.querySelectorAll('.btn-add');
const btnQuits = document.querySelectorAll('.btn-quit');

const cants = document.querySelectorAll('.cant');
const prices = document.querySelectorAll('.price');


function actualizar(cantidad, index) {
    // Obtener el resultado (cantidad actual) y precio actual del elemento específico
    let resultado = parseInt(cants[index].textContent);

    // Actualizar la cantidad sumándole la cantidad proporcionada
    resultado += cantidad;

    // Actualizar el texto del elemento de cantidad
    cants[index].textContent = resultado;

    // Calcular y actualizar el precio multiplicando la cantidad por el precio fijo (15000)
    prices[index].textContent = "$" + (15000 * resultado); // Precio fijo de $15000 por producto
}

// Añadir eventos a todos los botones de agregar
btnAdds.forEach((btnAdd, index) => {
    btnAdd.addEventListener("click", () => {
       
        actualizar(1, index); // Añadir 1 unidad al elemento específico
    });
});

// Añadir eventos a todos los botones de quitar
btnQuits.forEach((btnQuit, index) => {
    btnQuit.addEventListener("click", () => {
        
        actualizar(-1, index); // Quitar 1 unidad al elemento específico
    });
});










 
















