/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var sumOfDeposits = 0;
  var sumOfWithdrawals = 0;
  for (var tIndex = 0; tIndex < this.transactions.length; tIndex++) {
    if (this.transactions[tIndex].type === 'deposit') {
      sumOfDeposits += this.transactions[tIndex].amount;
    } else if (this.transactions[tIndex].type === 'withdrawal') {
      sumOfWithdrawals += this.transactions[tIndex].amount;
    }
  }
  return sumOfDeposits - sumOfWithdrawals;
};
