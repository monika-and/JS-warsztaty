'use strict';

var wszystkieZgody = document.getElementById("wszystkie-zgody")//.addEventListener("change", function() {
 //   console.log('klikniety');
    //}
//);
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wyslijBtn = document.getElementById("wyslij");
var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");
var wiadomosc = document.getElementById("wiadomosc");

function stanCheckboxa() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
    
    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
}


wszystkieZgody.onchange = stanCheckboxa;


function walidujFormularz(event) {
    

   wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>'
    
    if(inputImie.value.trim() == "") {
        
        var msgImie = document.createElement("li");
        msgImie.innerHTML = "Wpisz Imię!";
        wiadomosc.appendChild(msgImie);
       
        event.preventDefault();
    } 
    
    
     if(inputEmail.value.trim() == "") {
      
         var msgEmail = document.createElement("li");
         msgEmail.innerHTML = "Wpisz Email!";
         wiadomosc.appendChild(msgEmail);
         
        event.preventDefault();
    } 
    
    
    if(! zgodaMarketingowa1.checked) {
        
        var msgZgodaMarketingowa = document.createElement("li");
         msgZgodaMarketingowa.innerHTML = "musisz wyrazić zgodę marketingową 1!";
         wiadomosc.appendChild(msgZgodaMarketingowa);
        
        event.preventDefault();
    }
    
}


wyslijBtn.addEventListener('click', walidujFormularz);


/* var wszystkieCheckboxy = document.querySelectorAll("input[type=checkbox]");


wszystkieZgody.onchange = function() {
    console.log("klikniety");
    console.log(this.checked);
}

//if (wszystkieZgody.checked) {
//    console.log(zgodaMarketingowa1.checked);
//}


console.log(wszystkieZgody);
console.log(wszystkieCheckboxy);

*/











//checkbox.checked


//document.addEventListener("click", function()) {
//                          console.log("klikniety");
//                          }



//var imie = document.getElementById('name');
//
//var mail = document.getElementById('email');
//
//var zgoda1 = document.getElementById('zgoda-marketingowa-1');
//
//
//if (imie != null && imie.value == "") {
//    console.log('brak imienia i nazwiska'); 
//} 

//if (mail != null && imie.value === ""){
//    console.log('brak maila')
//}
//
//
//checkbox.checked 
//







/*buttony - onclick zdarzenie - clasa (onclick +metoda, który klawisz klikniety i ma sie wpisywac do imputa)

funkcje matematyczne
string ktory mozna zrobic przez funkcje ewaluate eval
bez obslugi błędu
valuate
funkcja w momencie klikniecia = ma pobrac tekst z inputa i wrzucic do funkcji eval, i zwrocic tekst jako wynik
*/
