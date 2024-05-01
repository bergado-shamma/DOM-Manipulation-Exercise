
function addItems() {
    let newItems = document.querySelector("#new_items");
    let displayItems = document.querySelector("#display_items");
  
    let newItemsText = newItems.value.trim();
    if (newItemsText !== "") {
      let li = document.createElement("li");
      li.textContent = newItemsText;
      displayItems.appendChild(li);
      newItems.value = "";
    } else {
      alert("Enter an item to proceed");
    }
  }
  