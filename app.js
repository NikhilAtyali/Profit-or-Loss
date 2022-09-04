const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var startingPrice = Number(initialPrice.value);
    var quantity = Number(stocksQuantity.value);
    var currentValue = Number(currentPrice.value);
  
    calculateProfitAndLoss(startingPrice, quantity, currentValue);
  }

  function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
      var loss = (initial - current) * quantity;
      var lossPercentage = ((loss / initial) * 100)/quantity;
  
      showOutput(
        `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
      );
    } else if (current > initial) {
      var profit = (current - initial) * quantity;
      var profitPercentage = ((profit / initial) * 100)/quantity;
  
      showOutput(
        `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
      );
    } else {
      showOutput(`No pain no gain and no gain no pain`);
    }
  }

  function showOutput(message) {
    outputBox.innerHTML = message;
  }