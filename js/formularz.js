'use strict';

//var wyslij = document.getElementsByTagName('input')[2];
var formularz = document.getElementById('formularz')

function pobierzImie(event) {
    event.preventDefault();

    var imie = document.getElementsByName('fname')[0].value;
    var nazwisko = document.getElementsByName('lname')[0].value;

    console.log(imie);
    console.log(nazwisko);

}

//formularz.onsubmit = pobierzImie; - jeżeli w HTML nie byłoby onsubmit=pobierzImie(event), inaczej funkcja wywołuje się sama
