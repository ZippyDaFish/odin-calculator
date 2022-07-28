const operators = ['+','-','*','/'];
var input = [];

//basic operation functions
function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
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
    return(result);
}
//called when 'Equals' button is pressed
function calculateResult(){
    console.log("Calculating Result...");
    var numbers = [];
    var currentOps = [];
    var lastIndex = 0;
    for(var i = 0; i < input.length; i++){
        if(operators.includes(input[i])){
            //slice and convert temp to single element in numbers
            let temp = input.slice(lastIndex, i);
            temp = temp.toString();
            temp = temp.replaceAll(',','');
            numbers.push(temp);

            currentOps.push(input[i]);
            input.splice(i, 1);

            lastIndex = i;
        }
    }
    //slice and convert toMax to single element in numbers
    let toMax = input.slice(lastIndex, input.length+1);
    toMax = toMax.toString();
    toMax = toMax.replaceAll(',','');
    numbers.push(toMax);

    //loop through currentOps and send numbers in relation to j
    var calcResult = numbers[0];
    for(var j = 0; j < currentOps.length; j++){
        calcResult = operate(currentOps[j], calcResult, numbers[j+1]);
    }
    calcResult = +calcResult.toFixed(2);
    document.getElementById("result").innerText = calcResult;
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
    document.getElementById("result").innerText = "-";
}
function updateDisplay(){
    var toDisplay = input.toString();
    toDisplay = toDisplay.replaceAll(',','');
    if(toDisplay){
        document.getElementById("display").innerText = toDisplay;
    }
    else{
        document.getElementById("display").innerText = "0";
    }
}