const username = document.querySelector("#username");
const km = document.querySelector("#km");
const generator = document.querySelector("#generator");
const reset = document.querySelector("#reset");
const ageRange = document.querySelector("#ageRange");
//km = parseInt(km);
console.log(ageRange.value);


generator.addEventListener('click', function() {
    //if(isNaN(km)) {
   //     console.log("ATTENZIONE: Inserire solo numeri dentro casella Km da percorrere");
    //}else{
        console.log(`${username.value}` + ` ${km.value}`);
    //}
});

reset.addEventListener('click', function() {

    username.value = '';
    km.value = '';
});

