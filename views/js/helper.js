function firstLetterBig(word) {
  const firstChar = word[0].toUpperCase();
  const restOfWord = word.slice(1);
  return firstChar + restOfWord;
}

function toggleDetails(boxId, header) {
  const box = document.getElementById(boxId);
  const arrow = header.querySelector(".arrow");

  if (box && arrow) {
    const isOpen = box.style.display === "block";
    box.style.display = isOpen ? "none" : "block";
    arrow.textContent = isOpen ? "▼" : "▲";
  }
}
// here convert the firstletter fo the word into capital