const itemInput = document.querySelector('#item');
const shoppingList = document.querySelector('#list');
const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', storeListItem);

function storeListItem(){
    let listItemText = itemInput.value;
    itemInput.value = '';
    if(listItemText != ''){
        let newListItem = document.createElement('li');
        let newSpan = document.createElement('span');
        let newButton = document.createElement('button');

        newSpan.textContent = listItemText;
        newButton.textContent = 'delete Item';
        newButton.addEventListener('click', function (e) {
            e.target.parentElement.remove();
            itemInput.focus();
        })

        newListItem.appendChild(newSpan);
        newListItem.appendChild(newButton);
        shoppingList.appendChild(newListItem);

        itemInput.focus();
    }
}