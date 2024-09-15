let users = {}; // Object to store registered users

// Function to handle signup
function handleSignup(event) {
    event.preventDefault();
    
    let username = document.getElementById('signup-username').value;
    let organizationName = document.getElementById('organization-name').value;
    let officialEmail = document.getElementById('official-email').value;
    let contactNumber = document.getElementById('contact-number').value;
    let badgeNumber = document.getElementById('badge-number').value;
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Check for valid email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(officialEmail)) {
        alert("Invalid email format!");
        return;
    }

    // Check for valid contact number (assuming 10-digit number)
    let contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contactNumber)) {
        alert("Contact number must be a 10-digit number!");
        return;
    }

    // Check for valid badge number (assuming alphanumeric check)
    let badgePattern = /^[A-Za-z0-9]+$/;
    if (!badgePattern.test(badgeNumber)) {
        alert("Badge Number must be alphanumeric!");
        return;
    }

    // Store the new user's credentials (using email as the unique identifier)
    users[officialEmail] = {
        password: password,
        organization: organizationName,
        email: officialEmail,
        contact: contactNumber,
        badge: badgeNumber
    };

    alert("Signup successful! Please login.");

    // Close signup modal
    closeModal('signupModal');
}

// Function to handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let emailBadgeInput = document.getElementById('email-badge').value; // Email or Badge input
    let password = document.getElementById('password').value;

    // Check if user exists by either email or badge number and password matches
    let userFound = false;
    for (let email in users) {
        let user = users[email];
        if ((user.email === emailBadgeInput || user.badge === emailBadgeInput) && user.password === password) {
            userFound = true;

            alert("Login successful!");

            // Show user section and update display
            document.getElementById('user-section').style.display = 'block';
            document.getElementById('username-display').textContent = user.email; // Or badge if preferred

            // Hide the login button and change heading after login
            document.getElementById('loginButton').style.display = 'none';
            document.getElementById('page-heading').style.display = 'none';

            // Replace heading with dropdown menu
            document.getElementById('dropdown-menu').style.display = 'block';

            // Close login modal
            closeModal('loginModal');
            break;
        }
    }

    if (!userFound) {
        alert("Invalid email/badge or password!");
    }
});

// Function to open modals
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

// Function to close modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Ensure dropdown menu is hidden initially
document.getElementById('dropdown-menu').style.display = 'none';

// Add smooth scrolling behavior for the dropdown options
document.querySelector('#overview-option').addEventListener('click', function() {
    document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#mission-option').addEventListener('click', function() {
    document.querySelector('.themes-section').scrollIntoView({ behavior: 'smooth' });
});

// Highlight Home Button
document.querySelector('#dropdown-menu li').classList.add('active');
