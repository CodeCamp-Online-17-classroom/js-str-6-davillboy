// write code here
function extractCurrencyValue(string, rate) {
  
  let value = parseInt(string.slice(1));


  if (isNaN(value)) {
    alert('Please enter a valid number!');
    return; 
  }

  let result = Math.floor(value * rate);

  alert(`The result is: ${result}`);

  console.log('Result:', result);

  return result;
}

let inputString = prompt('Enter a dollar amount:');
let inputRate = prompt('Enter the exchange rate:');

let result = extractCurrencyValue(inputString, parseFloat(inputRate));
