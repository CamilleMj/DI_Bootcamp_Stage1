const products = require('./products');
console.log(newProducts);

function extractProducts(productName) {
    const foundProduct = products.find((product) =>
        product.name.toLowerCase().includes(productName.toLowerCase())
    );
      
    if (foundProduct) {
        console.log(`Product found: ${foundProduct.name}`);
        console.log(`Category: ${foundProduct.category}`);
        console.log(`Price: $${foundProduct.price}`);
    } else {
        console.log(`Product not found for name: ${productName}`);
    }
}

searchProductByName("X");
searchProductByName("A");
searchProductByName("Z");
