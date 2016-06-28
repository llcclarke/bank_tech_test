describe("BankAccount", function() {
  var account;
  var balance;

  beforeEach(function() {
    account = new BankAccount();
    this.balance = 0;
  });


  it("should start with a 0 balance", function(){
    expect(this.balance).toEqual(0);
  });

  it('should return a bank statement', function(){
    expect(account.statement()).toEqual(balance);
  });


  // it("should be able to play a Song", function() {
  // //   player.play(song);
  // //   expect(player.currentlyPlayingSong).toEqual(song);

  // //   //demonstrates use of custom matcher
  // //   expect(player).toBePlaying(song);
  // });



});
