//const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

/*
document.addEventListener('DOMContentLoaded', async () => {
   // Run an asynchronous function once the DOM content has loaded
   let bitcoin_price;
   
   try{
        const reponse = await fetch(API_URL);
         // Await a response from the HTTP request sent to the API URL
        
         const data = await reponse.json();
         // Await the json content of the response 

         bitcoin_price = data.bpi.USD.rate_float.toFixed(2);
         // Reassign the bitcoinPrice variable to the USD value of Bitcoin, rounded to the nearest 2 decimal places.

   }catch{
        console.log("error");
   }

   console.log(bitcoin_price); //log the price in the console

});

document.addEventListener('DOMContentLoaded', async () => {
     let bitcoin_price = localStorage.getItem("last-bitcoin-price");
     // Retrieve the last stored Bitcoin price from localStorage, if it exists
     // Note: It should be null the first time you try running the page
     try{
          const reponse = await fetch(API_URL);
          const data = await response.json();
          bitcoin_price = data.bpi.USD.rate_float.toFixed(2);
          //bitcoin price will be re-written 

          localStorage.setItem("last-bitcoin-price", bitcoin_price);
          //save most recent price to localStorage 

     }catch{
          console.log("error");
     }

     console.log(bitcoin_price);
});

*/

/*
document.addEventListener('DOMContentLoaded', async () => {
     const main = document.getElementById("main");
     const bitcoin_price_element = document.getElementById("bitcoin-price");
     const bitcoin_amount_input = document.getElementById("bitcount-amount");
     const calculate_bitcoin = document.getElementById("calculate-bitcoin");
     const usd_amount_element = document.getElementById("usd-amount");

     let bitcoin_price = localStorage.getItem("last-bitcoin-price");

     try{
          const response = await fetch(API_URL);
          const data  = await response.json();
          bitcoin_price = data.bpi.USD.rate_float.toFixed(2);
          localStorage.setItem("last-bitcoin-price", bitcoin_price);

          bitcoin_price_element.textContent = bitcoin_price;
          //set the text content of bitcoin_price_element to the current bitcoin_price 

     }catch (error) {
          if(bitcoin_price){
               // If there's an existing bitcoinPrice in localStorage...
               bitcoin_price_element.textContent = bitcoin_price;
               // display whatever is saved in the local storage 
          }else{
               main.innerHTML = "<p> Could not fetch Bitcoin price </p>";
               return;     
          }
     }

     console.log(bitcoin_price);

     let bitcoin_amount = localStorage.getItem("bitcoin-amount");

     const calculate_usd_amount = () => {
          bitcoin_amount = bitcoin_amount_input.value || 0;

          const usd_amount = bitcoin_amount * bitcoin_price;

          usd_amount_element.innerHTML = `<b>$${usd_amount.toFixed(2)} USD</b> worth of Bitcoin.`;
          // Round it to the nearest 2 decimals and display it

     };

     if(bitcoin_amount){
          bitcoin_amount = bitcoin_amount_input.value || 0;
          // set the input's value to bitcoin amount

          calculate_usd_amount();
     }

     calculate_bitcoin.addEventListener("click", () => {
          calculate_usd_amount();
          // calculate and update the front end 
                                                            
          localStorage.setItem("bitcoin-amount", bitcoin_amount_input.value);
          // save the input value to localStorage 
     });
});
*/


const API = "https://api.coindesk.com/v1/bpi/currentprice.json";

document.addEventListener("DOMContentLoaded", async () => {
  const main = document.getElementById("main");
  const bitcoinPriceElement = document.getElementById("bitcoinPrice");
  const bitcoinAmountInput = document.getElementById("bitcoinAmount");
  const calculateBtn = document.getElementById("calculateBtn");
  const usdAmountElement = document.getElementById("usdAmount");

  let bitcoinPrice = localStorage.getItem("lastBitcoinPrice");

  try {
    const response = await fetch(API);
    const data = await response.json();
    bitcoinPrice = data.bpi.USD.rate_float.toFixed(2);
    localStorage.setItem("lastBitcoinPrice", bitcoinPrice);
    bitcoinPriceElement.textContent = bitcoinPrice;
  } catch (error) {
    if (bitcoinPrice) {
      bitcoinPriceElement.textContent = bitcoinPrice;
    } else {
      main.innerHTML = "<p>Could not fetch Bitcoin price :(</p>";
      return;
    }
  }

  let bitcoinAmount = localStorage.getItem("bitcoinAmount");

  const calculateUSDAmount = () => {
    bitcoinAmount = bitcoinAmountInput.value || 0;
    const usdAmount = bitcoinAmount * bitcoinPrice;
    usdAmountElement.innerHTML = `<b>$${usdAmount.toFixed(
      2
    )} USD</b> worth of Bitcoin.`;
  };

  if (bitcoinAmount) {
    bitcoinAmountInput.value = bitcoinAmount;
    calculateUSDAmount();
  }

  calculateBtn.addEventListener("click", () => {
    calculateUSDAmount();
    localStorage.setItem("bitcoinAmount", bitcoinAmountInput.value);
  });
});