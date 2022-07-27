var input = []

//basic operation functions
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

//decides which operation function to use based on given operator
function operate(op, num1, num2){
    let result = 0;
    if(op === "+"){
        result = add(num1,num2);
    }
    else if(op === "-"){
        result = subtract(num1,num2);
    }
    else if(op === "*"){
        result = multiply(num1,num2);
    }
    else if(op === "/"){
        result = divide(num1,num2);
    }
    console.log(result);
}

//display updating and input capturing functions
function addInput(val){
    input.push(val);
    console.log(input);
    updateDisplay();
}
function deleteLast(){
    input.pop();
    console.log(input);
    updateDisplay();
}
function clearInput(){
    input = [];
    console.log(input);
    updateDisplay();
}
function updateDisplay(){
    toDisplay = input.toString();
    toDisplay = toDisplay.replaceAll(',','');
    if(toDisplay){
        document.getElementById("display").innerText = toDisplay;
    }
    else{
        document.getElementById("display").innerText = "0";
    }
}