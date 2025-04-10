class BankAccount {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    getBalance() {
        return this.#balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log(`Error`);
            return;
        }
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log(`Error`);
            return;
        }
        if (amount < this.#balance) {
            console.log(`Insufficient funds on balance`);
        }
        this.#balance -= amount;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());