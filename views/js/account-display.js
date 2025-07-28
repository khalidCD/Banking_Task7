function showAccounts(accounts) {
  const container = document.getElementById("account-summary");
  
  for (let i = 0; i < accounts.length; i++) {
    const acc = accounts[i];
    const card = makeAccountCard(acc, i);
    container.appendChild(card);
  }
}

function makeAccountCard(acc, num) {
  const card = document.createElement("div");
  card.className = "account-box";

  const header = document.createElement("div");
  header.className = "account-header";
  header.onclick = function() {
    toggleDetails("details-" + num, this);
  };
  
  const accountType = document.createElement("strong");
  accountType.textContent = firstLetterBig(acc.account_type) + " Account";
  
  const balance = document.createElement("p");
  balance.style.color = "teal";
  balance.innerHTML = "<strong>Balance: ₹" + parseFloat(acc.balance).toFixed(2) + "</strong>";
  
  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.textContent = "▼";
  
  header.appendChild(accountType);
  header.appendChild(balance);
  header.appendChild(arrow);

  const details = document.createElement("div");
  details.id = "details-" + num;
  details.className = "account-details";
  details.style.display = "none";
  
  const accountNumber = document.createElement("p");
  accountNumber.textContent = (acc.account_type === "credit" ? "Card No" : "Account No") + ": " + acc.account_number;
  
  const name = document.createElement("p");
  name.textContent = "Name: " + acc.name;
  
  const branch = document.createElement("p");
  branch.textContent = "Branch: " + acc.branch;
  
  const ifsc = document.createElement("p");
  ifsc.textContent = "IFSC: " + acc.ifsc_code;
  
  details.appendChild(accountNumber);
  details.appendChild(name);
  details.appendChild(branch);
  details.appendChild(ifsc);
  
  if (acc.account_type === "credit") {
    const bank = document.createElement("p");
    bank.textContent = "Bank: " + acc.bank_name;
    
    const expiry = document.createElement("p");
    expiry.textContent = "Expiry: " + acc.expiry;
    
    details.appendChild(bank);
    details.appendChild(expiry);
  }
  
  const button = document.createElement("button");
  button.className = "view-button";
  button.textContent = "View Statement";
  details.appendChild(button);
  
  card.appendChild(header);
  card.appendChild(details);
  
  return card;
}