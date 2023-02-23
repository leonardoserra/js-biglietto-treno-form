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


let km = document.querySelector("#km");

let randomNumber;
//console.log(typeof(parseInt(km)));




//confirm button
generator.addEventListener('click', function() {
    price = pricePerKm * km;
    console.log(pricePerKm * km);
    nameSurname.innerHTML = username.value;
    tarifs.innerHTML = ageRange.value;
    
    randomNumber = Math.floor(Math.random() * 10000 ) + 90000;
    passengerCode.innerHTML = randomNumber;

    // if(isNaN(parseInt(km))){
    //     errorMessage.innerHTML = 'ATTENZIONE: Inserire solo numeri nel campo "Km da percorrere"'
    // } else {
        
        if(ageRange.value == "standard"){
            priceTab.innerHTML = price;
            console.log(price);

        } else if(ageRange.value == "under18"){
            priceTab.innerHTML = price - (price * 100 / 20);
            console.log(price);
            
        } else if(ageRange.value == "over65"){
            priceTab.innerHTML = price - (price * 100 / 40);
            console.log(price);
        } else {
            errorMessage.innerHTML = 'ATTENZIONE: Selezionare tariffa prima di premere "Genera Biglietto"'
        }
    // }


    console.log(price);
    console.log(randomNumber);
    console.log(`${username.value}` + ` ${parseInt(km.value)}` + ` ${ageRange.value}`);
    console.log(typeof(parseInt(km)));
    console.log(typeof(parseInt(price)));
});


//reset button
reset.addEventListener('click', function() {

    username.value = '';
    km.value = '';
    ageRange.value = 'choose';

});

