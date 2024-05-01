function addNewItemToList() {
    const newItemInput = document.querySelector('#new_items'); 
    const itemList = document.querySelector('#display_items');
    const newItemText = newItemInput.value.trim();
  
    
    if (!newItemText) {
      alert('Whoops! Please enter an item to add to the list.');  
      newItemInput.focus();  
      return;  
    }
  
    
    const newListItem = document.createElement('li');
    newListItem.textContent = newItemText;
  
   
    itemList.appendChild(newListItem);
  
    
    newItemInput.value = '';
  }
  