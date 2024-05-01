function addItems() {
  let newItems = document.querySelector("#new");
  let displayItems = document.querySelector("#display");

  let newItemsText = newItems.value.trim();
  if (newItemsText !== "") {
    let li = document.createElement("li");
    li.textContent = newItemsText;
    displayItems.appendChild(li);
    newItems.value = "";
  } else {
    alert("Enter item first to proceed");
  }
}