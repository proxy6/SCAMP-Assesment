var displayResult = document.querySelector("#displayResult");
var inputValue = document.querySelector("#inputValue");
var userInput = document.querySelector("input");
var clearButton = document.querySelector("button");
var num = 5;

userInput.addEventListener("change", function(){
  inputValue.textContent=this.value;
  num = Number(userInput.value);
  fibonacci(num);
  displayResult.textContent = fibonacci(num);
});

clearButton.addEventListener("click", function(){
  clearInput();
});

function fibonacci(num){
  var arr = [0, 1];
  while (arr[arr.length-1] + arr[arr.length-2] <= num) {
  arr.push(arr[arr.length-1] + arr[arr.length-2]);
  }
  return arr
}

function clearInput (){
  displayResult.textContent=" ";
  inputValue.textContent= " ";
  userInput.value = " ";

}