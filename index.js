const inputElement = document.getElementById("numDisplay");

function displayValue(input){
    inputElement.value += input;
}

function clearDisplay() {
    inputElement.value = ""; 
}

function deleteBtn(){
   inputElement.value = inputElement.value.slice(0,-1);
}

function calculate(){
  try{
    inputElement.value = eval(inputElement.value);
  }
  catch(error){
    inputElement.value = "Math error!";
  }
}
