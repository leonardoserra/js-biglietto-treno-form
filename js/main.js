const age = parseInt(prompt("Buongiorno, inserire età"));
const distance = parseInt(prompt("Inserire distanza che si vuole percorrere in km"));
const pricePerKm = 0.21;
let price = distance * pricePerKm;
let messaggio = document.getElementById("messaggio");
let costo = document.getElementById("costo");
console.log(age, distance, pricePerKm, price);


if(isNaN(age)||isNaN(distance)){

    messaggio.innerHTML = "errore, inserire solo numeri interi";

} else{ 

    if(age < 18){

        price -= ((price*20)/100);
        messaggio.innerHTML = `Buongiorno, sei under18 perció hai uno sconto del 20%:`;
        costo.innerHTML = `il biglietto costa ${price.toFixed(2)}€. Buon Viaggio!`;

    }else if (age >= 65){

        price -= ((price*40)/100);
        messaggio.innerHTML = `Buongiorno, lei ha diritto allo sconto over65 del 40%:`;
        costo.innerHTML = `il biglietto costa ${price.toFixed(2)}€. Buon Viaggio!`;
    
    } else{

        messaggio.innerHTML = `Buongiorno, il prezzo del biglietto è il seguente:`;
        costo.innerHTML = `${price.toFixed(2)}€. Buon Viaggio!`;

    }
    
}




