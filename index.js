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

/** Forms */
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email'); 
const messageInput = document.getElementById('message');
const submitButton = document.querySelector('button[type="submit"]');

/** Name Validation */
function isValidName(name) {
  return /^[a-zA-Z\s]+$/.test(name); // Allow only letters and spaces
}

/** Email Validation */
function isValidEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// Create inline error messages
const nameMessage = document.createElement('p');
nameMessage.style.color = 'red';
nameInput.insertAdjacentElement('afterend', nameMessage);

const emailMessage = document.createElement('p');
emailMessage.style.color = 'red';
emailInput.insertAdjacentElement('afterend', emailMessage);

const messageDisplay = document.createElement('p');
messageDisplay.style.color = 'green';
messageInput.insertAdjacentElement('afterend', messageDisplay);

// Show message confirmation when user types
messageInput.addEventListener('input', function () {
  messageDisplay.textContent = messageInput.value.trim() !== '' ? "Your message is noted!" : '';
});

/** Form Validation */
submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission
  
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();
  
  let isValid = true;

  // Name validation
  if (nameValue === '') {
    nameMessage.textContent = 'Please enter your name.';
    isValid = false;
  } else if (!isValidName(nameValue)) {
    nameMessage.textContent = 'Invalid name. Use only letters and spaces.';
    isValid = false;
  } else {
    nameMessage.textContent = ''; // Clear error if valid
  }

  // Email validation
  if (emailValue === '') {
    emailMessage.textContent = 'Please enter your email.';
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    emailMessage.textContent = 'Invalid email format. Enter a valid email.';
    isValid = false;
  } else {
    emailMessage.textContent = ''; // Clear error if valid
  }

  if (isValid) {
    alert("Form submitted successfully!");

    // Clear form inputs
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    // Clear inline messages
    nameMessage.textContent = '';
    emailMessage.textContent = '';
    messageDisplay.textContent = ''; 
  }
});
