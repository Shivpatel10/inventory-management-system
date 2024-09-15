// Task 1: Create an Inventory Array of Product Objects

    // Creating an Array with each product and their variables.
let inventory = [
{ name:"mouse",    price: 15, quantity: 4, lowStockLevel: 5},
{ name:"charger",  price: 20, quantity: 42, lowStockLevel: 5},
{ name:"cpu",      price: 30, quantity: 36, lowStockLevel: 5},
{ name:"gpu",      price: 40, quantity: 32, lowStockLevel: 5},
{ name:"Keyboard", price: 50, quantity: 96, lowStockLevel: 5}
];


// Task 2: Create a Function to Display Product Details
   
function displayProductDetails(inventory) {
//const product = inventory.quantity <= inventory.lowStockLevel;  // used the find function to recall these elements from inventory array
//let stockStatus = product.quantity >= product.lowStockLevel ? "In Stock" : "Low Stock"; //function that will check if the products stockStatus is In Stock or LowStock
const stockStatus = inventory.quantity <= inventory.lowStockLevel ? "Low Stock" : "In Stock"
    return `${inventory.name} is ${stockStatus}`
}
    console.log(`Product Name: ${inventory[0].name}`);
    console.log(`Product Price: ${inventory[0].price}`);
    console.log(`Quantity of Stock: ${(inventory[0].quantity)}`);
    console.log(displayProductDetails(inventory[0])); // console log that will output the final result.
