'use strict';

var przycisk = document.getElementById('przycisk');



function ustawTlo(e) {

    if (e.type == 'click') {
        parFirst.style.backgroundColor = "red";
        parSecond.style.backgroundColor = "yellow";
    }
}

document.getElementById('przycisk').onclick = ustawTlo;