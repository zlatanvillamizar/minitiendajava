console.log("Sistema de compra cargado correctamente.");


let nombre = "  teclado gamer  ";
let precio = 120000;
let cantidad = 2;
let descuento = 10000;
let disponible = true;


let nombreLimpio = nombre.trim();
let nombreMayus = nombreLimpio.toUpperCase();
let esGamer = nombreMayus.includes("GAMER");


let categorias = ["Periféricos", "Accesorios", "Gaming"];

function calcularSubtotal(p, c) {
    return p * c;
}

function calcularTotal(sub, desc) {
    return sub - desc;
}


let subtotal = calcularSubtotal(precio, cantidad);
let total = calcularTotal(subtotal, descuento);

let producto = {
    nombre: nombreMayus,
    precio: precio,
    cantidad: cantidad,
    disponible: disponible,
    categorias: categorias
};


console.log("--- Resumen de Compra ---");
console.log("Producto:", producto.nombre);
console.log("Precio unitario:", producto.precio);
console.log("Cantidad:", producto.cantidad);
console.log("Subtotal:", subtotal);
console.log("Descuento:", descuento);
console.log("Total a pagar:", total);
console.log("Producto disponible:", producto.disponible);
console.log("Contiene palabra clave 'GAMER':", esGamer);
console.log("Primera categoría:", producto.categorias[0]);
console.log("Total de categorías:", producto.categorias.length);


if (total >= 200000 && disponible === true) {
    console.log("Aplica envío gratis");
} else {
    console.log("Envío con costo adicional.");
}