//'use strict' ;
//
//var  osoba = {
//    name:'Marcin',
//    height: 184 ,
//    isProgrammer:true,
//    about:function(){
//        console.log('Cześć ma na imie ' + this.name);
//        console.log('Mam ' + this.height + 'cm wzrostu');
//        console.log('Jesteś programistą? ' + this.isProgrammer);
//    }
//}
//
//console.log(osoba.name);
//console.log(osoba.height);
//console.log(osoba.isProgrammer);
//
//osoba.about();
//
//osoba.weight = 72 ;
//
//console.log(osoba);
//
//osoba.getWeight = function(){
//    console.log('Waga osoby o imieniu' + this.name + 'to' + this.weight + 'kg');
//}
//
//osoba.getWeight();
//
///*Tworzenie klasy*/
//
//function Person(name){
//    this.name = name ;
//}

class Person{
    constructor(name,height){
        this.name = name ;
        this.height = height ;
        this.about = function(){
            console.log('Mam na imię ' + this.name + ' i mam ' + this.height + 'cm wzrostu'  );
        }
    }
}
var marcin1 = new Person('Łukasz', 192);
var marcin2 = new Person('Ania', 187);

console.log(marcin1);
console.log(marcin2);

marcin1.about();


//Zwierze, nazwa, ilośc kończyn , kura, świnia, wąż i przedstwić obiekty

class Animal{
    constructor(imie, iloscNog){
        this.imie = imie ;
        this.iloscNog = iloscNog ;
        this.about = function(){
             console.log('Zwierzę o nazwie ' + this.imie + ' ma ' + this.iloscNog + ' nogi' );
        }
    }
}

var zwierze1 = new Animal('Świnia', 4);
var zwierze2 = new Animal('Kura', 2);

zwierze1.about();
zwierze2.about();