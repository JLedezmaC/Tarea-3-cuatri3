/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: --------------------------------------------

  Selecciona y console.log el <h3> que dice "Esto
  es una lista"

*/
const elemento = document.querySelector('h3');
console.log(elemento.innerText);

/*
  EJERCICIO B: --------------------------------------------

  Selecciona y loguea el primer y el ultimo elemento
  de la lista

*/

const elements = document.getElementsByTagName('li');
console.log(elements[0].innerText);
console.log(elements[3].innerText);

/*
  EJERCICIO C: --------------------------------------------

  Selecciona y loguea el input de tipo "email" del
  formulario
*/

const input = document.getElementsByTagName('input');
console.log(input[2]);

/*
  EJERCICIO D: --------------------------------------------

  Selecciona y loguea la fila de la tabla que tiene "JavaScript"

*/

const SegundaCelda = document.querySelectorAll('tr');
console.log(SegundaCelda[2]);

/*
  EJERCICIO E: --------------------------------------------

  Selecciona y loguea la celda que dice CSS
*/

const terceracelda = document.querySelectorAll('tr');
console.log(terceracelda[3]);
