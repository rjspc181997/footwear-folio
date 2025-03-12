/**Burger Menu */

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.getElementById("nav-menu");

    burgerMenu.addEventListener("click", function () {
    navMenu.classList.toggle("active");    });
});


/**FAQ Toggle 
 * 
 * The aria-expanded attribute is part of the WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) specification. It is used to indicate to assistive technologies (like screen readers) whether a collapsible element is expanded (visible) or collapsed (hidden).

Value "true": Indicates that the element, or the section of content it controls, is expanded or open.
Value "false": Indicates that the element is collapsed or closed.
By setting aria-expanded on interactive elements (like buttons that toggle FAQs or menus), developers can provide additional context to users who rely on assistive devices, making the web experience more accessible.
 * 
*/

const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      this.setAttribute('aria-expanded', 'false');
    } else {
      answer.style.display = 'block';
      this.setAttribute('aria-expanded', 'true');
    }
  });
});


/**Increment Counter, Decrement Counter, Reset Button */

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

// Initialize the counter at 1 (minimum value)
let counter = 1;
counterDisplay.textContent = counter;

// Increment button event handler
incrementButton.addEventListener('click', function() {
  if (counter < 20) { // Only increment if counter is less than 20
    counter += 1;
    counterDisplay.textContent = counter;
  }
});

// Decrement button event handler
decrementButton.addEventListener('click', function() {
  if (counter > 1) { // Only decrement if counter is above 1
    counter -= 1;
    counterDisplay.textContent = counter;
  }
});

/**Reset Button */
const resetButton = document.getElementById('resetButton');

// Add an event listener to the Reset Button to refresh the page

resetButton.addEventListener('click', function(){
    location.reload();//refresh page
})

// Cart count elements
const addToCartButton = document.getElementById('addToCart');
const cartCountDisplay = document.querySelector('.header__cart .cart-count');

// Global cart count variable, starts at 0
let cartCount = 0;

// Add to Cart button event handler
addToCartButton.addEventListener('click', function() {
  // Increase the global cart count by the current quantity (counter)
  cartCount += counter;
  cartCountDisplay.textContent = cartCount;

// Show the cart badge if it is hidden and cartCount > 0

if (cartCount > 0) {
        cartCountDisplay.style.display = 'block';
      }
});


/**span active */

document.querySelectorAll('.size-options span').forEach(span => {
  span.addEventListener('click', function() {
      document.querySelectorAll('.size-options span').forEach(s => s.classList.remove('active'));
      this.classList.add('active');
  });
});

/**Image Selector Main Section */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.color-options img').forEach(img => {
      img.addEventListener('click', function() {
          let mainImage = document.getElementById('product-image'); // Select main image
          mainImage.src = this.src; // Change the source to clicked image
          mainImage.alt = this.alt; // Update the alt text

          // Remove 'selected' class from all images
          document.querySelectorAll('.color-options img').forEach(i => i.classList.remove('selected'));

          // Add 'selected' class to the clicked image
          this.classList.add('selected');
      });
  });
});