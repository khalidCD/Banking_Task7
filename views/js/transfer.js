function setupSendButton() {
  const btn = document.getElementById("sendButton");
  const moneyInput = document.getElementById("amountInput");
  const accSelect = document.getElementById("accountselect");
  const benSelect = document.getElementById("beneficiaryselect");
  const msgBox = document.getElementById("transferMessage");

  btn.addEventListener("click", () => {
    const money = moneyInput.value;
    const fromAcc = accSelect.value;
    const toAcc = benSelect.value;

    if (!money || isNaN(money) || !fromAcc || !toAcc) {
      alert("Please check amount and account and beneficiary");
      return;
    }
    showMsg(msgBox, money, fromAcc, toAcc);
    clearForm(moneyInput, accSelect, benSelect);
  });
}

function showMsg(box, money, acc, to) {
  box.textContent = `Sent ₹${money} from ${acc} to ${to}`;
  box.style.display = "block";
  setTimeout(() => (box.style.display = "none"), 5000);
}

function clearForm(input, accSelect, benSelect) {
  input.value = "";
  accSelect.value = "";
  benSelect.value = "";
}


// this is fully for my transfer section 