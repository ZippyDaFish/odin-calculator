const operators = ['+','-','*','/'];
var input = [];

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
//called when 'Equals' button is pressed
function calculateResult(){
    console.log("Calculating Result...");
    tempInput = input;
}

//display updating and input capturing functions
function addInput(val){
    //for if user tries to input an operator after an operator
    if(operators.includes(val)){
        if(operators.includes(input.at(-1))){
            return;
        }
        else if(input.at(-1) === '.'){
            return;
        }
        else if(input.length <= 0){
            return;
        }
    }
    //necessary checks for decimal point inputs
    if(val === '.'){
        if(input.includes('.')){
            //checks if a '.' or an operator is most recent
            for(var i = input.length-1; i >= 0; i--){
                if(input[i] == '.'){
                    return;
                }
                else if(operators.includes(input[i])){
                    break;
                }
            }
        }
        if(operators.includes(input.at(-1)) || input.length <= 0){
            input.push(0);
        }
    }
    //if all checks pass update input and display
    input.push(val);
    updateDisplay();
}
//called on Del button
function deleteLast(){
    input.pop();
    updateDisplay();
}
//called on clear button
function clearInput(){
    input = [];
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