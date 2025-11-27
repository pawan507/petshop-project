const items=document.getElementsByClassName("items");

//looping through each items
for(let i=0; i<items.length;i++){
    const item=items[i];

    //creating label
    const label=document.createElement("label");
    label.textContent="Quantity: ";
    label.setAttribute("for","quantity-" + i);

    //create input
    const input=document.createElement("input");
    input.type="number";
    input.id="quantity-" + i;
    input.name = 'quantity-' + i;
    input.value = 1; // default
    input.min = 1;
    input.max = 10; // optional max stock
    input.style.width="10%";

    //inserting these before add to collection list button
    const addToCollectionListButton=item.querySelector(".btn");
    item.insertBefore(label,addToCollectionListButton);
    item.insertBefore(input,addToCollectionListButton);
}