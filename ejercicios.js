// EJERCICIO 1
// CUAL ES EL MAYOR?

function cualEsMayor(a, b){
    if (a > b){
        return a;        
    }else {
        return b;
    }
}
 let mayor1 = cualEsMayor(4, 5);
 console.log(mayor1);

 // TAMBIEN SE PUEDE HACER CON EL OPERADOR TERNARIO. (CONDICION) ? : ;

 function cualEsMayor(a, b){
    return (a > b) ? a : b; 
}
 let mayor = cualEsMayor(10, 5);
 console.log(mayor);

 // EJERCICIO 2
 // NOMBRE DE RESOLUCIONES
 /*
 NOMBRE: ANCHO X ALTO
 8K 7680 X 4320
 4K 3840 X 2160
 WQHD 2560 X 1440
 FHD 1920 X 1080
 HD 1280 X 720
 */

//  function nombreResolucion(ancho, alto){
//     if (ancho > 7680 && alto > 4320){
//         return '8K';
//     } else if (ancho >= 3840 && alto >= 2160){
//         return '4K'
//     } else if (ancho >= 2560 && alto >= 1440){
//         return 'WQHD'
//     } else if (ancho >= 1920 && alto >= 1080){
//         return 'FHD'
//     } else if (ancho >= 1280 && alto >= 720){
//         return 'HD'
//     } else {
//         return 'Resolucion no encontrada';
//     }
//  }

//SWITCH
function nombreResolucion(ancho, largo) {
    switch (true) {
        case (ancho >= 7680 && largo >= 4320):
            return `8K: ${ancho} X ${largo}`;            
            
        case (ancho >= 3840 && largo >= 2160):
            return `4K: ${ancho} X ${largo}`;            
            
        case (ancho >= 2560 && largo >= 1440):
            return `WQHD: ${ancho} X ${largo}`;            
              
        case (ancho >= 1280 && largo >= 720):
            return `HD: ${ancho} X ${largo}`;                    
    
        default:
            return 'Resolucion no encontrada';
    }
    
}

 let nombre = nombreResolucion(3840, 2100);
 console.log(`El Nombre de la Resolución es: "${nombre}"`);

 //EJERCICIO 3
 /*Indice validar que no sea menor a cero y que el elemento exista dentro del Array */

 function getbyIdx(arr, idx){
    if (idx < 0 || arr.length <= idx){
        return 'Elemento no Existe';
    }
    return arr[idx];
 }

 let resultado = getbyIdx([1, 2], 1);
 console.log(resultado);

 //Pares e Impares
 let numero = 13;

 function numerosPares(numero){
    if (typeof numero !== 'number'){
        return null;
    } else if (numero % 2 == 0){
        return `El número "${numero}" es Par`;
    }else {
        return `El número "${numero}" es Impar`;
    }
 }

 console.log(numerosPares(numero));

 // EJERCICIO 4
 /* CREA UN ALGORITMO QUE IMPRIMA NUMEROS IMPARES*/

 //FOR
//  for (let i=0; i <= 10; i++){
//     if (i % 2 !== 0){
//         console.log(`Número Impar ${i}`);
//     }
//  }

 //WHILE
 let i = 0;
 while (i <= 10) {
    if (i % 2 !== 0){
        console.log(`Número Impar ${i}`);
    }
    i++;
 }
 //DO WHILE
//  let i = 0;
//  do {
//     if (i % 2 !== 0){
//         console.log(`Número Impar ${i}`);
//     }
//     i++
    
//  } while (i <= 10);

//EJERCICO 5
/*Crear un algoritmo que devuelva número menor y mayor de un array */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [mayor, menor];
}

let resultados = getMenorMayor(array);
console.log(resultados);

//EJERCICO 6
/*Crear un algoritmo que devuelva cantidad de números positivos */

let array1 = [2, 5, 6, 12, -3, 1, -54, -12, 5];

function cantidadPositivos(arr) {
    let cantd = 0;
    for (elemento of arr) {
        if (elemento > 0) {
            cantd++;            
        }
    }
    return cantd;    
}
console.log(`La cantidad de elemento que tiene el array es "${cantidadPositivos(array1)}"`);

//EJERCICO 7
/*Crear un algoritmo que devuelva el precio del producto mas impuesto */

function montoTotal(precio, impuesto) {
    return precio + precio * impuesto ; // se podri ordenar pcon parentecis, pero sabemos que primero se realiza la multiplicación y luego la suma
}

console.log(montoTotal(19.90, 0.15));

//EJERCICO 8
/*Crear un algoritmo que tome un array de objeto y devuelva un array de pares(arreglos dentro de un arreglo) 
Ejemplo:
Array Pares = [
[1, {id: 1, name: 'Carlos'}], 
[2, {id: 2, name: 'Luis'}], 
[3, {id: 3, name: 'Alberto'}],
]*/

let array2 = [{
    id: 1,
    name: 'Carlos',
}, {
    id: 2,
    name: 'Nicolas',
}, {
    id: 3,
    name: 'Luis',
}];

function arrayPares(arr) {
    let pares = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pares[idx] = [elemento.id, elemento];
    }
    return pares;
}

console.log(arrayPares(array2));

//EJERCICO 9
/*Crear un algoritmo que devuelva un array de objeto en base a array pares 
Ejemplo:
Array Pares = [
[1, {id: 1, name: 'Carlos'}], 
[2, {id: 2, name: 'Luis'}], 
[3, {id: 3, name: 'Alberto'}],
]*/

let arrayPares1 = [
    [1, {name: 'Carlos'}], 
    [2, {name: 'Luis'}], 
    [3, {name: 'Alberto'}],
    ]

    function arrayObjetos(arr) {
        let collection = [];
        for(idx in arr){
            let elemento = arr[idx];
            collection[idx] = elemento[1];
            collection[idx].id = elemento[0];
        }

        return collection;
    }

    console.log(arrayObjetos(arrayPares1));

//EJERCICO 10
/*Crear una array de longitud N, y que sus elementos sean numeros de 1 hasta N.*/
//EJEMPLO: arraylongitud = [1,2,3,4,5,6,7]

let longitud = 7;

function longitudArray(n) {
    if (n <= 0){
        return [];
    }
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    return arr;
    
}

console.log(longitudArray(longitud));

//Buscar en una lista de nombre en un array y ver si existe y sino retornar que no existe

// let listaNombres = ['Carlos', 'Amanda', 'Karla', 'Mona'];

// let nombreBuscar = prompt('Ingresar el nombre a Buscar: ');

// function buscarNombre (listaNombres, nombreBuscar) {
//     return listaNombres.includes(nombreBuscar);
// }


// let estaONo = buscarNombre(listaNombres, nombreBuscar);


// if (estaONo == true){
//     console.log(`El Nombre "${nombreBuscar}" esta en la Lista.`);
// } else {
//     console.log(`El Nombre "${nombreBuscar}" NO esta en la Lista.`);
// }

// Sin importar las minusculas y Mayusculas
let listaNombres = ['Carlos', 'Amanda', 'Karla', 'Mona'];

//let nombreBuscar = prompt('Ingresar el nombre a Buscar: ');

// Función para buscar nombre sin importar mayúsculas y minúsculas
// function buscarNombre(listaNombres, nombreBuscar) {
//     // Convertimos el nombre buscado a minúsculas
//     nombreBuscar = nombreBuscar.toLowerCase();

//     // Usamos .some() para buscar si existe algún nombre en la lista que coincida
//     return listaNombres.some(nombre => nombre.toLowerCase() === nombreBuscar);
// }

// let estaONo = buscarNombre(listaNombres, nombreBuscar);

// if (estaONo == true) {
//     console.log(`El Nombre "${nombreBuscar}" está en la Lista.`);
// } else {
//     console.log(`El Nombre "${nombreBuscar}" NO está en la Lista.`);
// }

//suma de un arreglo dentro de un array
let array3 = [1,2,3,4,5,6,7,8,9];

function sumaArray(array3){
    let suma = array3.reduce((acum, elem)=>{
        return acum + elem;
    }, 0);

    return [suma];
}

console.log(sumaArray(array3));

//suma de palabras.
let palabras = ['hola', 'como', 'estas?'];

function sumarPalabras(arr){
    return arr.reduce((acum, elem)=> {
        return acum + ' ' + elem;
    }, []);
}

console.log(sumarPalabras(palabras));

//contador de frutas

let frutas = ['pera', 'pera', 'pera', 'uvas', 'uvas', 'mango'];

function contadorFrutas(arr){
    return arr.reduce((acum, valorAct)=>{
        acum[valorAct] = (acum[valorAct] || 0) + 1;
        return acum;
    }, {});
}

console.log(contadorFrutas(frutas));

      // for (let tabla = 1; tabla <= 10; tabla++) {
      //   if(tabla > 1) {
      //     console.log('');
      //   }
      //   console.log(`La tabla del ${tabla}`);
      //   for (let num = 1; num <= 10; num++) {
      //   let resultado = `${tabla} x ${num} = ${tabla * num}`;
      //   console.log(resultado);
      // }

      // }

      // for(let num = 1; num <= 10; num++) {
      //   if(num % 2 == 0) {
      //     console.log(`${num} es par`);
      //   }else {
      //     console.log(`${num} es impar`);
      //   }
      // }

    //TABLERO DE AJEDRES
    //BLANCO=O
    //NEGRO=*
    //El tablero tiene 8 columnas y 8 Filas, comenzando con blanco.


    // for (let filas=1; filas <=9; filas++){
    //   let linea = '';
    // for (let casilla=0; casilla <=7; casilla++) {
    //   if(casilla % 2 == 0 && filas % 2 == 0 || casilla % 2 != 0 && filas % 2 != 0) {
    //     linea = linea + '*';
    //   }
    //   if (casilla % 2 == 0 && filas % 2 != 0 || casilla % 2 != 0 && filas % 2 == 0) {
    //     linea = linea + 'o';
    //   }
    //   // if (casilla % 2 != 0 && filas % 2 == 0) {
    //   //   linea = linea + 'o';
    //   // }
    //   // if (casilla % 2 != 0 && filas % 2 != 0) {
    //   //   linea = linea + '*';
    //   // }
      
    // }
    // console.log(linea);
    //}

    // const usuario = 'admin';
    // const clave = '1234';
    // let incorrectos = 0;
    // let intentos = 3;

    // function login (){

    //   while (incorrectos <= intentos) {
    //   let ingresarUsuario = prompt('Ingrese su usuario:');
    //   let ingresarClave = prompt('Ingrese su clave:')
          
    //   if(ingresarUsuario === usuario && ingresarClave === clave){
    //     document.write('Hola! Haz ingresado al Sistema.');
    //     break;

    //   }else{
    //     incorrectos +=1;
    //     alert('Error, Intento Fallido.');
    //   }

    //   if (incorrectos === intentos){
    //     alert('Bloqueado por muchos intentos.');
    //   }

    // }

  //   for(let incorrectos = 0; incorrectos <= intentos;) {
  //     let ingresarUsuario = prompt('Ingrese su usuario:');
  //     let ingresarClave = prompt('Ingrese su clave:');

  //     if (ingresarUsuario === usuario && ingresarClave === clave) {
  //       document.write('Hola! Haz Ingresado al Sistema.');
  //       break;
  //     } else {
  //       incorrectos +=1; //incorrectos = incorrectos + 1;
  //       alert('Error, Intento Fallido.');
  //     }

  //     if(incorrectos === intentos) {
  //       alert('Bloqueado por muchos intentos.');

  //     }
  //   }
  // } 
  // login();

  //Crea una función que convierta la edad de un humano en años de perro. Supón que 1 año humano equivale a 7 años de perro.
  // function edadPerro(edad){
  //   let resultado = edad * 7;
  //   return `La edad de ${edad} años equivale a ${resultado} edad de perro;`;
  // }
    
  // console.log(edadPerro(35));

  //Escribe una función que reciba un número como argumento y devuelva "par" si el número es par o "impar" si es impar.
  // function parImpar(numero){
  //   if (numero % 2 == 0){
  //     console.log(`El ${numero} es Par`);

  //   }else{
  //     console.log(`El ${numero} es Impar`);
  //   }
  // }
  // parImpar(7);

  //Crea una función que reciba una cadena y cuente el número de vocales que contiene.

  // let cadena = 'Hola, como estas..?';
  // function contarVocales(cadena) {
  //   let vocales = ['a', 'e', 'i', 'o', 'u']; // Array de vocales
  //   let contador = 0; // Contador para llevar la cuenta de las vocales encontradas

  //   // Bucle for que recorre cada carácter de la cadena
  //   for (let i = 0; i < cadena.length; i++) {
  //       let letra = cadena[i].toLowerCase(); // Convertimos la letra a minúscula para evitar problemas con mayúsculas
  //       if (vocales.includes(letra)) { // Verificamos si la letra actual está en el array de vocales
  //           contador++; // Si es una vocal, incrementamos el contador
  //       }
  //   }

  //   return contador; // Devolvemos el total de vocales encontradas
  // }

  // console.log(`La palabra "${cadena}" tiene ${contarVocales(cadena)} vocales.`);

  //Escribe una función que reciba una cadena y devuelva la misma cadena invertida. Por ejemplo, "hola" se convierte en "aloh".
  
  // function reserva(cadena){
  //   return cadena.split('').reverse().join('');
  // }
  // console.log(reserva('Hola mundo'));

  //Crea una función que reciba una cadena y devuelva el número de palabras que contiene.

//   function contarPalabras(cadena) {
//     // Usamos trim() para eliminar espacios en blanco al inicio y al final de la cadena
//     // Luego, usamos split() para dividir la cadena en un array de palabras
//     // Filtramos los elementos vacíos para asegurarnos de contar solo palabras válidas
//     let palabras = cadena.trim().split(/\s+/); ///\s+/ se encarga de separar la cadena correctamente ignorando secuencias de espacios.
//     return palabras.filter(palabra => palabra !== "").length;
// }

// // Ejemplo de uso
// let cadena = "Hola, ¿cómo estás?";
// let numeroDePalabras = contarPalabras(cadena);
// console.log(`La cadena contiene ${numeroDePalabras} palabras.`);
