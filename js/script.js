// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo con massimo due decimali per indicare centesimi sul prezzo.



// Chiedo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Chiedo i Km
const userKm = parseInt(prompt('Dimmi il numero di chilometri che vuole percorrere'));

// Chiedo l'età
const userAge = parseInt(prompt('Dimmi l\'età'));

// Logica

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
let userPrice = userKm * 0.21;

// Applico uno sconto del 20% per i minorenni, applico uno sconto del 40% per gli over 65.
let price = userPrice;
if (userAge < 18) {
    price = price - (price * 20 / 100);
    alert("Hai ottenuto il 20% di sconto 👌");
} else if (userAge > 65) {
    price = price - (price * 40 / 100);
    alert("Hai ottenuto il 40% di sconto 👌");
}

// Stampo il risultato (2 decimali)
const priceFixed = price.toFixed(2);
const userMessage = "Il prezzo della corsa è " + priceFixed + "€";

// alert(userMessage)
document.getElementById('message').innerHTML = userMessage;