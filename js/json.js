'use strict';

var jsonPracownicy = {  
 "pracownicy":[
    {"firstName": "Krystian", "lastName": "Dziopa"},
    {"firstName": "Anna", "lastName": "Szapiel"},
    {"firstName": "Piotr", "lastName": "Żmuda"}
 ]
};

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(el, i){
            console.log("Imię i nazwisko " + (i+1) + ": " + el.firstName +" "+ el.lastName);
}) 