const rates = {
     usd: 1,
     euro: 1.15,
     gpb: 0.74
};

const dollar = "dollar"
const euro = "euro"
const gpb = "gpb"
let currency = dollar

// change dollar to euro and euro to dollar
// user is going to input an amount
// you are going to call the convert function
// the function is going to grab the value from the input
// and perform the multiplication
// then return the result

const valueInputNode = document.querySelector("#amount");
const currencySelectorNode = document.querySelector("#selector");
const outputNode = document.querySelector("#result")
const formNode = document.querySelector("form");

valueInputNode.addEventListener("keyup", calculateResult)
currencySelectorNode.addEventListener("change", calculateResult)


function calculateResult () {
    const amount = valueInputNode.value
    const currency = currencySelectorNode.value
    const resultDisplay = document.getElementById("result")
    console.log("currency", currency)

    if (currency === "usd-eur") {
        console.log("amount", amount)
        const result = amount * rates.euro
        console.log(result)
        resultDisplay.value = result

    }  if (currency === "usd-gbp") {
        console.log("amount", amount)
        const result = amount * rates.gpb
        console.log(result)
        resultDisplay.value = result

    } if (currency === "eur-usd") {
        console.log("amount", amount)
        const result = amount / rates.euro
        console.log(result)
        resultDisplay.value = result

    } 




}