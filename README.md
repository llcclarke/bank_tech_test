# The Bank Tech Test

>When in doubt, go for the simplest solution

### Requirements
* Deposits, withdrawal
* Account statement (date, amount, balance)
* Statement printing

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see  


```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Additional extensions

* Statement filters (just deposits, withdrawals, date ascending, date descending)
* Graphical interface
* 
### User Stories
```
As a client
So that I can see how much money I have
I want to print my bank statement

As a client
So that I can spend money
I want to be able to debit my account

As a client
So that I can spend more money
I want to be able to make deposits

As a client
So I can remember when money goes in/out 
I want to be able to see when deposits and credits occurred

As a client
So I can see how I recieve my money
I want to be able to only see my deposits

As a client
So I can see how I spend my money
I want to be able to see only my withdrawals

As a client 
So I can see what I have spent lately 
I want to be able to see my statement in descending order

As a client 
So I can see what I spent when I opened my account
I want to be able to see my statement in ascending order

As a client
So I can have something nice to look at
I want to have a graphical interface
```

