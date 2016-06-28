function BankAccount(){

  var balance = 0;


  BankAccount.prototype.statement = function() {
    console.log(balance);
  };




};