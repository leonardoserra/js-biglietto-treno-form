const username = document.querySelector("#username");
let km = document.querySelector("#km");
const generator = document.querySelector("#generator");
const reset = document.querySelector("#reset");
const ageRange = document.querySelector("#ageRange");
const priceTab = document.querySelector("#priceTab");
const pricePerKm = 0.21;

let nameSurname = document.querySelector("#nameSurname");
let tarifs = document.querySelector("#tarifs");
let price = pricePerKm * parseInt(km);
console.log(typeof(parseInt(km)));
//km = parseInt(km.value);



//confirm button
generator.addEventListener('click', function() {

    //if(isNaN(km)) {
        //console.log("ATTENZIONE: Inserire solo numeri dentro casella Km da percorrere");
    //}else{
        console.log(`${username.value}` + ` ${parseInt(km.value)}` + ` ${ageRange.value}`);
        console.log(typeof(parseInt(km)));

        nameSurname.innerHTML = username.value;
        tarifs.innerHTML = ageRange.value;
        priceTab.innerHTML = parseInt(price);
        

    //}
    
});


//reset button
reset.addEventListener('click', function() {

    username.value = '';
    km.value = '';
    ageRange.value = 'choose';

});

