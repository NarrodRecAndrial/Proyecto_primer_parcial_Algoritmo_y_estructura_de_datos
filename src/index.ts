import { heroes, inventory, marcas, people } from "./info/info";

//1 MARCAS 
// CONTAR CANTIDAD DE MARCAS SIN USAR LENGTH
let cantidadMarcas = 0;
for (const marca of marcas) {
    cantidadMarcas ++
};
console.log(`La cantidad de marcas de autos son ${cantidadMarcas}`);

// ORDENAR MARCAS DE "A" A "Z"
let marcasOrdenadas = marcas.sort((a, b) => a.marca.localeCompare(b.marca)).map(marca => marca.marca);
console.log(`Las marcas ordenadas son: ${marcasOrdenadas}`);


//2 INVENTARIO
// CANTIDAD EXISTENCIA
let cantidadExistencias = 0
for (const inventario of inventory) {
    cantidadExistencias ++
};

// CUAL ES EL PRODUCTO DE MAYOR EXISTENCIA
let existencia = inventory[0];
for (const existencias of inventory) {
    if (existencias.quantity > existencia.quantity) {
        existencia = existencias
    };
};
console.log('La fruta ${existencia.name} tiene mas existencias con un total de: ${existencia.quantity}');


//3. HEROES 
let heroesPorCiudad: any = {}
for (const heroe of heroes) {
    if ( heroesPorCiudad[heroe.city]) {
        heroesPorCiudad[heroe.city] += 1;
    } else {
        heroesPorCiudad[heroe.city] = 1;
    }
}

// cual es la ciudad que tiene mas heroes
for (const heroe of heroes) {
    if ( heroesPorCiudad[heroe.city] ) {
        heroesPorCiudad[heroe.city] += 1;
    } else {
        heroesPorCiudad[heroe.city] = 1;
    }
}
console.log(`Los heroes por cada ciudad son: `)
for (const ciudad in heroesPorCiudad) {
    console.log(`${ciudad}: ${heroesPorCiudad[ciudad]}`)
}

// cual es la ciudad que tiene mas
let ciudadConMasHeroes = ""
let maxHeroes = 0

for (const ciudad in heroesPorCiudad) {
    if (heroesPorCiudad[ciudad] > maxHeroes) {
        maxHeroes = heroesPorCiudad[ciudad]
        ciudadConMasHeroes = ciudad
    }
}

console.log(`La ciudad que tiene mas heroes es: ${ciudadConMasHeroes}\n\n`)


//PERSONAS 

let sumarEdades = 0
for (const persona of people) {
    sumarEdades += persona.edad
}
console.log(`La suma de las edades es: ${sumarEdades}`)

// calcular el primedio de las edades
const cantidadDePersonas = people.length

let promedioEdades = sumarEdades / cantidadDePersonas

console.log(`El promedio de las edades es: ${promedioEdades}`)

