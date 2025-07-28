async function getAccounts(user) {
  const res = await fetch(`/api/accounts/${user}`);
  if (res.status !== 200) throw new Error("Server error");
  const data = await res.json();
  const accounts = data;

  showAccounts(accounts);

  setupButtons();
}
