function setupButtons() {
  document.querySelectorAll(".view-button").forEach((btn) => {
    btn.addEventListener("click", openPopup);
  });
  document.querySelector(".close-button").addEventListener("click", closePopup);

  document.getElementById("statement-modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closePopup();
  });
// here is a logout function
  document.getElementById("logout-button").addEventListener("click", () => {
    localStorage.removeItem("cam");
    window.location.href = "index.html";
  });
}

function openPopup() {
  const popup = document.getElementById("statement-modal");
  if (popup) popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("statement-modal");
  if (popup) popup.style.display = "none";
}