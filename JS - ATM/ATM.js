let userNamesList = ["გიორგი", "სალომე", "ლანა"]
let userBalances = [135.53 , 29.2, 371.89]

let userName = []
let moneyIn = []
let moneyOut = []

let userInputName
let userInputMoneyIn
let userInputMoneyOut

let result = "-"

function btn1(){
    let userName = []
    let userInputName = prompt("შეიყვანეთ მომხმარებლის სახლი (გიორგი, სალომე, ლანა)")
    userName.push(userInputName)

    console.log(userName)

    // სახელის მოძებნა ბაზაში, მერამდენეა:
    console.log(userNamesList.indexOf(`${userName}`))
    // შესაბამისი თანხის მოძებნა ბალანსის ბაზაში:
    console.log(userBalances[userNamesList.indexOf(`${userName}`)])

    result = userBalances[userNamesList.indexOf(`${userName}`)].toFixed(2)
    console.log(result)
    document.getElementById("demo").innerHTML = `ბალანსი: ${result} ₾`
    document.getElementById("demo2").innerHTML = ``
}

function btn2(){
    let userName = []
    let userInputName = prompt("შეიყვანეთ მომხმარებლის სახლი (გიორგი, სალომე, ლანა)")
    userName.push(userInputName)
    console.log(userName)


    let moneyIn = []
    let userInputMoneyIn = prompt("შეიყვანეთ შესატანი თანხის ოდენობა")
    moneyIn.push(Math.floor(userInputMoneyIn))
    console.log(moneyIn)

    userBalances[userNamesList.indexOf(`${userName}`)] += parseFloat(moneyIn)



    if(moneyIn>0 && userNamesList.includes(userInputName)){
        result = userBalances[userNamesList.indexOf(`${userName}`)].toFixed(2)
        console.log(result)
        document.getElementById("demo").innerHTML = `ბალანსი: ${result} ₾`
        document.getElementById("demo2").innerHTML = `თანხის შეტანა: ${moneyIn} ₾`
    } else {
        document.getElementById("demo").innerHTML = `შეცდომაა`
        document.getElementById("demo2").innerHTML = ``
    }
}

function btn3(){
    let userName = []
    let userInputName = prompt("შეიყვანეთ მომხმარებლის სახლი (გიორგი, სალომე, ლანა)")
    userName.push(userInputName)
    console.log(userName)

    let moneyOut = []
    let userInputMoneyOut = prompt("შეიყვანეთ გასატანი თანხის ოდენობა")
    moneyOut.push(Math.floor(userInputMoneyOut))
    console.log(moneyOut)



    if(userNamesList.includes(userInputName) && !isNaN(moneyOut)){
        if(userBalances[userNamesList.indexOf(`${userName}`)] >= moneyOut){
            userBalances[userNamesList.indexOf(`${userName}`)] -= parseFloat(moneyOut)
            console.log(userBalances[userNamesList.indexOf(`${userName}`)])
            console.log(moneyOut)

            
                if(moneyOut>=0){
                    result = userBalances[userNamesList.indexOf(`${userName}`)].toFixed(2)
                    console.log(result)
                    document.getElementById("demo").innerHTML = `ბალანსი: ${result} ₾`
                    document.getElementById("demo2").innerHTML = `თანხის გატანა: ${moneyOut} ₾`
                } else {
                    document.getElementById("demo").innerHTML = `შეცდომაა`
                    document.getElementById("demo2").innerHTML = ``
                }
        }else{
            document.getElementById("demo2").innerHTML = `ანგარიშზე არასაკმარისი თანხაა`
        }
    }else{
        document.getElementById("demo").innerHTML = `შეცდომაა`
        document.getElementById("demo2").innerHTML = ``
    } 
}