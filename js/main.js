const username = document.querySelector("#username");
let km = document.querySelector("#km");
const generator = document.querySelector("#generator");
const reset = document.querySelector("#reset");

//km = parseInt(km);


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

