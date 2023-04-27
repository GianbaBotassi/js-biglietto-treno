// Declare global var
let sumToPay;
const kmPrice = 0.21;
const discountYounger = 0.2;
const discountOlder = 0.4;

// Ask user age
const userAge = parseInt(prompt("Benvenuto, inserisci la tua età.")); 

// Ask user distance wanna cover
const distance = parseInt(prompt("Inserisci la distanza che vuoi percorrere (km)."))

//Declare and Calculate ticket price with and without discount
const amount = (distance * kmPrice);
const amountYounger = amount - (amount * discountYounger);
const amountOlder = amount - (amount * discountOlder);

// Condition for discount
if(userAge < 18){   // if under 18 years old 20%
    sumToPay = amountYounger.toFixed(2);
}else if(userAge >= 65){    // else if over 65 years old 40%
    sumToPay = amountOlder.toFixed(2);
}else{  // else no discount
    sumToPay = amount.toFixed(2);
}

// Inner to html price to pay
document.getElementById("age").innerHTML = userAge;
document.getElementById("distance").innerHTML = distance;
document.getElementById("ticket_price").innerHTML = sumToPay;