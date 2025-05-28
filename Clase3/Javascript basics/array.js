// ===============================
// MANIPULACIÓN DE ARRAYS EN JAVASCRIPT
// ===============================

// 1. CREACIÓN DE ARRAYS
const numeros = [1, 2, 3, 4, 5];
const frutas = ["Manzana", "Banana", "Cereza", "Durazno"];
const mixto = [10, "Hola", true, { nombre: "Juan" }];

// 2. ACCESO A ELEMENTOS
console.log(numeros[0]); // 1 (Primer elemento)
console.log(frutas[frutas.length - 1]); // "Durazno" (Último elemento)

// 3. MÉTODOS PRINCIPALES DE ARRAYS

// a) push() -> Agregar al final
frutas.push("Uva");
console.log(frutas); // ["Manzana", "Banana", "Cereza", "Durazno", "Uva"]

// b) pop() -> Eliminar el último
frutas.pop();
console.log(frutas); // ["Manzana", "Banana", "Cereza", "Durazno"]

// c) unshift() -> Agregar al inicio
frutas.unshift("Mango");
console.log(frutas); // ["Mango", "Manzana", "Banana", "Cereza", "Durazno"]

// d) shift() -> Eliminar el primero
frutas.shift();
console.log(frutas); // ["Manzana", "Banana", "Cereza", "Durazno"]

// e) slice() -> Extraer parte del array
const seleccionadas = frutas.slice(1, 3);
console.log(seleccionadas); // ["Banana", "Cereza"]

// f) splice() -> Modificar el array (Eliminar y/o insertar elementos)
frutas.splice(1, 1, "Pera", "Fresa"); // Elimina 1 elemento desde el índice 1 e inserta "Pera" y "Fresa"
console.log(frutas); // ["Manzana", "Pera", "Fresa", "Cereza", "Durazno"]

// g) concat() -> Unir arrays
const combinados = numeros.concat(frutas);
console.log(combinados);

// h) join() -> Convertir array en string
console.log(frutas.join(" - ")); // "Manzana - Pera - Fresa - Cereza - Durazno"

// i) reverse() -> Invertir el array
console.log(frutas.reverse());

// j) sort() -> Ordenar el array (alfabético por defecto)
console.log(frutas.sort());

// k) map() -> Transformar elementos del array
const cuadrados = numeros.map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9, 16, 25]

// l) filter() -> Filtrar elementos bajo una condición
const mayoresA3 = numeros.filter(num => num > 3);
console.log(mayoresA3); // [4, 5]

// m) reduce() -> Acumular valores del array
const sumaTotal = numeros.reduce((acc, num) => acc + num, 0);
console.log(sumaTotal); // 15

// n) forEach() -> Recorrer el array sin retorno
frutas.forEach(fruta => console.log(`Me gusta la ${fruta}`));

// o) find() -> Encontrar el primer elemento que cumple una condición
const encontrado = numeros.find(num => num > 3);
console.log(encontrado); // 4

// p) findIndex() -> Obtener índice del primer elemento que cumple una condición
const indice = numeros.findIndex(num => num > 3);
console.log(indice); // 3

// q) includes() -> Verificar si un elemento existe
console.log(frutas.includes("Pera")); // true

// r) some() -> Comprobar si algún elemento cumple una condición
console.log(numeros.some(num => num > 4)); // true

// s) every() -> Comprobar si todos los elementos cumplen una condición
console.log(numeros.every(num => num > 0)); // true

// t) fill() -> Rellenar con un valor
const rellenado = new Array(5).fill(0);
console.log(rellenado); // [0, 0, 0, 0, 0]

// u) flat() -> Aplanar arrays anidados
const anidado = [1, [2, 3], [4, [5, 6]]];
console.log(anidado.flat(2)); // [1, 2, 3, 4, 5, 6]

// ===============================
// USO AVANZADO
// ===============================

// Ordenación numérica correcta con sort()
const edades = [45, 12, 37, 25, 19];
edades.sort((a, b) => a - b);
console.log(edades); // [12, 19, 25, 37, 45]

// Eliminar duplicados con Set
const duplicados = [1, 2, 3, 3, 4, 4, 5];
const sinDuplicados = [...new Set(duplicados)];
console.log(sinDuplicados); // [1, 2, 3, 4, 5]

// Conversión de un array de objetos
const personas = [
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 25 },
    { nombre: "María", edad: 35 }
];
const nombres = personas.map(persona => persona.nombre);
console.log(nombres); // ["Ana", "Luis", "María"]
