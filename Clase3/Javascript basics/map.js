// 1. Ejemplo de Objeto en JavaScript
console.log("Ejemplo de Objeto:");

const person = {
    nombre: "Juan",  // Propiedad de tipo String
    edad: 30,        // Propiedad de tipo Number
    ciudad: "Madrid", // Propiedad de tipo String
};

// Accediendo a una propiedad del objeto
console.log(`Nombre: ${person.nombre}`);  // Imprime: Juan

// Modificando una propiedad del objeto
person.edad = 31;  // Actualiza la propiedad 'edad'
console.log(`Edad actualizada: ${person.edad}`);  // Imprime: 31

// Añadiendo una nueva propiedad
person.profession = "Desarrollador"; // Añade una nueva propiedad
console.log(`Profesión: ${person.profession}`);  // Imprime: Desarrollador

// Verificar si una propiedad existe en el objeto
console.log(`¿Tiene propiedad 'ciudad'? ${'ciudad' in person}`);  // Imprime: true

// 2. Ejemplo de Map (Mapa)
console.log("\nEjemplo de Map:");

const map = new Map();

// Añadir elementos al Map utilizando set()
map.set("name", "Alice");      // Clave: 'name', valor: 'Alice'
map.set("age", 25);            // Clave: 'age', valor: 25
map.set("city", "New York");   // Clave: 'city', valor: 'New York'

// Acceder a un valor mediante su clave con get()
console.log(`Nombre desde Map: ${map.get("name")}`);  // Imprime: Alice
console.log(`Edad desde Map: ${map.get("age")}`);    // Imprime: 25

// Verificar si una clave existe con has()
console.log(`¿Existe la clave 'city'? ${map.has("city")}`); // Imprime: true

// Eliminar un elemento con delete()
map.delete("age");  // Elimina la clave 'age' y su valor
console.log(`¿Existe la clave 'age' después de eliminarla? ${map.has("age")}`);  // Imprime: false

// 3. Ejemplo de Set (Conjunto)
console.log("\nEjemplo de Set:");

const set = new Set();

// Añadir elementos al Set
set.add("apple");    // Añade "apple"
set.add("banana");   // Añade "banana"
set.add("cherry");   // Añade "cherry"
set.add("apple");    // No se añade porque los Sets no permiten duplicados

// Mostrar todos los elementos del Set
console.log(`Set después de añadir elementos: ${Array.from(set)}`);  // Imprime: ["apple", "banana", "cherry"]

// Verificar si un valor está en el Set con has()
console.log(`¿Contiene el Set 'apple'? ${set.has("apple")}`);  // Imprime: true
console.log(`¿Contiene el Set 'orange'? ${set.has("orange")}`);  // Imprime: false

// Eliminar un elemento con delete()
set.delete("banana");  // Elimina "banana"
console.log(`Set después de eliminar 'banana': ${Array.from(set)}`);  // Imprime: ["apple", "cherry"]

// 4. Ejemplo de Array (Arreglo)
console.log("\nEjemplo de Array:");

const fruits = ["manzana", "plátano", "cereza"];

// Acceder a un elemento del array
console.log(`Primer fruta: ${fruits[0]}`);  // Imprime: manzana

// Añadir un elemento al final del array
fruits.push("naranja");  // Añade "naranja" al final del array
console.log(`Array después de añadir un elemento: ${fruits}`);  // Imprime: ["manzana", "plátano", "cereza", "naranja"]

// Eliminar el último elemento del array
fruits.pop();  // Elimina "naranja"
console.log(`Array después de eliminar el último elemento: ${fruits}`);  // Imprime: ["manzana", "plátano", "cereza"]

// 5. Comprobación de Existencia en Arrays, Objetos y Sets
console.log("\nComprobaciones de Existencia:");

const numbers = [1, 2, 3, 4, 5];

// Comprobamos si el array contiene el número 3
console.log(`¿El array contiene el número 3? ${numbers.includes(3)}`);  // Imprime: true

// Comprobamos si el objeto tiene una propiedad 'nombre'
console.log(`¿El objeto tiene la propiedad 'nombre'? ${person.hasOwnProperty('nombre')}`);  // Imprime: true

// Comprobamos si el Set contiene 'apple'
console.log(`¿El Set contiene 'apple'? ${set.has("apple")}`);  // Imprime: true

// 6. Iterar sobre Map y Set
console.log("\nIteración sobre Map y Set:");

// Iterar sobre un Map
console.log("Iterando sobre Map:");
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Iterar sobre un Set
console.log("Iterando sobre Set:");
for (let value of set) {
    console.log(value);
}


