import BankAccount from "./bankaccount";

const myAccount = new BankAccount(000001,"Emmanuel");


function depositMoney(){

    const amount = parseInt(document.getElementById("money").value)
    if (amount > 0){
        myAccount.deposit(amount)
        console.log(`Current balance: $${myAccount.balance}`)
    }
    else{console.log("invalid command")}
}

function withdrawMoney(){
    const amount = parseInt(document.getElementById("moneyy").value)

    if(amount > 0){
        myAccount.withdraw(amount)
        console.log(`current balance :$${myAccount.balance}`)
    }
    else{
        console.log(`Insufficient Balance`)
    
    }
}

function checkMoney(){
    console.log(`Current Balance : $${myAccount.balance}`)
}

const accountHolder = document.getElementsByTagName("h1")[0]
accountHolder.innerHTML = `Heloo ${myAccount.accountHolder} !`;
