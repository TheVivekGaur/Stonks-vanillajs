var initialPrice = document.getElementById('initial-price');
var stocksQuantity = document.getElementById('stocks-quantity');
var currentPrice = document.getElementById('current-price');
var submitBtn = document.getElementById('submit-btn');
var outputBox = document.getElementById('output-box');

submitBtn.addEventListener('click' , submitHandler);

function submitHandler(){
 var ip = Number(initialPrice.value) ;
 var qty= Number(stocksQuantity.value);
 var curr = Number(currentPrice.value);

 calculateProfitAndLoss(ip , qty , curr);

}

function calculateProfitAndLoss (initial, quantity, current) {
 if(current> initial) {
  var profit = (current - initial) * quantity;
  var profitPercentage = ((profit/current)*100).toFixed(2);
  outputBox.style.color='green';
  showOutput(`Hi the profit is ${profit} and the profit percentage is 
 ${profitPercentage} %`)
} else if(initial>current){
   var loss= (initial - current) * quantity;
   var lossPercentage = ((loss/initial)*100).toFixed(2);
   outputBox.style.color='red';
   showOutput(`Hi the loss is ${loss} and the loss percentage is 
   ${lossPercentage} %`)
}else{
    showOutput('Hey No pain No Gain and NO gain No Pain means neither profit nor loss');
}
}

function showOutput (message) {
 outputBox.innerText= message;
}

