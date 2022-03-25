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
    checkEmptyField('#voornaam', 'Het veld voornaam is vereist');
    checkEmptyField('#naam', 'Het veld naam is vereist');
    
    if (errors.length > 0){
        alert(errors);
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