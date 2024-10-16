
//  EXERCISE 1: Contact Form Validation

// Function for validating the contact form from Exercise 1
function validateContactForm(event) {
    'use strict';
    
    event.preventDefault(); // Prevent form submission

    let emailField = document.querySelector('input[name="email"]');
    let commentField = document.querySelector('textarea[name="comment"]');
    let email = emailField.value;
    let comment = commentField.value;
    let isValid = true;

    // Reset styles and remove old error messages
    emailField.style.border = '';
    commentField.style.border = '';
    document.getElementById('email-error')?.remove();
    document.getElementById('comment-error')?.remove();

    // Validate email
    if (email.length < 6 || email.length > 15 || !email.includes("@")) {
        emailField.style.border = '2px solid red';
        let errorMessage = document.createElement('span');
        errorMessage.textContent = "Invalid email.Full lenght min 6 max 15";
        errorMessage.style.color = 'red';
        errorMessage.id = 'email-error';
        emailField.parentNode.appendChild(errorMessage);
        isValid = false;
    }

    // Validate comment
    if (comment.trim() === "") {
        commentField.style.border = '2px solid red';
        let errorMessage = document.createElement('span');
        errorMessage.textContent = "Comment cannot be empty.";
        errorMessage.style.color = 'red';
        errorMessage.id = 'comment-error';
        commentField.parentNode.appendChild(errorMessage);
        isValid = false;
    } else if (comment.length > 50) {
        comment = comment.slice(0, 50); // Trim to 50 characters
        alert("Comment trimmed to 50 characters: " + comment);
    }

    if (isValid) {
        alert("Email: " + email + "\nComment: " + comment);
    }
} // End of validateContactForm() function.


//  EXERCISE 2: Membership Calculator 

// Function for calculating membership cost
function calculateMembership(event) {
    'use strict';
    
    event.preventDefault(); // Prevent form submission

    let membershipType = document.getElementById('type').value;
    let years = parseInt(document.getElementById('years').value);
    let costField = document.getElementById('cost');
    let cost;
    let discountMessage = '';

    // Membership prices
    let prices = {
        'basic': 10,
        'premium': 15,
        'gold': 20,
        'platinum': 25
    };

    // Base cost calculation
    cost = prices[membershipType] * years;

    // Apply discounts
    if (years > 2) {
        cost *= 0.8; // 20% discount
        discountMessage = 'You received a 20% discount!';
    }

    if (years >= 5) {
        cost -= 5; // Extra 5€ discount
        discountMessage = 'You received a 20% discount + an extra 5€ discount!';
    }

    // Display the total cost
    costField.value = cost.toFixed(2);
    
    // Show discount message (if applicable)
    let discountElement = document.getElementById('discount-message');
    if (!discountElement) {
        discountElement = document.createElement('p');
        discountElement.id = 'discount-message';
        costField.parentNode.appendChild(discountElement);
    }
    discountElement.textContent = discountMessage;
} // End of calculateMembership() function.


// EXERCISE 3: Book Order Calculator

// Function called when the form is submitted.
// Function performs the book order calculation and returns false.
function calculate(event) {
    'use strict';

    // Prevent form submission
    event.preventDefault();

    // Get references to the form values and ensure they are converted to numbers
    let quantity = parseInt(document.getElementById('quantity').value);
    let price = parseFloat(document.getElementById('price').value);
    let tax = parseFloat(document.getElementById('tax').value);
    let discount = parseFloat(document.getElementById('discount').value);
    let shipping = parseFloat(document.getElementById('shipping').value);

    // Validate that all values are numbers and not NaN
    if (isNaN(quantity) || isNaN(price) || isNaN(tax) || isNaN(discount) || isNaN(shipping)) {
        alert("Please enter valid numerical values.");
        return;
    }

    // Calculate the initial total (quantity * price)
    let total = quantity * price;
    console.log("Total before tax: " + total);

    // Factor in the tax
    total *= (1 + (tax / 100));
    console.log("Total after tax: " + total);

    // Factor in the discount
    if (quantity > 100) {
        total -= (2 * discount); // Double discount if quantity > 100
    } else {
        total -= discount;
    }

    // Add shipping cost
    total += shipping;

    // Format the total to two decimal places
    total = total.toFixed(2);

    // Display the total in the total field
    document.getElementById('total').value = total;
} // End of calculate() function

// Function to set up event listeners on page load
function init() {
    'use strict';

    // Add event listener for the "Calculate" button
    let bookForm = document.getElementById('submit-calculate');
    if (bookForm) {
        bookForm.addEventListener('click', calculate);
    }
}


// -------------- EXERCISE 4: Hidden Extra Fields --------------

// Function to show the relevant field based on the selected contact method
function showContactField() {
    // Get the selected contact method
    const contactMethod = document.getElementById('contact-method').value;

    // Hide all fields initially
    document.getElementById('email-field').style.display = 'none';
    document.getElementById('phone-field').style.display = 'none';
    document.getElementById('sms-field').style.display = 'none';

    // Show the appropriate field based on the selected contact method
    if (contactMethod === 'email') {
        document.getElementById('email-field').style.display = 'block';
    } else if (contactMethod === 'phone') {
        document.getElementById('phone-field').style.display = 'block';
    } else if (contactMethod === 'sms') {
        document.getElementById('sms-field').style.display = 'block';
    }
}

// Function to initialize event listeners on window load
function initHiddenFields() {
    // Add an event listener to the contact method dropdown
    const contactMethodDropdown = document.getElementById('contact-method');
    contactMethodDropdown.addEventListener('change', showContactField);
}

// Run the init function on window load
window.onload = initHiddenFields;

