const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const specialChar = '@!"#$%&()*+,-./';

function random(id) {

    let upperCaseCheck = document.getElementById(id + "UpperCase").checked;
    let lowerCaseCheck = document.getElementById(id + "LowerCase").checked;
    let numberCheck = document.getElementById(id + "Number").checked;
    let specialCaseCheck = document.getElementById(id + "SpecialCharacter").checked;

    let total = "";

    if (upperCaseCheck == true) {
        total += upperCase;
    }
    if (lowerCaseCheck == true) {
        total = total + lowerCase;
    }
    if (numberCheck == true) {
        total = total + number;
    }
    if (specialCaseCheck == true) {
        total = total + specialChar;
    }

    let range = document.getElementById(id + "Range").value;
    let result= "";

    for(i=0; i < range; i++){
        result += total[Math.floor(Math.random() * total.length)];
    }

    document.getElementById(id).value = result;
}


function range(id) {
    let rangeValue = document.getElementById(id);
    document.getElementById(id+"-value").innerHTML = rangeValue.value;
    
}

function generate() {
    random('user'); // user name
    random('pass'); // password

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    document.getElementById('specialFormetInput').value = user + ":" + pass + ":";
}

function copy(id) {
    let element = document.getElementById(id);
    if(element.value == "") {
        generate(); 
    }
    element.select()
    navigator.clipboard.writeText(element.value);
}