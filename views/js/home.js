window.onload = async function () {
  const user = localStorage.getItem("cam");

  if (!user) {
    alert("Please login first");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("greeting").textContent = `Greeting ${user}!`;

  setupTabs();
  try {
    await getAccounts(user);
  } catch (err) {
    console.error("Error:", err);
    alert("Could not load accounts");
  }

  setupSendButton();
};