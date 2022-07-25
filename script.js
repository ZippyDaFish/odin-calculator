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

function operate(op, num1, num2){
    let result = 0;
    if(op === 0){
        result = add(num1,num2);
    }
    else if(op === 1){
        result = subtract(num1,num2);
    }
    else if(op === 2){
        result = multiply(num1,num2);
    }
    else if(op === 3){
        result = divide(num1,num2);
    }
    console.log(result);
}