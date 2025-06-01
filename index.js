let rates = {};

fetch("https://my-json-server.typicode.com/mhojayeva/redi-school-project/rates")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return response.json()
  })
  .then(response => {
    rates = response
  }) 
  .catch(error => {
    alert("Could not fetch currency rates. Please check your network connection.")
  });

// change dollar to euro and euro to dollar
// user is going to input an amount
// you are going to call the convert function
// the function is going to grab the value from the input
// and perform the multiplication
// then return the result

const valueInputNode = document.querySelector("#amount")
const currencySelectorNode = document.querySelector("#selector")
const outputNode = document.querySelector("#result")
const formNode = document.querySelector("form");

valueInputNode.addEventListener("change", calculateResult)
valueInputNode.addEventListener("keyup", calculateResult)
currencySelectorNode.addEventListener("change", calculateResult)

function calculateResult () {
    const amount = valueInputNode.value
    const currency = currencySelectorNode.value
    const resultDisplay = document.getElementById("result")

    console.log("currency", currency)
    console.log("amount", amount)

    if (currency === "usd-eur") {
        const result = amount * rates.euro
    }  
    
    if (currency === "usd-gbp") {
        const result = amount * rates.gpb
    } 
    
    if (currency === "eur-usd") {
        const result = amount / rates.euro
    } 
    
    if (currency === "usd-inr") {
        const result = amount * rates.inr

    } 
    
    if (currency === "usd-gel") {
        const result = amount * rates.gel
    }

    resultDisplay.value = result
    console.log(result)
}
