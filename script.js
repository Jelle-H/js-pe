document.getElementById("error").style.visibility = 'hidden';
document.getElementById("success").style.visibility = 'hidden';
document.getElementById("info").style.visibility = 'hidden';

//https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
//let form = document.querySelector('#btnSubmit');
//document.querySelector('#btnSubmit').addEventListener('click' , validateForm, false);
//function validateForm(event) {event.preventDefault(); }
//form.addEventListener('submit', validateForm);

// function validateForm(){
//     let errors = [];
    
//     // Validaties
//     checkEmptyField('#voornaam', 'Het veld voornaam is vereist');
//     checkEmptyField('#naam', 'Het veld naam is vereist');
    
//     alert(errors.join(', '));


//     // Errors tonen
//     // if (errors.length = 0){
//     //     e.preventDefault();
//     //     preventDefault();
//     //     document.getElementById("error").style.visibility = 'visible';
//     // }
// }


//https://www.youtube.com/watch?v=In0nB0ABaUk
const form = document.getElementById('form');

let errors = [];

form.addEventListener('submit', (e) => {
    // Validaties
    //checkEmptyField('#voornaam', 'Het veld voornaam is vereist.');
    //checkEmptyField('#naam', 'Het veld naam is vereist.');
    //checkEmptyField('#gebruikersnaam', 'Het veld gebruikersnaam is vereist.');
    //checkEmptyField('#adres', 'Het veld adres is vereist.');

    //Check e-mailadres
    //validateEmail('#email');


    //Controleren of velden wachtwoord zijn invuld
    checkEmptyField('#wachtwoord', 'Het veld wachtwoord is vereist.');
    checkEmptyField('#herhaalWachtwoord', 'Het veld herhaal wachtwoord is vereist.');

    //Check wachtwoorden
    let wachtwoord = document.getElementById("wachtwoord").value;
    let herhaalWachtwoord = document.getElementById("herhaalWachtwoord").value;
    validatePassword(wachtwoord, herhaalWachtwoord);

    

    //Errors tonen
    if (errors.length > 0){
        alert(errors);
        document.getElementById("error").style.visibility = 'visible';
        document.getElementById("error").innerText += errors;
        e.preventDefault();
    }
    
})




function checkEmptyField(veld, melding){
    let input = document.querySelector(veld).value;
    if (input == "") {
        errors += melding + "\n";
    } else {
        alert(input);
    }
}


//https://www.w3resource.com/javascript/form/email-validation.php
//https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
function validateEmail(email){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
  
      alert("Valid email address!");
      return true;
  
    } else {
  
      alert("Invalid email address!"); 
      errors += "E-mailadres is niet correct." + "\n"; 
      return false;
  
    }
}

//https://www.javatpoint.com/confirm-password-validation-in-javascript
function validatePassword(password, repeatPassword){
    //Wachtwoord controleren op lengte
    if (password.length < 7) {
        alert("Te kort!!!!!!!!!!");
    } 
    if (wachtwoord != repeatPassword){
        alert("Velden zijn niet gelijk!");
    }  
}