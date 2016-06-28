describe ('Transaction', function(){

  var account;
  var balance;
  var transaction

  beforeEach(function(){
    account = new BankAccount;
    transaction = new Transaction;
    balance = 0;
  });

  it('can change balance', function(){
    account.deposit(1000, "27/06/2016");
    expect(balance).toEqual(1000);

  });

});