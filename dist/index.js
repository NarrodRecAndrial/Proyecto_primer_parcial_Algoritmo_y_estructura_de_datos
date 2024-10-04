"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datos_1 = require("./datos/datos");
// CONTAR CANTIDAD DE MARCAS SIN USAR LENGTH Y ORDENAR ALFABÉTTICAMENTE
let marcasNumber = 0;
let marcasOrder = datos_1.marcas.sort((a, b) => a.marca.localeCompare(b.marca)).map(marca => marca.marca);
for (const marca of datos_1.marcas) {
    marcasNumber++;
}
;
console.log(`Hay ${marcasNumber} marcas de autos en la lista.`);
console.log(`Las marcas ordenadas son: ${marcasOrder}\n\n`);
// CANTIDAD EXISTENCIA EN EL INVENTARIO Y PRODUCTO CON MÁS EXISTENCIAS
let cantidadExistencias = 0;
for (const inventario of datos_1.inventory) {
    cantidadExistencias++;
}
;
let existencia = datos_1.inventory[0];
for (const existencias of datos_1.inventory) {
    if (existencias.quantity > existencia.quantity) {
        existencia = existencias;
    }
    ;
}
;
console.log(`La fruta ${existencia.name} tiene mas existencias con: ${existencia.quantity}\n\n`);
//CANTIDAD DE HEROES POR CIUDAD Y LA CIUDAD CON MAS HEROES
let heroCity = {};
for (const heroe of datos_1.heroes) {
    if (heroCity[heroe.city]) {
        heroCity[heroe.city] += 1;
    }
    else {
        heroCity[heroe.city] = 1;
    }
    ;
}
console.log('Los heroes por cada ciudad son: ', heroCity);
// cual es la ciudad que tiene mas
let ciudadConMasHeroes = "";
let maxHeroes = 0;
for (const ciudad in heroCity) {
    if (heroCity[ciudad] > maxHeroes) {
        maxHeroes = heroCity[ciudad];
        ciudadConMasHeroes = ciudad;
    }
    ;
}
;
console.log(`La ciudad que tiene mas heroes es: ${ciudadConMasHeroes}\n\n`);
//PERSONAS 
// suma de las edades
let sumarEdades = 0;
for (const persona of datos_1.people) {
    sumarEdades += persona.edad;
}
console.log(`La suma de las edades es: ${sumarEdades}`);
// calcular el primedio de las edades
const cantidadDePersonas = datos_1.people.length;
let promedioEdades = sumarEdades / cantidadDePersonas;
console.log(`El promedio de las edades es: ${promedioEdades}`);
