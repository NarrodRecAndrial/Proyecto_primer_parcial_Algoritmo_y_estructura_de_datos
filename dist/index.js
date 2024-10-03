"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info_1 = require("./info/info");
//1 MARCAS 
// CONTAR CANTIDAD DE MARCAS SIN USAR LENGTH
let cantidadMarcas = 0;
for (const marca of info_1.marcas) {
    cantidadMarcas++;
}
;
console.log(`La cantidad de marcas de autos son ${cantidadMarcas}`);
// ORDENAR MARCAS DE "A" A "Z"
let marcasOrdenadas = info_1.marcas.sort((a, b) => a.marca.localeCompare(b.marca)).map(marca => marca.marca);
console.log(`Las marcas ordenadas son: ${marcasOrdenadas}`);
//2 INVENTARIO
// CANTIDAD EXISTENCIA
let cantidadExistencias = 0;
for (const inventario of info_1.inventory) {
    cantidadExistencias++;
}
;
// CUAL ES EL PRODUCTO DE MAYOR EXISTENCIA
let existencia = info_1.inventory[0];
for (const existencias of info_1.inventory) {
    if (existencias.quantity > existencia.quantity) {
        existencia = existencias;
    }
    ;
}
;
console.log('La fruta ${existencia.name} tiene mas existencias con un total de: ${existencia.quantity}');
//3. HEROES 
let heroesPorCiudad = {};
for (const heroe of info_1.heroes) {
    if (heroesPorCiudad[heroe.city]) {
        heroesPorCiudad[heroe.city] += 1;
    }
    else {
        heroesPorCiudad[heroe.city] = 1;
    }
}
// cual es la ciudad que tiene mas heroes
for (const heroe of info_1.heroes) {
    if (heroesPorCiudad[heroe.city]) {
        heroesPorCiudad[heroe.city] += 1;
    }
    else {
        heroesPorCiudad[heroe.city] = 1;
    }
}
console.log(`Los heroes por cada ciudad son: `);
for (const ciudad in heroesPorCiudad) {
    console.log(`${ciudad}: ${heroesPorCiudad[ciudad]}`);
}
// cual es la ciudad que tiene mas
let ciudadConMasHeroes = "";
let maxHeroes = 0;
for (const ciudad in heroesPorCiudad) {
    if (heroesPorCiudad[ciudad] > maxHeroes) {
        maxHeroes = heroesPorCiudad[ciudad];
        ciudadConMasHeroes = ciudad;
    }
}
console.log(`La ciudad que tiene mas heroes es: ${ciudadConMasHeroes}\n\n`);
//PERSONAS 
let sumarEdades = 0;
for (const persona of info_1.people) {
    sumarEdades += persona.edad;
}
console.log(`La suma de las edades es: ${sumarEdades}`);
// calcular el primedio de las edades
const cantidadDePersonas = info_1.people.length;
let promedioEdades = sumarEdades / cantidadDePersonas;
console.log(`El promedio de las edades es: ${promedioEdades}`);
