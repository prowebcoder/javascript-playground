const products = [
  { name: "Product 1", size: "small", color: "red", price: "low" },
  { name: "Product 2", size: "medium", color: "blue", price: "medium" },
  { name: "Product 3", size: "large", color: "green", price: "high" },
  // Add more products as needed
];

const productGrid = document.getElementById("productGrid");
const sizeFilter = document.getElementById("sizeFilter");
const colorFilter = document.getElementById("colorFilter");
const priceFilter = document.getElementById("priceFilter");

// Initial rendering of products
renderProducts(products);

// Event listeners for filters
sizeFilter.addEventListener("change", filterProducts);
colorFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

function renderProducts(productsToRender) {
  productGrid.innerHTML = "";
  productsToRender.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.textContent = product.name;
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
