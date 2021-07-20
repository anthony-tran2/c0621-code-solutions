/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var accountsIndex = 0; accountsIndex < this.accounts.length; accountsIndex++) {
    if (this.accounts[accountsIndex].number === number) {
      return this.accounts[accountsIndex];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var accountsIndex = 0; accountsIndex < this.accounts.length; accountsIndex++) {
    totalAssets += this.accounts[accountsIndex].getBalance();
  }
  return totalAssets;
};
