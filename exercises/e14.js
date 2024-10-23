
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const accountsWithWrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    let account = array[i];
    let totalDeposits = 0;
    let totalWithdrawals = 0;

    const deposits = account.deposits || [];
    const withdrawals = account.withdrawals || [];

    for (let j = 0; j < deposits.length; j++) {
      totalDeposits += deposits[j];
    }

    for (let k = 0; k < withdrawals.length; k++) {
      totalWithdrawals += withdrawals[k];
    }

    const expectedBalance = totalDeposits - totalWithdrawals;

    if (account.balance  !== expectedBalance) {
      accountsWithWrongBalance.push(account);
    }
  }

  return accountsWithWrongBalance;
  }


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
