const username = document.querySelector("#username");
const generator = document.querySelector("#generator");
const reset = document.querySelector("#reset");
const ageRange = document.querySelector("#ageRange");
const priceTab = document.querySelector("#priceTab");
const passengerCode = document.getElementById('passengerCode');
const errorMessage = document.getElementById('errorMessage');
const pricePerKm = 0.21;
const nameSurname = document.querySelector("#nameSurname");
const tarifs = document.querySelector("#tarifs");
const ticketContainer = document.getElementById('ticketContainer');



let km = document.querySelector("#km");
let randomNumber;
let price;

//console.log(typeof(parseInt(km)));




//confirm button
generator.addEventListener('click', function() {
    
    ticketContainer.classList.remove('d-none');
    ticketContainer.classList.add('d-block');
    price = (pricePerKm * parseInt(km.value));
    nameSurname.innerHTML = username.value;
    tarifs.innerHTML = ageRange.value;
    randomNumber = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
    passengerCode.innerHTML = randomNumber;

    if(isNaN(parseInt(km.value))){
        errorMessage.innerHTML = 'ATTENZIONE: Inserire solo numeri nel campo "Km da percorrere"'
        ticketContainer.classList.add('d-none');
        ticketContainer.classList.remove('d-block');


    } else {
        
        if(ageRange.value == "standard"){
            priceTab.innerHTML = price.toFixed(2) + "€";
            

        } else if(ageRange.value == "under18"){
            priceTab.innerHTML = (price - (price * 20 / 100)).toFixed(2) + "€";
         
            
        } else if(ageRange.value == "over65"){
            priceTab.innerHTML = (price - (price * 40 / 100)).toFixed(2) + "€";
           
        } else {
            errorMessage.innerHTML = 'ATTENZIONE: Selezionare tariffa prima di premere "Genera Biglietto"'
            ticketContainer.classList.add('d-none');
            ticketContainer.classList.remove('d-block');


        }
    }



    console.log(`${username.value} ${parseInt(km.value)} ${ageRange.value} ${price} ${randomNumber}`);
 
});


//reset button
reset.addEventListener('click', function() {

    username.value = '';
    km.value = '';
    ageRange.value = 'choose';
    ticketContainer.classList.remove('d-block');
    ticketContainer.classList.add('d-none');
    errorMessage.innerHTML = '';
    

});

