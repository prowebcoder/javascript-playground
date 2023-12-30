// Declare the products array globally
const products = [
    {
        "id": 1,
        "title": "Product 1",
        "description": "Description for Product 1.",
        "categories": ["Category A"],
        "tags": ["Tag 1", "Tag 2"],
        "price": 19.99
    },
    {
        "id": 2,
        "title": "Product 2",
        "description": "Description for Product 2.",
        "categories": ["Category B"],
        "tags": ["Tag 3", "Tag 4"],
        "price": 29.99
    },
    {
        "id": 3,
        "title": "Product 3",
        "description": "Description for Product 3.",
        "categories": ["Category B"],
        "tags": ["Tag 3", "Tag 4"],
        "price": 29.99
    },
    {
        "id": 4,
        "title": "Product 4",
        "description": "Description for Product 4.",
        "categories": ["Category B"],
        "tags": ["Tag 3", "Tag 4"],
        "price": 29.99
    }
];
// Declare the showQuickView function in the global scope
function showQuickView(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    // Display complete product information in a modal
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');

    // Populate modal content
    const modalContent = `
        <h2>${selectedProduct.title}</h2>
        <p>Description: ${selectedProduct.description}</p>
        <p>Categories: ${selectedProduct.categories.join(', ')}</p>
        <p>Tags: ${selectedProduct.tags.join(', ')}</p>
        <p>Price: $${selectedProduct.price.toFixed(2)}</p>
    `;

    modal.innerHTML = modalContent;

    // Show modal and overlay
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    displayProducts(products);

    function displayProducts(products) {
        const productListContainer = document.getElementById('product-list');

        // Loop through products and create HTML elements
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Display basic product info (title and price)
            productCard.innerHTML = `
                <h2>${product.title}</h2>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="quick-view-btn" onclick="showQuickView(${product.id})">Quick View</button>
            `;

            productListContainer.appendChild(productCard);
        });
    }

    // Close the modal when clicking outside the content
    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', function () {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });
});