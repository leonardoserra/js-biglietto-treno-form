const username = document.querySelector("#username");
let km = document.querySelector("#km");
const generator = document.querySelector("#generator");
const reset = document.querySelector("#reset");
const ageRange = document.querySelector("#ageRange");
const priceTab = document.querySelector("#priceTab");
const pricePerKm = 0.21;

let nameSurname = document.querySelector("#nameSurname");
let tarifs = document.querySelector("#tarifs");
let price = pricePerKm * km;
let randomNumber;
//console.log(typeof(parseInt(km)));




//confirm button
generator.addEventListener('click', function() {
   
    nameSurname.innerHTML = username.value;
    tarifs.innerHTML = ageRange.value;
    priceTab.innerHTML = price;
    randomNumber = Math.floor(Math.random() * 10000 ) + 90000;
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

