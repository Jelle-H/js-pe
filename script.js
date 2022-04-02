// Alerts verbergen
hideAlerts();

//https://www.youtube.com/watch?v=In0nB0ABaUk
const validateForm = document.getElementById('form');

let errors = [];

validateForm.addEventListener('submit', (e) => {
    // Array leegmaken
    errors = []; 
    // Alerts verbergen 
    hideAlerts();

    // Validaties
    checkEmptyField('#voornaam', 'Het veld voornaam is vereist.');
    checkEmptyField('#naam', 'Het veld naam is vereist.');
    checkEmptyField('#gebruikersnaam', 'Het veld gebruikersnaam is vereist.');
    checkEmptyField('#email', 'Het veld email is vereist.');
    checkEmptyField('#wachtwoord', 'Het veld wachtwoord is vereist.');
    checkEmptyField('#herhaalWachtwoord', 'Het veld herhaal wachtwoord is vereist.');
    checkEmptyField('#adres', 'Het veld adres is vereist.');
    checkEmptyField('#land', 'Het veld land is vereist.');
    checkEmptyField('#provincie', 'Het veld provincie is vereist.');
    checkEmptyField('#postcode', 'Het veld postcode is vereist.');

    //Check e-mailadres
    validateEmail('#email');
    
    //Check wachtwoorden
    validatePassword("wachtwoord", "herhaalWachtwoord");

    //Check postcode
    checkPC('#postcode');

    //Check betalingswijze
    let betalingswijze = validatePayment('input[name="flexRadioDefault"]:checked');

    // Controleren of algemene voorwaarden zijn aangeduid.
    algemeneVoorwaarden('#algemeneVoorwaarden', 'Je moet de algemene voorwaarden accepteren.');

    // Alerts tonen
    if (errors.length > 0){
        document.getElementById("error").style.visibility = 'visible';
        //https://stackoverflow.com/questions/28600453/add-text-to-a-p-tag-by-using-the-id-of-the-body-tag-in-javascript
        document.getElementsByTagName("p")[0].innerText = errors;  
    } 
    else 
    {
        document.getElementById("success").style.visibility = 'visible';
        document.getElementById("info").style.visibility = 'visible';
        document.getElementsByTagName("p")[2].innerText = `Je betalingswijze is ${betalingswijze}`;  
    }
    e.preventDefault();
})

// Functie om de alerts te verbergen
function hideAlerts(){
    document.getElementById("error").style.visibility = 'hidden';
    document.getElementById("success").style.visibility = 'hidden';
    document.getElementById("info").style.visibility = 'hidden';
}

// Functie controle lege velden
function checkEmptyField(veld, melding){
    let input = document.querySelector(veld).value;
    if (input == "" || input == "Kies een land" || input == "Kies een provincie") {
        errors += melding + "\n";
    } 
}

// Functie controle e-mailadres
function validateEmail(email){
    //https://www.w3resource.com/javascript/form/email-validation.php
    //https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let mail = document.querySelector(email).value;

    if (mail.match(validRegex)) {
      return true;
    } else {
      errors += "E-mailadres is niet correct." + "\n"; 
      return false;
    }
}

// Functie controle wachtwoord
function validatePassword(password, repeatPassword){
    //https://www.javatpoint.com/confirm-password-validation-in-javascript

    let wachtwoord = document.getElementById(password).value;
    let herhaalWachtwoord = document.getElementById(repeatPassword).value;

    //Wachtwoord controleren op lengte
    if (wachtwoord.length < 7) {
        errors += "Je wachtwoord is te kort." + "\n";
    } 
    
    //Controleren of wachtwoord hetzelde is
    if (wachtwoord != herhaalWachtwoord){
        errors += "Je wachtwoorden komen niet overeen." + "\n";
    }  
}

// Functie controle betalingswijze
function validatePayment(veld){
    let input = document.querySelector(veld).value;
    return input;
}

// Functie controle postcode
function checkPC(veld){
    let postcode = document.querySelector(veld).value;
    if (!(postcode >= 1000 && postcode <= 9999)){
        errors += "De waarde van postcode moet tussen 1000 en 9999 liggen." + "\n"; 
    }
}

function algemeneVoorwaarden(veld, melding){
    // https://www.w3schools.com/jsref/prop_checkbox_checked.asp
    let input = document.querySelector(veld).checked;
    if (input == false)
    {
        errors += melding + "\n";
    }
}