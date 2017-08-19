'use strict';

for(var i=0;i<5;i++){
    console.log(i);
}

var tablica = [12,'Łukasz',false,null];

for(var j=0;j<tablica.length;j++){
    console.log(tablica[j]);
}

var zbiorLiczb=[1,3,8,16,36,91,101,400,5052];
var wynik = 0;

for(var k = 0 ; k<zbiorLiczb.length ; k++){
    if((zbiorLiczb[k]%2) === 0){
        wynik+=zbiorLiczb[k];}
}

console.log(wynik);

//var losowa = Math.floor((Math.random() * 10));
//
//while(losowa < 2 ){
//    console.log('Losowa Liczba = ' + losowa);   
//}


var losowa = Math.floor((Math.random() * 10));  
console.log('1 Losowa Liczba : ' + losowa);  
do{
   console.log('2 Losowa Liczba : ' + losowa);  
   losowa = Math.floor((Math.random() * 10));    
}while(losowa < 2 )
    
    
var rozneZmienne = [12,'Lukasz',false,null,2 ,'Cześć',7]
var wynik2 =0 ;
var z = 2

for(var l = 0 ; l<rozneZmienne.length ; l++){
    if((typeof rozneZmienne[l]) == 'number' ){ wynik2+=rozneZmienne[l]; }
}

console.log(wynik2);

