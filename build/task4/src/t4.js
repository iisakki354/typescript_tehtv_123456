// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    const brand = String(prompt("Enter brand")) /* TODO: Get user input for brand */;
    const model = String(prompt("Enter model")) /* TODO: Get user input for model */;
    // TODO: return object containing brand and model
    return { brand, model };
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    const title = String(prompt("Enter title")) /* TODO: Get user input for title */;
    const author = String(prompt("Enter author")) /* TODO: Get user input for author */;
    // TODO: return object containing title and author
    return { title, author };
}
// Create instances of 'Product'
const electronicProduct = { type: 'electronic', ...createElectronicDevice() };
const bookProduct = { type: 'book', ...createBook() };
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
export {};
