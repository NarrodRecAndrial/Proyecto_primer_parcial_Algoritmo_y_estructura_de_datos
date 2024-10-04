import { heroes, inventory, marcas, people } from "./datos/datos";

// CONTAR CANTIDAD DE MARCAS SIN USAR LENGTH Y ORDENAR ALFABÉTTICAMENTE
let marcasNumber = 0;
let marcasOrder = marcas.sort((a, b) => a.marca.localeCompare(b.marca)).map(marca => marca.marca);
for (const marca of marcas) {
    marcasNumber ++
};
console.log(`Hay ${marcasNumber} marcas de autos en la lista.`);
console.log(`Las marcas ordenadas son: ${marcasOrder}\n\n`);


// CANTIDAD EXISTENCIA EN EL INVENTARIO Y PRODUCTO CON MÁS EXISTENCIAS
let cantidadExistencias = 0
for (const inventario of inventory) {
    cantidadExistencias ++
};

let existencia = inventory[0];
for (const existencias of inventory) {
    if (existencias.quantity > existencia.quantity) {
        existencia = existencias
    };
};
console.log(`La fruta ${existencia.name} tiene mas existencias con: ${existencia.quantity}\n\n`);


//CANTIDAD DE HEROES POR CIUDAD Y LA CIUDAD CON MAS HEROES
let heroCity: { [key: string]: number} = {}
for (const heroe of heroes) {
    if ( heroCity[heroe.city]) {
        heroCity[heroe.city] += 1;
    } else {
        heroCity[heroe.city] = 1;
    };
}

console.log('Los heroes por cada ciudad son: ', heroCity);

// cual es la ciudad que tiene mas
let ciudadConMasHeroes = ""
let maxHeroes = 0

for (const ciudad in heroCity) {
    if (heroCity[ciudad] > maxHeroes) {
        maxHeroes = heroCity[ciudad]
        ciudadConMasHeroes = ciudad
    };
};

console.log(`La ciudad que tiene mas heroes es: ${ciudadConMasHeroes}\n\n`)


//PERSONAS 
// suma de las edades
let sumarEdades = 0
for (const persona of people) {
    sumarEdades += persona.edad
}
console.log(`La suma de las edades es: ${sumarEdades}`)

// calcular el primedio de las edades
const cantidadDePersonas = people.length

let promedioEdades = sumarEdades / cantidadDePersonas

console.log(`El promedio de las edades es: ${promedioEdades}`)

