class BankAccount {
    constructor(accountNumber,accountHolder,balance=0){
        this.accountNumber = accountNumber,
        this.accountHolder = accountHolder,
        this.balance = balance
    }

    deposit(amount){
        this.balance += amount;
        console.log(`An amount of $${amount} has been deposited succesfully` );
    }

    withdraw(amount){
        if(this.balance >= amount){
        this.balance-=amount
        console.log(`An amount of $${amount} has been withdrawn`)

        }

        else{
            console.log(`Insufficient Funds`);
        };
    }

    checkBalance(amount){
        console.log(`Current Balance : $${balance}`);
    }
    
}
export default BankAccount