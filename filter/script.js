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
    renderProducts(getFilteredProducts());
    updateFiltersFromQueryParams();
    // Event listeners for filters
    sizeFilter.addEventListener("change", updateURLParamsAndFilter);
    colorFilter.addEventListener("change", updateURLParamsAndFilter);
    priceFilter.addEventListener("change", updateURLParamsAndFilter);
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
    productImage.style.width = "100%";
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

function updateFiltersFromQueryParams() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  sizeFilter.value = urlSearchParams.get("size") || "all";
  colorFilter.value = urlSearchParams.get("color") || "all";
  priceFilter.value = urlSearchParams.get("price") || "all";
}

function updateURLParamsAndFilter() {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set("size", sizeFilter.value);
  urlSearchParams.set("color", colorFilter.value);
  urlSearchParams.set("price", priceFilter.value);

  const newURL = window.location.pathname + "?" + urlSearchParams.toString();
  history.pushState(null, "", newURL);

  renderProducts(getFilteredProducts());
}

function getFilteredProducts() {
  const sizeParam = sizeFilter.value;
  const colorParam = colorFilter.value;
  const priceParam = priceFilter.value;

  return products.filter(
    (product) =>
      (sizeParam === "all" || product.size === sizeParam) &&
      (colorParam === "all" || product.color === colorParam) &&
      (priceParam === "all" || product.price === priceParam)
  );
}
