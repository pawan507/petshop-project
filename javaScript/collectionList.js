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

//now adding images for every product  inside the accessories-section
//for this we create an array which stores images link and assign these links to every items 

const imageArray=[
    "../product-photos/tooth-cleaner.jpeg",
    "../product-photos/toe-cleaner.jpeg",
    "../product-photos/bone.jpeg",
    "../product-photos/vitamin.jpeg",
    "../product-photos/kette.jpeg",
    "../product-photos/cat-jacket.jpeg",
    "../product-photos/dog-futter.jpeg",
    "../product-photos/cat-futter.jpeg",
    "../product-photos/cat-shoes.jpeg"
];

for (let i=0; i<items.length; i++){
    const item=items[i]; //inside items array we have all the items listed in the product list
    let img=item.querySelector("img");
    img.src=imageArray[i]; ///setting the source for image
    img.style.width="100%";
    img.style.height="100%";
    
}

//function to add the product to the product list
function addProduct(productName, productPrice, imageSource, totalQuantity){
    //lets create the image section first and insert the image from provided source
    const img=document.createElement("img");
    img.src=imageSource;
    img.style.width="100%";
    img.style.height="100%";
    img.alt="image of " + productName;

    //lets create the label for product name and price
    const productLabel=document.createElement("p");
    productLabel.textContent="Product name: " + productName;
   
    const priceLabel=document.createElement("p");
    priceLabel.textContent="price: " + productPrice + " Euro";

    const quantityLabel=document.createElement("label");
    quantityLabel.textContent="Quantity:";
    quantityLabel.setAttribute("for",productName);

    //creating input field to set available input items
    const quantityInput=document.createElement("input");
    quantityInput.type="number";
    quantityInput.name=productName;
    quantityInput.id=productName;
    quantityInput.value=1; //default value
    quantityInput.min=1;
    quantityInput.max=totalQuantity;
    quantityInput.style.width="10%";

    //adding two buttons : add to collection list and add to cart
    const addToCollectionListButton=document.createElement("button");
    const addToCartButton=document.createElement("button");

    //giving both of these button the class "btn" which already has css styles
    addToCollectionListButton.classList.add("btn");
    addToCartButton.classList.add("btn");
    addToCollectionListButton.textContent="Add to collection List";
    addToCartButton.textContent="Add to Cart";

    //now lets create one div and then put these all data into that div
    const itemDiv=document.createElement("div");
    itemDiv.classList.add("items");

    itemDiv.appendChild(img);
    itemDiv.appendChild(productLabel);
    itemDiv.appendChild(priceLabel);
    itemDiv.appendChild(quantityLabel);
    itemDiv.appendChild(quantityInput);
    itemDiv.appendChild(addToCollectionListButton);
    itemDiv.appendChild(addToCartButton);
 
    //now appending this div to accessories-section
    document.getElementById("accessories-section").appendChild(itemDiv);
}


//Test case for the function//
addProduct("sunglass",120.12,"../product-photos/sample.jpeg",20);
addProduct("sunglass",120.12,"../product-photos/sample2.jpeg",20);
addProduct("sunglass",120.12,"../product-photos/sample2.jpeg",20);