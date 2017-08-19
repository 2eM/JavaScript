'use strict' ;

var tablica = [12,'Łukasz',false,null];

console.log(tablica[1]);

console.log(tablica);

var tablicaWTablicy =  [['Łukasz','Marek'],['Ania','Ola']];

console.log(tablicaWTablicy[1][1]);

/* Długośc tablicy*/

console.log(tablica.length);

/* Dodawanie elementów na koniec tablicy .push()*/

tablica.push('Ania');
console.log(tablica);

/* Usuwanie elementów tablicy .pop() */

tablica.pop()
console.log(tablica);

/* Dodawanie elementów na początek tablicy .unshift() */

tablica.unshift('Ania');
console.log(tablica);

/* Usuwanie elementów z początku tablicy .shift() */

tablica.shift('Ania');
console.log(tablica);

/* Łącznie elementów tablicy w ciąg znaków*/

var imiona = ['Marek','Zygmunt','Mieczysław'];

console.log(imiona.join('#'));
console.log(imiona.join('&'));
console.log(imiona.join('@'));

/* Odwrócona tablica */

console.log(imiona.reverse());

/* Sortowanie tablicy alfabatycznie */

console.log(imiona.sort());

/*Lubię programować w JavaScript*/

var tekst = 'Lubię programować w JavaScript' ;
var tablica = tekst.split(' ',4);

console.log(tablica);
