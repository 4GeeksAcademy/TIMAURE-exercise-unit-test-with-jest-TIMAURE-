// Contenido de app.js 

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(14,9))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen =  145 * valueInDollar;
    // Retornamos el valor en dólares
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound =   0.0054 * valueInYen ;
    // Retornamos el valor en dólares
    return valueInPound;
}
module.exports = { sum,  fromEuroToDollar, fromYenToPound, fromDollarToYen };
