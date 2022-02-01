const sha256 = require("./helper");

class Transaction {
	constructor(to, from, amount) {
		this.to = to;
		this.from = from;
		this.amount = amount;
		this.hash = sha256(Math.random());
		this.id = Transaction.getCount();
	}

	static getCount() {
		Transaction.incrementCount();
		return Transaction.count;
	}

	static incrementCount() {
		Transaction.count++;
	}

	toString() {
		return `
        to:${this.to}
        from:${this.from}
        amount:${this.amount}
        hash:${this.hash}
        id:${this.id}`;
	}
}

Transaction.count = 0;

module.exports = Transaction;