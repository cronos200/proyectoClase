// los arrglos son un espacio de memoria que almacena multiple valores 
//y pueden ser cualquier tipo de datos

// a conciderar el tamaño y la posicion
//tamaño --> hace referencia a la camtidad de elementos dentro del arreglo
//posicion --> hace referencia a la ccantidad de elementos -1
// let numero = 23
// let variasCosas = [23, true, "jaime", function(){},[], numero] // podemos introducir cualquier dato
// let otroArreglo = [] // arreglo vacio

// console.log(variasCosas[0] * variasCosas[5])
// console.log(variasCosas[1])
// console.log(variasCosas[3])
// console.log(otroArreglo)


// Recorrido --> se utiliza para buscar informacion
//linado --> 

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0 ; index < numeros.length; index++) {
    //console.log(numeros[index])
    if(index % 2 === 0) { // se utilisa para saver si un numero es par
        console.log(numeros[index] * 4)
    }
}
