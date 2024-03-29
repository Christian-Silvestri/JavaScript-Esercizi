

//creare una classe `NegativeAmountError` che estende la classe `Error` se viene fornito un importo negativo
//creare una classe `WithdrawNotPermittedError` che estende la classe `Error` se amount è maggiore di deposit

class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NegativeAmountError';
    }
}


class WithdrawNotPermittedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'WithdrawNotPermittedError';
    }
}


class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError('The amount requested cannot be withdrawn'); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}