console.log('Hello world')

console.warn ('to jets warning')
console.error ('to jest error')

var name = 'Nina'; 
var age = 27
var isAnAdult = true

// deklaracja zmiennych 
// console.log(name); 
// console.log(age);
// console.log(isAnAdult);


// Typy wywołania w konsoli 
// console.log(3+'3')
// console.log('3' + 3);
// console.log(false + 2);
// console.log(true + 1);
// console.log(false + '1');

// console.log('abc' + 'gfsgfjh');

// tablice 
var array1 = ['dog', 'cat', 'horse', 'cow'];
console.log(array1)

// console.log(array1[0]);
// console.log(array1[1]); 
// console.log(array1.length)

// console.log(array1[array1.length-1]);

// console.log('where is dog',(array1.indexOf('dog')));
// console.log('where is bull', array1.indexOf('bull'));

// console.log(age.indexOf('cat'));

// obiekty 

// console.log(cat);


var cat = {
    name: 'Mruczek',
    age: 3,
    color: 'black'
 
}

console.log(cat);
console.log(cat.name);
console.log(cat.weight);


// Object.keys(cat);
// console.log('klicze z obiektu cat', Object.keys(cat));
// console.log(cat.hasOwnProperty('weight'));



cat.name = 'Bonifacy'
console.log(cat.name);


// var Pers = new cat;
// console.log(Pers)


console.log(typeof name);
console.log(typeof age)
console.log(typeof isAnAdult);
console.log(Array.isArray(array1)); //boolean
console.log(typeof cat);

//puste wartosci 
console.log('pusty string', typeof '')
console.log('pusta tablica', Array.isArray([]));


console.log(typeof name === 'string'); 
console.log(typeof age === 'number')


var antything;
var empty = null; 

console.log(typeof antything);
console.log(typeof empty);
console.log(empty === null);


var notAnNumber = Math.sqrt(-1);
var notAnNumber2 = parseInt(name);



console.log(notAnNumber)
console.log(notAnNumber2)
console.log(parseInt ('23'));

var falsy1 = [];
var falsy2 = '';
var falsy3 = 0;
var falsy4 = undefined;


// if (falsy1 == true) {
//     console.log('Not false')
// }

// console.log('is falsy1 a falsy value',falsy1 == false);
// console.log('is falsy2 a falsy value',falsy2 == false);
// console.log('is falsy3 a falsy value',falsy3 == false);
// console.log('is falsy4 a falsy value',falsy4 == false);

//dzialania arytmetyczne

var liczba1 = 12; 
var liczba2 = 23; 
var liczba3 = 2.2;
var result1 = liczba1 * liczba2

// console.log(liczba1 + liczba2);
// console.log(liczba2 % liczba1);
// console.log(result1);

// console.log('liczba jest parzysta', liczba2 % 2 === 0)

// console.log('liczba2 jest zmienoprzecinkowa', liczba3 % 1 !==0 )

liczba1 = liczba2;
// console.log(liczba1 < liczba2);
// console.log(liczba2 > liczba1);
// console.log(liczba2 <= liczba1);
// console.log(liczba2 >= liczba1); 


// var losowa = Math.random() * 10;
// var losowaK6 = Math.round(Math.random()*6);
 
// var losowaZaokraglona1 = Math.ceil(losowa)
// var losowaZaokraglona2 = Math.floor(losowa); 



// console.log(losowaK6)
// console.log(losowaZaokraglona1);
// console.log(losowaZaokraglona2);

// console.log(Math.max(2,30,10,100,200))

// console.log(Math.min(2,30,10,100,200))

var wartosci = [2,30,10,100,200]
// console.log(Math.max(...wartosci));

var prawda = true
var nieprawda = false

// console.log(prawda && nieprawda)
// console.log(prawda && prawda)
// console.log(prawda || nieprawda);
// console.log(prawda || prawda)

// console.log('not')
// console.log(prawda && !nieprawda)
// console.log(prawda && !prawda)
// console.log(prawda || !nieprawda);
// console.log(prawda || !prawda)
