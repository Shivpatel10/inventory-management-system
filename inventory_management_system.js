// Task 1: Create an Inventory Array of Product Objects

    // creating an Array with each product and their variables.
const inventory = [
{ name:"mouse",    price: 15, quantity: 62, lowStockLevel: 5},
{ name:"charger",  price: 20, quantity: 10, lowStockLevel: 20},
{ name:"cpu",      price: 30, quantity: 36, lowStockLevel: 5},
{ name:"gpu",      price: 40, quantity: 33, lowStockLevel: 5},
{ name:"Keyboard", price: 50, quantity: 99, lowStockLevel: 5}
];

// Task 2: Create a Function to Display Product Details
   
function displayProductDetails(inventory) {
const stockStatus = inventory.quantity <= inventory.lowStockLevel ? "Low Stock" : "In Stock"
    return `${inventory.name} is ${stockStatus}`
}
    // console log group that will output the final result.
    console.log(`Product Name: ${inventory[0].name}`);
    console.log(`Product Price: ${inventory[0].price}`);
    console.log(`Quantity of Stock: ${(inventory[0].quantity)}`);
    console.log(displayProductDetails(inventory[0])); 


// Task 3: Create a Function to Update Product Stock After Sales

function updateStock(inventory) {
    let unitsSold = 15;
    let stockLeft = inventory[0].quantity - unitsSold; // subtracts the first object in the inventory array by unitsSold
      if (stockLeft === 0 || inventory[0].quantity < unitsSold)
            return (` ${inventory[0].name} is out of Stock`);
      else if (stockLeft <= inventory[0].lowStockLevel)
            return (` ${inventory[0].name} is low Stock`);
        else
            return (`${inventory[0].name} pruchase went through`);
};
console.log(updateStock(inventory));


// Task 4: Create a Function to Check Low Stock Products

function checkLowStock(inventory) {
    inventory.forEach(inventoryProduct => {
        if (inventoryProduct.quantity <= inventoryProduct.lowStockInventory) 
            return (`${inventoryProduct.name} is Low Stock`);
        });
};
console.log(checkLowStock(inventory));


// Task 5: Create a Function to Calculate Total Inventory Value

function calculateInventoryValue() {
        return inventory.reduce((totalProductsValue, product) => { 
            return totalProductsValue + (product.price * product.quantity , 0);
        });
    };
    console.log(`Total Inventory Value is $${calculateInventoryValue(inventory)}`);


// Task 6: Create a Function to Process a Sale

function processSale(name) {
    const item = inventory.find(item => item.name === name);
        return updateStock(inventory)
            return item ? item.name: 'Skater not found';
};