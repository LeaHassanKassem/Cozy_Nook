document.addEventListener("DOMContentLoaded", function () {
    let cartCount = localStorage.getItem("cartCount") || 0;
    updateCartCount(cartCount);

    const categorySelect = document.getElementById("category-select");
    const categories = document.querySelectorAll(".gallery-category");

    categorySelect.addEventListener("change", function () {
        const selectedCategory = this.value;

        categories.forEach(category => {
            if (category.id === selectedCategory) {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }
        });
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            let itemName = this.getAttribute("data-name");
            let itemPrice = parseFloat(this.getAttribute("data-price"));

            addToCart(itemName, itemPrice);
        });
    });
});

function updateCartCount(count) {
    const cartBadge = document.querySelector(".cart-count");
    cartBadge.textContent = count;
}

function addToCart(itemName, itemPrice) {
    let cartCount = localStorage.getItem("cartCount") || 0;
    cartCount = parseInt(cartCount) + 1;
    localStorage.setItem("cartCount", cartCount);
    updateCartCount(cartCount);
}
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalAddToCart = document.getElementById('modalAddToCart');
    const closeBtn = modal.querySelector('.close');
  
    // Function to open modal with product details
    function openModal(item) {
      const img = item.querySelector('img');
      const title = item.querySelector('h4').textContent;
      const price = item.querySelector('.price').textContent;
      const sourceButton = item.querySelector('.add-to-cart');
  
      modalImage.src = img.src;
      modalImage.alt = img.alt || '';
      modalTitle.textContent = title;
      modalPrice.textContent = price;
  
      // Copy data attributes
      modalAddToCart.dataset.name = sourceButton.dataset.name;
      modalAddToCart.dataset.price = sourceButton.dataset.price;
  
      modal.classList.add('show');
      document.body.classList.add('modal-open');
    }
  
    // Function to close modal
    function closeModal() {
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
  
    // Event listeners for gallery images
    document.querySelectorAll('.gallery-item img').forEach(img => {
      img.addEventListener('click', () => {
        const item = img.closest('.gallery-item');
        if (item) {
          openModal(item);
        }   
      });
    });
  
    // Event listener for close button
    closeBtn.addEventListener('click', closeModal);
  
    // Event listener for clicking outside modal content
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Event listener for modal Add to Cart button
    modalAddToCart.addEventListener('click', () => {
      const itemName = modalAddToCart.dataset.name;
      const itemPrice = parseFloat(modalAddToCart.dataset.price);
      addToCart(itemName, itemPrice);
      closeModal();
    });
  });
  