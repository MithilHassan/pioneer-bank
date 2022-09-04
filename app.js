// Login area
document.getElementById("login-btn").addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction-area").style.display = "block";
});

// Deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  transaction("deposit-amount", "current-deposit");
});

// Withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  transaction("withdraw-amount", "current-withdraw");
});

// Transaction
function transaction(id1, id2) {
  const newBalance = parseFloat(document.getElementById(id1).value);
  const transaction = total(id2, newBalance);
  if (id1 === "withdraw-amount") {
    const totalBalance = total("current-balance", -1 * newBalance);
    document.getElementById(id2).innerText = transaction;
    document.getElementById("current-balance").innerText = totalBalance;
  } else {
    const totalBalance = total("current-balance", newBalance);
    document.getElementById(id2).innerText = transaction;
    document.getElementById("current-balance").innerText = totalBalance;
  }
  document.getElementById(id1).value = "";
}

// Convert currentDeposit/withdraw/balance from string to number
function currentBalance(id) {
  return parseFloat(document.getElementById(id).innerText);
}

// Get total Balance
function total(id, newBalance) {
  const balance = currentBalance(id);
  const total = balance + newBalance;
  return total;
}
