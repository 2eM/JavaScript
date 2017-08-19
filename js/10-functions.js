'use strict';

function zaloguj(){
    console.log('Jestem w ciele funkcji');
}

zaloguj();

function dodajDwieLiczby(a,b){
    return a+b ;
}

console.log(dodajDwieLiczby(2,3));

var funkcjaNienazwana = 0; function (){return 0 ; console.log('jestem..');}

console.log(funkcjaNienazwana); 