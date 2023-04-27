// Declare global var
const kmPrice = 0.21;   // Price/km 0,21€
let discount;   // discount var 

// Ask user distance wanna cover
const distance = parseInt(prompt("Inserisci la distanza che vuoi percorrere (km)."));

// Ask user age
const userAge = parseInt(prompt("Benvenuto, inserisci la tua età.")); 

// Condition for discount
if(userAge < 18){   // if under 18 years old 20% discount
    discount = 0.2;
}else if(userAge >= 65){    // else if over 65 years old 40% discount
    discount = 0.4;
}else{  // else no discount
    discount = 0;
}

//Declare and calculate ticket price with possible discount
const amount = (distance * kmPrice);
const sumToPay = amount - (amount * discount);

// Inner to html details and sum to pay
document.getElementById("age").innerHTML = userAge;
document.getElementById("distance").innerHTML = distance;
document.getElementById("ticket_price").innerHTML = sumToPay.toFixed(2);