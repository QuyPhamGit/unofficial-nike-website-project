// Main JavaScript functionalities for the Nike website

// Handle authentication across pages
document.addEventListener('DOMContentLoaded', function() {
  // Common elements
  const accountLink = document.getElementById('accountLink');
  
  // Check if user is logged in and handle account link display
  if (accountLink) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
      accountLink.textContent = 'Logout';
      accountLink.href = '#';
      accountLink.addEventListener('click', function(e) {
        e.preventDefault();
        // Clear login state and cart
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('loginProvider');
        // Redirect to login page
        window.location.href = 'login.html';
      });
    }
  }
  
  // Protection for pages that require login
  const protectedPages = [
    'products.html',
    'cart.html',
    'product-detail/nike-air-trainer-1-sp.html',
    'product-detail/nike-air-more-up-tempo-96.html',
    'product-detail/nike-air-max-90-se.html'
  ];
  
  const currentPage = window.location.pathname.split('/').pop();
  
  if (protectedPages.includes(currentPage) && localStorage.getItem('isLoggedIn') !== 'true') {
    // If current page requires login but user is not logged in
    alert('Please log in to access this page');
    window.location.href = 'login.html';
  }
});

// Helper functions
function formatPrice(price) {
  return price.toLocaleString() + '₫';
}

// Handle "Buy Now" buttons
function setupBuyNowButtons() {
  const buyButtons = document.querySelectorAll('.buy-1');
  
  if (buyButtons.length > 0) {
    buyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        if (!productId) return;
        
        const product = products.find(p => p.id === parseInt(productId));
        if (product) {
          const carts = JSON.parse(localStorage.getItem('carts')) || [];
          carts.push(product);
          localStorage.setItem('carts', JSON.stringify(carts));
          
          // Redirect to cart page
          window.location.href = 'cart.html';
        }
      });
    });
  }
}

// Setup quantity change handlers in cart
function setupQuantityHandlers() {
  const quantityInputs = document.querySelectorAll('.quantity-input');
  
  if (quantityInputs.length > 0) {
    quantityInputs.forEach(input => {
      input.addEventListener('change', function() {
        updateCartTotals();
      });
    });
  }
}

// Update cart totals when quantities change
function updateCartTotals() {
  const carts = JSON.parse(localStorage.getItem('carts')) || [];
  const cartTotal = document.getElementById('cartTotal');
  
  if (carts.length > 0 && cartTotal) {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    let total = 0;
    
    carts.forEach((item, index) => {
      const quantity = quantityInputs[index] ? parseInt(quantityInputs[index].value) : 1;
      total += item.pro_price * quantity;
    });
    
    cartTotal.textContent = `Cart Total: ${formatPrice(total)}`;
  }
}