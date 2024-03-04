let firstNumber = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი"))
let mathOperation = prompt("შეიყვანეთ შემდეგი მათემატიკური ოპერაციებიდან ერთ-ერთი: + - * /")
let secondNumber = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი"))
let result


switch (mathOperation){
    case "+":
        result = firstNumber + secondNumber;
        break;
    case "-":
        result = firstNumber - secondNumber;
        break;
    case "*":
        result = firstNumber * secondNumber;
        break;   
    case "/":
        result = firstNumber / secondNumber;
        break;
}

if( (isNaN(result)) || (mathOperation == "/" && secondNumber == "0")){
    document.getElementById("demo").innerHTML = `შეცდომაა. ცადეთ ახლიდან.`
}else{
    document.getElementById("demo").innerHTML = `${firstNumber} ${mathOperation} ${secondNumber} = ${result}`

}



