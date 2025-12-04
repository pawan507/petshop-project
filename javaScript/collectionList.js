/**
 * 
 * 
 * this first script is for assigning the Quantity label to the available product
 * where user can choose how many article they want to add to the shopping list or collection list
 * 
 * 
 */
const items=document.getElementsByClassName("items"); //list of all available individual items
const accessoriesSection=document.getElementById("accessories-section");  //it represent the section where we have all of the items

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



/**
 *in this section we are adding images for every product  inside the accessories-section
for this we create an array which stores images link and assign these links to every items
 * 
 * 
 */
 

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



/***********************************************************/
 /*                 (function documentation)                */
 /* *********************************************************/
 /*                                                          */
 /* function name: addProduct                                */
 /* parameters: 
                productName(String)
                productPrice(float)
                imageSource(string)
                totalQuantity(Integer)
    Discription:
                This function is basically used for adding 
                the items to the accessories-section. 
                in accessories-section, there are many articles
                that are connected to the pets which user
                can buy during pet adoption


 */            
 /*                                                         */
 /************************************************************/

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

//for adding product
//first we gather all info from user input then acordingly we add product
const addProductButton = document.getElementById("addProduct");


if(addProductButton){
	addProductButton.addEventListener("click", (event) => {
        event.preventDefault(); // stop form from submitting
        const productName=document.querySelector("input[name='product-name']");
        const productPrice=document.querySelector("input[name='price']");
        const productQuantity=document.querySelector("input[name='available-quantity']");
        const file=document.querySelector("input[name='image-source']");

        let name=productName.value;
        let price=parseFloat(parseFloat(productPrice.value).toFixed(2));
        let quantity=(parseInt(productQuantity.value));
        let imgSrc=URL.createObjectURL(file.files[0]);
    
        //now adding product using function addProduct
        addProduct(name,price,imgSrc,quantity);

	});

}
//Test case for the function//
addProduct("sunglass",120.12,"../product-photos/sample.jpeg",20);
addProduct("sunglass",120.12,"../product-photos/sample2.jpeg",20);
addProduct("sunglass",120.12,"../product-photos/sample2.jpeg",20);
addProduct("kette",130.12,"../product-photos/kette.jpeg",3);
addProduct("sunglass",130.12,"../product-photos/sample.jpeg",10);



/***********************************************************/
 /*        collection List in product section               */
 /* *********************************************************/
 /*                                                          */
 /*
    Discription:
                here we are creating the collection table.
                every product are provided with 'add to 
                collection' button..
                when user clicks on it, then the item will
                be displayed in a table which is located
                just below the accessories-section.
                this table has three table headers:
                product name, quantity and price. Also the 
                Table footer has two label:
                               total price without tax 
                                       and
                               total price with 19% tax             
 */            
 /*                                                         */
 /************************************************************/


//writing the event listner on the whole accessoriesSection for the add to collection list button

let tableExists=false;
accessoriesSection.addEventListener("click",function(event){
    if(event.target.textContent.toLowerCase().includes("add to collection list")){ //checking if it actually is "add to collection list button"
        const item=event.target.closest(".items"); // we select the item where event has occured

        //from this item we extract the product name, price and quantity which we need later for our collection list table
        const nameLabel=item.querySelector("p"); //first label is always the name in our case 
        const productName=nameLabel.textContent.replace("Product name:","").trim();

        //const priceLabel=nameLabel.nextElementSibling.textContent;
        const priceLabel=item.querySelectorAll('p')[1].textContent;
        const price=parseFloat(priceLabel.replace("price:","").replace("Euro","").trim());

        const quantityInput=item.querySelector("input[type='number']");
        const quantity=parseInt(quantityInput.value);

        //so we already extracted everything that is needed for our collection table
        //if there is already the table(it means if it is not the first item we are adding),
        //we dont create the table.. otherwise we need to create it.

        if(!tableExists){
            createCollectionTable();
            tableExists=true;
        }

        //now we need to add the row to the table
        addRowToTable(productName,quantity,price);

    }
});

//defining the two required functions now. [createCollectionTable() and addRowToTable()]
function createCollectionTable(){
    const section=document.createElement("section"); //we will place the table later in this section
    section.classList.add("collection-section");

    const h2=document.createElement("h2");
    h2.textContent="collection of your selected items";

    const table=document.createElement("table");
    table.id="collection-table";

    const thead=document.createElement("thead");
    const row=document.createElement("tr");

    //now we create three table headers called product, quantity and price and appemd it to table row
    let  tableHeaders=["Product Name", "Quantity", "Price(in Euro)"];
    for(let i=0;i<3;i++){
        const th=document.createElement("th");
        th.textContent=tableHeaders[i];
        row.appendChild(th);
    }

    //now we append the row to the table header (thead) section and append the thead to table
    thead.appendChild(row);
    table.appendChild(thead);
    table.appendChild(document.createElement("tbody")); //table has body section also, so we need to append it

    //creating footer section in table which help is to summerize total price with and without tax
    const tfoot=document.createElement("tfoot");

    const totalRow1=document.createElement("tr"); //creating the row for "total without tax"
    const tdLabel1=document.createElement("td");  //this is label which is total price without tax
    tdLabel1.textContent="Total price before tax";
    tdLabel1.colSpan=2; //takes two coloumn

    const totalRow2=document.createElement("tr"); // total with tax
    const tdLabel2=document.createElement("td");
    tdLabel2.textContent="Total price after 19% tax";
    tdLabel2.colSpan=2;

    //for  total price data
    const tdTotal1=document.createElement("td");
    tdTotal1.id="total-price1"; //this is price without tax
    tdTotal1.textContent="0.00";

    const tdTotal2=document.createElement("td");
    tdTotal2.id="total-price2"; //this is price with 19% tax
    tdTotal2.textContent="0.00";
 
    //now appending all these labels and data of total price to respective footer rows
    totalRow1.appendChild(tdLabel1);
    totalRow1.appendChild(tdTotal1);
    totalRow2.appendChild(tdLabel2);
    totalRow2.appendChild(tdTotal2);

    //appending the rows to footer
    tfoot.appendChild(totalRow1);
    tfoot.appendChild(totalRow2);

    //appending footer to table
    table.appendChild(tfoot);


    //now add the table to the respective section of our main html page i.e represented by our class table-section
    section.appendChild(h2);
    section.appendChild(table);

    //append this table section as last child in our main section
    document.querySelector("main").appendChild(section);

}

//function for adding the row to the table.
//Note: one row represent one artical in our case

function addRowToTable(product,quantity,price){
    const tbody=document.querySelector("#collection-table tbody");
    const tr=document.createElement("tr"); //every thing is already created so we just create row

    const tdName=document.createElement("td"); //table data => name
    tdName.textContent=product;

    const tdQuantity=document.createElement("td");
    tdQuantity.textContent=quantity;

    const tdPrice=document.createElement("td");
    const calculatedPrice=(price * quantity).toFixed(2); //take upto last two digits after decimal
    tdPrice.textContent=calculatedPrice;

    //now we need to append these individual cell items into the row
    tr.appendChild(tdName);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdPrice);

    //now appending the row into the table body
    tbody.appendChild(tr);

    //updating the total price every time new item is added to the collection table
    const totalTd1=document.getElementById("total-price1");
    const currentTotal1=parseFloat(totalTd1.textContent);
    totalTd1.textContent=(currentTotal1 + parseFloat(calculatedPrice)).toFixed(2);

    const totalTd2=document.getElementById("total-price2"); //price including 19% tax
    totalTd2.textContent=(parseFloat(totalTd1.textContent) * 1.19).toFixed(2);
}