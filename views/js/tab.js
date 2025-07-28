function setupTabs() {
  const tab1 = document.getElementById("summaryTab");
  const tab2 = document.getElementById("transferTab");
  const content1 = document.getElementById("summary");
  const content2 = document.getElementById("transfer");

  showTab(tab1, tab2, content1, content2);

  tab1.addEventListener("click", () => {
    showTab(tab1, tab2, content1, content2);
  });

  tab2.addEventListener("click", () => {
    showTab(tab2, tab1, content2, content1);
  });
}

function showTab(selectedTab, otherTab, selectedContent, otherContent) {
  selectedTab.classList.add("active-tab");
  otherTab.classList.remove("active-tab");
  selectedContent.style.display = "block";
  otherContent.style.display = "none";
}
//here is  my tab fucntions occure like css effect in my tabs