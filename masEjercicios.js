    // Ejercicio: Crea una función llamada 'countdown' que tome un entero 'n' como entrada. 
    // La función debe imprimir una cuenta regresiva desde 'n' hasta 1, 
    // inclusive, con cada número en una nueva línea. Si el número es par, imprime "¡Par!" 
    // después del número, y si el número es impar, imprime "¡Impar!" después del número. 
    // Cuando la cuenta regresiva llegue a 0, imprime "¡Despegue!" y detén la cuenta regresiva.

    
    // function countdown(n) {
    //   for (let i = n; i >= 0; i--){

        // if (i === 0) {
        //   console.log(`${i} ¡Despegue!`);
        // }
        
        // else if (i % 2 === 0) {
        //   console.log(`${i} es ¡Par!`);
        // }else {
        //   console.log(`${i} es ¡Impar!`);
        // }

        //Estructurados con operador ternario:
    //     const resultado = (i === 0) ? `${i} ¡Despegue!`
    //                      : (i % 2 === 0) ? `${i} es ¡Par!`
    //                      : `${i} es ¡Impar!`

    //     console.log(resultado);

    //   }
    //   return '';
    // }
    // console.log(countdown(6));

    // Ejercicio: Crea una función llamada 'temperature_conversion' que tome una lista de temperaturas en grados Celsius como entrada. 
    // La función debe iterar sobre cada temperatura y convertirla a grados Fahrenheit usando la fórmula: Fahrenheit = (Celsius * 9/5) + 32. 
    // La función debe devolver una nueva lista que contenga las temperaturas convertidas. 
    // Además, si la temperatura es inferior a 32 °F (el punto de congelación), etiquétala como 'Congelación'; de lo contrario, 
    // etiquétala como 'Por encima del punto de congelación'.

  //   const temperaturaCelsius = [-10, 21, 16, 22, 19, -23, 20];

  // function temperature_conversion(temperaturasCelsius){
  //   return temperaturaCelsius.map(celsius => {

  //     //convertimos la lista en fahrenheit
  //     const fahrenheit = (celsius * 9/5) + 32;

  //     //creamos una condicion para la etiqueta
  //     const etiqueta = fahrenheit < 32 ? 'Congelación' : 'Por encima del punto de congelación';

  //     // retornamos un nuevo objeto con la conversion y su etiqueta
  //     return {
  //       fahrenheit: fahrenheit.toFixed(2),// el .toFixed(2) es para convertir el resultado con solo 2 decimales, ejemplo 12,00 y no 12,000000000
  //       etiqueta,
  //     };

  //   });

  // }

  //   console.log(temperature_conversion(temperaturaCelsius));

  // Ejercicio: Crea una función llamada 'is_prime' que tome un entero 'n' como entrada. 
  // La función debe determinar si 'n' es un número primo. 
  // Un número primo es un número mayor que 1 que no tiene divisores positivos distintos de 1 y él mismo. 
  // La función debe devolver True si 'n' es un número primo y False en caso contrario. 
  // Además, escribe un bucle que imprima todos los números primos desde 1 hasta 'n'.

  // let n = 10;
  // function is_prime(n){
  //   //   if (n <= 1){
  //   //     return false;
  //   // }

  //   for(let i = 1; i <= Math.sqrt(n); i++){ //La función Math.sqrt(n) en JavaScript se utiliza para calcular la raíz cuadrada de un número n. La raíz cuadrada de un número es aquel valor que, cuando se multiplica por sí mismo, da como resultado el número original.
  //     if (n % 2 === 0){
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // function bucle(n){
  //   for(let i = 2; i <= n; i++){
  //     if(is_prime(i)){
  //       console.log(`${i} es primo`);
  //     }
  //     else if(i === 2 ){
  //       console.log(`${i} (es el único número primo par)`);
  //     }
  //   }
  //   return'';
  // }

  // console.log(bucle(n));

  //Crea un programa que compruebe si una cadena es un palíndromo.
  // si es 121 - ana true
  // si es 123 - Carlos false
  // Anita lava la tina true

  // const cadena = 'Anita lava la tina';
  // function palindromo(cadena){
  //   const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');  // Convertir la cadena a minúsculas y eliminar caracteres no alfanuméricos
  //   const cadenaInvertida = cadenaLimpia.split('').reverse().join('');

  //   // if(cadena === cadenaInvertida){
  //   //   return `La palabra "${cadena}" "${cadenaInvertida}"" es un palíndromo`;
  //   // }else{
  //   //   return `La palabra "${cadena}" "${cadenaInvertida}"" NO es un palíndromo`;
  //   // }
  //  const siONo = cadenaLimpia === cadenaInvertida ? true : false;

  //   return {
  //     Cadena: cadena,
  //     Inversa: cadenaInvertida,
  //     palíndromo: siONo,

  //   };
  // }

  // console.log(palindromo(cadena));


  // Generar un número aleatorio entre un rango específico
// function generarNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Función principal del juego
// function juegoAdivinaNumero() {
//     const min = 1;
//     const max = 100;
//     const numeroSecreto = generarNumeroAleatorio(min, max);
//     let intentos = 0;
//     let adivinanza;

//     alert(`Adivina el número entre ${min} y ${max}.`);

//     while (true) {
//         // Solicitar al usuario un número
//         adivinanza = parseInt(prompt("Introduce tu adivinanza: "), 10);
//         intentos++;

//         // Verificar si la entrada es válida
//         if (isNaN(adivinanza) || adivinanza < min || adivinanza > max) {
//             alert(`Por favor, introduce un número válido entre ${min} y ${max}.`);
//             continue;
//         }

//         // Comprobar la adivinanza
//         if (adivinanza === numeroSecreto) {
//             alert(`¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
//             break;
//         } else if (adivinanza < numeroSecreto) {
//             alert("El número secreto es mayor. Intenta de nuevo.");
//         } else {
//             alert("El número secreto es menor. Intenta de nuevo.");
//         }
//     }
// }

// Iniciar el juego
//juegoAdivinaNumero();


//Desarrollar un script donde se ingresa el precio de 3 productos por prompt y 
//mostrar como resultado: suma del sub total, iva y precio total en 3 console.log independientes

// let producto1 = parseFloat(prompt('Ingrese el precio del 1er producto: '));
// let producto2 = parseFloat(prompt('Ingrese el precio del 2do producto: '));
// let producto3 = parseFloat(prompt('Ingrese el precio del 3er producto: '));

// let sumaSubTotal = producto1 + producto2 + producto3;
// let iva = sumaSubTotal * 0.19;
// let sumaTotal = sumaSubTotal + iva;

// let resultado = {
//   SubTotal: sumaSubTotal.toFixed(2),
//   Iva: iva.toFixed(2),
//   Total: sumaTotal.toFixed(2),
// }

// console.log(resultado);

//Ingresar 2 numeros por prompt (fistNumber y secondNumber). 
//Comparar si fistNumber es mayor que secondNumber (Usar operadores mayor y menor que)
// y mostrar por consola su resultado. Si es cierto, debe mostrar true, si es falso sebe mostrar false

// let nuemro1 = prompt('Ingrese el primer número:');
// let nuemro2 = prompt('Ingrese el segundo número:');

// let comparacion = nuemro1 > nuemro2 ? true : false;

// console.log(comparacion);

// let aleatorio = Math.floor(Math.random()*10000);
// console.log(aleatorio);

//Generar dos numeros aleatorios entre 1 y 50 y guardarlos en 2 variables (Deben ser numeros enteros, sin decimales).
//Mostrar por console.log los dos numeros.
//En otro console.log mostrar si la variable 1 es menor a la variable 2 con true o false

// let numero1 = Math.floor(Math.random() * 50);
// let numero2 = Math.floor(Math.random() * 50);

// let condicion = numero1 < numero2 ? true : false;


// console.log('¿ La variable 1 es menor que Variable 2 ?');
// let resultado = {
//   Variable_1: numero1,
//   Variable_2: numero2,
//   Condición: condicion,
// }

// console.log(resultado);

/*
Definir una variable con un numero y Desarrollar una funcion que verifique
si este numero es negativo.

La respuesta se debe ver asi:
¿El numero ingresado es negativo?: no, es positivo
¿El numero ingresado es negativo?: si, es negativo

Dato: Se considera que un numero es positivo cuando es mayor a cero y 
negativo cuando es menor a cero.
*/

// let numero = 0;

// function verificar(numero) {

//   return numero < 0 ? `¿El numero ingresado es negativo?: "${numero}". si, es negativo` : `¿El numero ingresado es negativo?: "${numero}". no, es positivo`; 

// }

// console.log(verificar(numero));

/*
Se tienen las calificaciones de de un alumno
const Fisica = 17
const Quimica = 16
const lenguaje = 19
const Matematica = 14
const Deporte= '09'
const Estadistica = '12'

Desarrollar una funcion que calcule el promedio de todas las materias 
y mostrar por consola por mensaje.

NOTA: Existe un bug en el backend que devuelve algunas materias 
con su valor en string y aun no ha podido ser resuelto. 
hacer la funcion que resuelva este problema desde el front al 
mostrar los datos.

Si el promedio es menor a 10, mostrar: llamar a representante. si es superior 
a 10 decirle que 10 es nota y lo demas es lujo
*/

// const fisica = 10;
// const quimica = 9;
// const lenguaje = 10;
// const matematica = 9;
// const deporte = 19;
// const estadistica = 9;

// function calcularPromedio(){
//   const promedio = Math.round((fisica + quimica + lenguaje + matematica + deporte + estadistica) / 6);

//   const condicion = promedio < 10 ? 'llamar a representante' : promedio === 10 ? '10 es nota y lo demas es lujo' : 'Bien hecho'; 

//   const resumen = {
//     Promedio: promedio.toFixed(2),
//     Comentario: condicion,
//   };

//   return resumen;

// }

// console.log(calcularPromedio());

/*
La aplicación actual tiene una ventana que pregunta How many km are left to go?. ¿Cuántos km quedan por recorrer?

Instrucciones:
Una vez el usuario ingresa la cantidad, tenemos que imprimir una de las siguientes respuestas:

Si quedan más de 100km, nosotros respondemos: "Are we there yet?" ¿Ya hemos llegado a ese punto?
Si quedan más de 50km, nosotros respondemos: "We'll be there in 5 minutes" Estaremos allí en 5 minutos
Si quedan menos o igual a 50km, nosotros respondemos: "I'm parking, I see you right now" Estoy aparcando, te veo ahora mismo
*/

// let kilometraje = Math.floor(Math.random() * 150);

// let respuesta = kilometraje > 100 ? `${kilometraje} Km, ¿Ya hemos llegado a ese punto?` 
//               : kilometraje > 50 ? `${kilometraje} Km, Estaremos allí en 5 minutos` 
//               : kilometraje <= 50 ? `${kilometraje} Km, Estoy aparcando, te veo ahora mismo`   
//               : ''; 

// console.log(respuesta);

/*
    genenar una escusa aleatoria al cargar el script
    ejemplo: No pude ir al trabajo porque estoy deprimido
*/

// let acciones = [
//     'ir al trabajo',
//     'ir a la iglesia',
//     'ir al curso',
//     'hacer ejercicio',
//     'ir a jugar',
//     'ir a comer',
//     'ir a gym',
//     'ir al mall',
//     'ir al cine'
// ];

// let escusas = [
//     'me quede dormido',
//     'amaneci enfermo',
//     'tengo diarrea',
//     'la alarma no sono',
//     'problemas familiares',
//     'tuve un accidente'
// ];

// function accionesAleatoria(acciones) {
//   let number1 = Math.round(Math.random() * acciones.length -1);
//   let condicion1 = number1 < 0 ? number1 += 1 : '';
//   return acciones[number1];
// }

// function escusaAleatoria(escusas) {
//   let number2 = Math.round(Math.random() * escusas.length - 1);
//   let condicion2 = number2 < 0 ? number2 += 1 : '';
//   return escusas[number2];
// }

// let fraseJuntas = `No pude ${escusaAleatoria(acciones)} porque ${accionesAleatoria(escusas)}`;

// console.log(fraseJuntas);

/*
Hemos creado una función que regresa un color basado en un número entero entre 1 
y 4 (Azul = 1, Rojo = 2, Amarillo = 3, Negro = 4). Cualquier número mayor o igual a 4, 
regresará el color negro.

Escenario: Digamos que somos profesor en un aula de 10 estudiantes y quieres 
asignar de forma aleatoria UN color (Azul, Rojo, Amarillo, Negro), a cada 
estudiante.

1.Pintar por consola, el color de cada niño 

2. Cambia la función getAllStudentColors() para que devuelva un listado(array) de 10 
colores aleatorios, con cada item del conjunto representando el color asignado a 
cada estudiante.
💡 Pista:
Tienes 10 estudiantes, necesitas hacer un bucle 10 veces.  console.log(`El alumno ${alumno} tiene color ${color}`)

Imprime el color en la consola.
*/

// let listaAlumnos = ['Carmen', 'Luis', 'Alberto', 'Carlos', 'Karla', 'Amanda', 'Maria', 'Flor', 'Eric', 'Alex'];

// function getAllStudentColors(num){
//   if (num === 1){
//     return 'Azul';
//   }
//   else if (num === 2){
//     return 'Rojo';
//   }
//   else if (num === 3){
//     return 'Amarillo';
//   }
//   else if (num === 4){
//     return 'Verde';
//   }
//   else if (num === 5){
//     return 'Rosa';
//   }
//   else if (num === 6){
//     return 'Blanco';
//   }
//   else if (num === 7 || num >= 7){
//     return 'Negro';
//   }
//   else if (num === 4 || num >= 4){
//     return 'Negro';
//   }
// }

// console.log(listaAlumnos);
// for(let i = 1; i <= 10; i++){

//   let alumnos = Math.round(Math.random() * listaAlumnos.length - 1);
//   if (alumnos < 0){
//     alumnos += 1;
//   }
//   //console.log(`"${listaAlumnos[alumnos]}"`);

// // let alumnos = Math.round((Math.random() * 10) + 1);
// let color = getAllStudentColors(alumnos + 1);
// // console.warn(`El alumno ${i}`);
// // console.error(`Color asignado  ${alumnos}`);
// console.log(`El alumno Nro. "${alumnos + 1}" que es "${listaAlumnos[alumnos]}" tiene el color "${color}"`);

// }

// // function getColor (number) {
// //     if (number === 1){
// //         return 'Azul'
// //     }else{
// //         if ( number === 2){
// //             return 'Rojo'
// //         }else{
// //             if( number === 3) {
// //                 return 'Amarillo'
// //             }else {
// //                 return 'Negro'
// //             }
// //         }
// //     }
// // }

// // for(let i = 1 ; i <= 10; i++){
// //     let randomNumber = Math.round((Math.random()*10)+ 1)
// //     console.log('Numero aleatorio: ', randomNumber)
// //     console.log(`valor de i es: ${i}`)
// //     let color = getColor(randomNumber)
// //     console.log(`El alumno ${i} tiene color ${color}`);
// // }

/*Ejemplo de resultado:

/ 1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
.... .... 98
Fizz
Buzz
/
Escribe el código necesario para imprimir en la consola todos los números del 
1 al 100.

Para múltiplos de 3, en vez del número, imprime la palabra Fizz.

Para múltiplos de 5, imprime Buzz.

Para números que sean múltiplos de 3 y 5, imprime FizzBuzz.
*/


// for(let i = 1; i <= 100; i++){
  
//   if(i % 3 === 0 && i % 5 === 0) {
//     console.log(`FizzBuzz`);
//   }

//   else if(i % 3 === 0){
//     console.log(`Fizz`);
//   }else if(i % 5 === 0) {
//     console.log(`Buzz`);
//   }else{
//     console.log(i);

//   }
  
// }

/*
La ruleta rusa. Desarrollar un script que imite los intentos de disparo (6 disparos) de un revolver
Sera necesario generar un numero aleatorio entre 1 y 6 (Posicion de la recamara) y una variable que almacena
la posicion de la bala

Disparar el arma hasta que la bala sea disparada.

Si la posición de la bala coincide con la posición de la recámara, debe imprimir: estas muerto
Si la posición de la bala no coincide con la posición de la recámara, debe imprimir: Sigue jugando

resultado:
Posicion de la bala: 5

Posicion 3, sigue jugando
Posicion 2, sigue jugando
posicion 4, sigue jugando
posicion 5, estas muerto
*/

// let posicionRecamara = Math.round(Math.random() * 6);

// //alert(`Posición de la bala: ${posicionRecamara}`);
// alert(`BIENVENIDO a la Ruleta Rusa.
// Nota: Antes de jugar, Acepta a Cristo porque puedes morir.`);

// let respuesta = prompt('¿Quieres Jugar? Escribe "si" para jugar o "no" para irte.');
// if(respuesta === 'si' || respuesta === 'SI'){
//   let confirmar = prompt('¿Estas Seguro? porque no hay vuelva atrás. Escribe si o no.');
//   if(confirmar === 'si'){
//     alert('Dios te guarde. Comencemos.');
//     ruletaRusa();
//   }else{
//   alert('Excelente decisión.');
// }
  
// }else{
//   alert('Excelente decisión.');
// }

// function ruletaRusa(){
// for(let posicionBala = 1; posicionBala <= 6; posicionBala++){

//   if(posicionRecamara === posicionBala){
//     alert(`Posición: ${posicionBala}, ¡Booom! estas muerto.`);
//     break;

//   }else{
//     alert(`Posición: ${posicionBala}, sigue jugando.`);
//   }
// }
// }

/*
script que regrese un string con la letra exacta  
Aquí está el resultado esperado 
en la consola:

'let it be, let it be, let it be, let it be, 
words of wisdom, 
let it be, let it be, let it be, let it be, let it be, 
there will be an answer, 
let it be'

let it be se repite. Otra vez usaremos bucles
*/

// function repeticion(n){
//   let frasex4 = 'let it be';
//   for(let i = 2; i <= n; i++){
//     frasex4 = frasex4 + ', ' + frase;
//   }
//   return frasex4;
// }
// let frase = 'let it be';
// let frase1 = 'words of wisdom';
// let frase2 = 'there will be an answer';

// console.log(`${repeticion(4)}, ${frase1}, ${repeticion(5)}, ${frase2}, ${repeticion(1)}`);

/*
¿Has escuchado la canción acerca 99 botellas de leche (99 bottles of milk)?

Es una gran canción - para nada aburrida... 

Aquí la puedes escuchar: https://www.youtube.com/watch?v=Xy-da43E6Lo

📝 Instrucciones:
Por favor escribe un algoritmo para imprimir la misma letra.
💡 PISTA:
Al final de la canción, la letra cambia porque es sólo una botella (singular en vez de plural).

Lee la última parte de la letra y verás como la última línea cambia a "go to the store and by some more".

Usa bucles para completar esta tarea.

📜 Nota:
El resultado debería ser algo así:

99 bottles of milk on the wall, 99 bottles of milk. Take one down and pass it around, 98 bottles of milk on the wall.

98 bottles of milk on the wall, 98 bottles of milk. Take one down and pass it around, 97 bottles of milk on the wall.

... ...

1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.

No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.
*/

// function imprimir(){
//   for(i = 100; i >= 1; i--){
//     if(i === 1){
//     console.log(`${i} bottle of milk on the wall, ${i} bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`);
//     }else if (i >=2){
//     console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i} bottles of milk on the wall.`);
//     }
//   }
//   return `No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.`;
// }
//console.log(imprimir());

//ARRAY
//Imprimir thursday y saturday por Consola.
// asi se debe ver: Los dias son thursday y saturday

// let myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// let aleatorio1 = Math.floor(Math.random() * myArray.length);
// let aleatorio2 = Math.floor(Math.random() * myArray.length);

// console.log(`Los dias son ${myArray[4]} y ${myArray[6]}`);
// console.log(`Los dias son ${myArray[aleatorio1]} y ${myArray[aleatorio2]}`);

// Contar las letras y colocarlas en un objeto
// Should print on the console { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

// const palabra = "Hola Mundo";
// const palabraSeparadas = palabra.split('');//si le coloco 1 espacio me lo separa por palabras, y sin espacio me lo coloca por cada letra


// const contar = palabraSeparadas.reduce((acum, letras) =>{
//   if(letras !== ' '){
//     if(acum[letras]){
//     acum[letras]++;
//   }else{
//     acum[letras] = 1;
//   }
//   }
//   return acum;
  
// }, {});

// console.log(palabraSeparadas);
// console.log(contar);

//Agrega 10 enteros aleatorios a un arreglo e imprime el 
//arreglo en la consola.

// let array = [];

// function aleatorio(){
//   return Math.floor(Math.random() * 100);
// }

// for(i = 1; i <= 2; i++){
//   array.push(aleatorio());
// }

// const resultado = array.reduce((acm, elem) => {
//   return acm + elem;

// }, 0);

// console.log(array);
// console.log(resultado);

//Mostrar cada elemento del array recorriendolo

// let myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

// for(i = 1; i <= myArray.length; i++){
//   console.log(myArray[i-1]);
// }

//Mostrar cada dos elementos del array
// let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

// for(i=1; i <= mySampleArray.length; i=i+2){
//   console.log(mySampleArray[i-1]);
// }

//Mostrar los elementos desde la mitad al final
// let mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

// for(i= mySampleArray.length / 2; i <= mySampleArray.length; i++){
//   console.log(mySampleArray[i-1]);
// }

//Mostrar el arreglo con las posiciones invertidas
// let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

// for(i = mySampleArray.length; i >= 1; i--){
//   console.log(mySampleArray[i-1]);
// }

//Haz un bucle en este arreglo que lo recorra por completo 
//e imprima las posiciones donde se encuentra el string "Waldo".
// let people = [ 'Lebron','Aaliyah','Diamond','Dominique','Aliyah','Jazmin','Darnell','Hatfield','Hawkins','Hayden','Hayes','Haynes','Hays','Head','Heath','Hebert','Henderson','Hendricks','Hendrix','Henry','Hensley','Henson','Herman','Hernandez','Herrera','Herring','Hess','Hester','Hewitt','Hickman','Hicks','Higgins','Hill','Hines','Hinton','Hobbs','Hodge','Hodges','Hoffman','Hogan','Holcomb','Holden','Holder','Holland','Holloway','Holman','Holmes','Holt','Hood','Hooper','Hoover','Hopkins','Hopper','Horn','Horne','Horton','House','Houston','Howard','Howe','Howell','Hubbard','Huber','Hudson','Huff','Waldo','Hughes','Hull','Humphrey','Hunt','Hunter','Hurley','Hurst','Hutchinson','Hyde','Ingram','Irwin','Jackson','Jacobs','Jacobson','James','Jarvis','Jefferson','Jenkins','Jennings','Jensen','Jimenez','Johns','Johnson','Johnston','Jones','Jordan','Joseph','Joyce','Joyner','Juarez','Justice','Kane','Kaufman','Keith','Keller','Kelley','Kelly','Kemp','Kennedy','Kent','Kerr','Key','Kidd','Kim','King','Kinney','Kirby','Kirk','Kirkland','Klein','Kline','Knapp','Knight','Knowles','Knox','Koch','Kramer','Lamb','Lambert','Lancaster','Landry','Lane','Lang','Langley','Lara','Larsen','Larson','Lawrence','Lawson','Le','Leach','Leblanc','Lee','Leon','Leonard','Lester','Levine','Levy','Lewis','Lindsay','Lindsey','Little','Livingston','Lloyd','Logan','Long','Lopez','Lott','Love','Lowe','Lowery','Lucas','Luna','Lynch','Lynn','Lyons','Macdonald','Macias','Mack','Madden','Maddox','Maldonado','Malone','Mann','Manning','Marks','Marquez','Marsh','Marshall','Martin','Martinez','Mason','Massey','Mathews','Mathis','Matthews','Maxwell','May','Mayer','Maynard','Mayo','Mays','Mcbride','Mccall','Mccarthy','Mccarty','Mcclain','Mcclure','Mcconnell','Mccormick','Mccoy','Mccray','Waldo','Mcdaniel','Mcdonald','Mcdowell','Mcfadden','Mcfarland','Mcgee','Mcgowan','Mcguire','Mcintosh','Mcintyre','Mckay','Mckee','Mckenzie','Mckinney','Mcknight','Mclaughlin','Mclean','Mcleod','Mcmahon','Mcmillan','Mcneil','Mcpherson','Meadows','Medina','Mejia','Melendez','Melton','Mendez','Mendoza','Mercado','Mercer','Merrill','Merritt','Meyer','Meyers','Michael','Middleton','Miles','Miller','Mills','Miranda','Mitchell','Molina','Monroe','Lucas','Jake','Scott','Amy','Molly','Hannah','Lucas'] 

// for(i = 1; i <= people.length; i++){
//   let item = people[i - 1];
//   if(item === 'Waldo'){
//     console.log(`Waldo esta en la posición ${i - 1}`);

//   }
// }
// console.log(people);

//Contraseña aleatoria:

// const numeros = '1234567890';
// const numerosSeparadas = numeros.split('');
// const numerosAleatoria1 = Math.floor(Math.random() * 10 );
// const numerosAleatoria2 = Math.floor(Math.random() * 10);
// const numerosAleatoria3 = Math.floor(Math.random() * 10);

// const letras = 'abcdefghijklmnopqrstuvwxyz';
// const letrasSeparadas = letras.split('');
// const letrasAleatoria1 = Math.floor(Math.random() * 26);
// const letrasAleatoria2 = Math.floor(Math.random() * 26);
// const letrasAleatoria3 = Math.floor(Math.random() * 26);
// const letrasAleatoria4 = Math.floor(Math.random() * 26);
// const letraMayusc = letras.toUpperCase();
// const letraMayuscSeparadas = letraMayusc.split('');

// const cadena1 = letraMayuscSeparadas[letrasAleatoria1] + letraMayuscSeparadas[letrasAleatoria2] + letrasSeparadas[letrasAleatoria3] + letrasSeparadas[letrasAleatoria4];
// const cadena2 = numerosSeparadas[numerosAleatoria1] + numerosSeparadas[numerosAleatoria2] + numerosSeparadas[numerosAleatoria3];
// // const cadena3 = letrasSeparadas[letrasAleatoria] + numerosSeparadas[numerosAleatoria];
// // const cadena4 = numerosSeparadas[numerosAleatoria] + letrasSeparadas[letrasAleatoria];


// const fusion = `${cadena1}.${cadena2}`;

// console.log(`Nueva Contraseña: ${fusion}`);

//////////////////////////////////////////////////////////////////////////////////

let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let arrayLetras = letras.split('');
let newLetras = '';
let cantLetras = prompt('Ingrese cantidad de caracteres para las Letras:');

function claveLetras(){
  for(i = 0; i < cantLetras; i++){
    let letraAleatoria = Math.floor(Math.random() * arrayLetras.length);
    newLetras = newLetras + arrayLetras[letraAleatoria];
  }
  return newLetras;
}

let numeros = '1234567890';
let arrayNumeros = numeros.split('');
let newNumeros = '';
let cantNumeros = prompt('Ingrese cantidad de caracteres para los Números:');

function claveNumeros(){
  for(i = 0; i < cantNumeros; i++){
    let numeroAleatorio = Math.floor(Math.random() * arrayNumeros.length);
    newNumeros = newNumeros + arrayNumeros[numeroAleatorio];
  }
  return newNumeros;  
}


let simbolos = '*.-$';
let arraySimbolos = simbolos.split('');
let newSimbolos = '';
let cantsimbolos = prompt('Ingrese cantidad de caracteres para los Simbolos:');

function claveSimbolos(){
  for(i = 0; i < cantsimbolos; i++){
    let simboloAleatorio = Math.floor(Math.random() * arraySimbolos.length);
    newSimbolos = newSimbolos + arraySimbolos[simboloAleatorio];
  }
  return newSimbolos;
}

console.log(`Nueva Clave: ${claveLetras()}${claveSimbolos()}${claveNumeros()}`);


/////////////////////////////////////////////////////////////////

let caracter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.*';
let caracterSeparados = caracter.split('');
let pass = '';//donde se almacena la nueva clave

function clave(num){
  for(i = 0; i < num; i++){
    let caracterAleatorio = Math.floor(Math.random() * caracterSeparados.length);
    pass += caracterSeparados[caracterAleatorio];//pass = pass + caracterSeparados[caracterAleatorio];
  }
  return pass;
}