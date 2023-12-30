let products; // Declare products globally

const productGrid = document.getElementById("productGrid");
const sizeFilter = document.getElementById("sizeFilter");
const colorFilter = document.getElementById("colorFilter");
const priceFilter = document.getElementById("priceFilter");

// Load products from JSON file
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data; // Assign loaded products to the global variable
    // Initial rendering of products
    renderProducts(products);

    // Event listeners for filters
    sizeFilter.addEventListener("change", filterProducts);
    colorFilter.addEventListener("change", filterProducts);
    priceFilter.addEventListener("change", filterProducts);
  })
  .catch((error) => console.error("Error loading products:", error));

function renderProducts(productsToRender) {
  productGrid.innerHTML = "";
  productsToRender.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    // Create an image element and set the source
    const productImage = document.createElement("img");
    productImage.src = product.imageSrc;
    productImage.alt = product.name;
    productItem.appendChild(productImage);

    // Create a div for product details
    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    // Display product details
    const productName = document.createElement("p");
    productName.textContent = "Name: " + product.name;

    const productSize = document.createElement("p");
    productSize.textContent = "Size: " + product.size;

    const productColor = document.createElement("p");
    productColor.textContent = "Color: " + product.color;

    const productPrice = document.createElement("p");
    productPrice.textContent = "Price: " + product.price;

    // Append details to the productDetails div
    productDetails.appendChild(productName);
    productDetails.appendChild(productSize);
    productDetails.appendChild(productColor);
    productDetails.appendChild(productPrice);

    // Append the productDetails div to the productItem
    productItem.appendChild(productDetails);

    // Append the productItem to the productGrid
    productGrid.appendChild(productItem);
  });
}

function filterProducts() {
  const filteredProducts = products.filter(
    (product) =>
      (sizeFilter.value === "all" || product.size === sizeFilter.value) &&
      (colorFilter.value === "all" || product.color === colorFilter.value) &&
      (priceFilter.value === "all" || product.price === priceFilter.value)
  );

  renderProducts(filteredProducts);
}
