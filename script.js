// ================================
// FUCHSIUS - JavaScript
// ================================

// ================================
// 1. NAVBAR - Highlight Active Page
// ================================
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});

// ================================
// 2. ADD TO CART - Button Feedback
// ================================
document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".btn-dark");

    cartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const originalText = button.textContent;
            button.textContent = "✓ Added!";
            button.style.backgroundColor = "#E91E8C";

            setTimeout(function () {
                button.textContent = originalText;
                button.style.backgroundColor = "#1A1A1A";
            }, 2000);
        });
    });
});

// ================================
// 3. NEWSLETTER - Subscribe Message
// ================================
document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.querySelector(".newsletter-form");

    if (newsletterForm) {
        const subscribeBtn = newsletterForm.querySelector(".btn-pink");
        const emailInput = newsletterForm.querySelector("input");

        subscribeBtn.addEventListener("click", function () {
            const email = emailInput.value.trim();

            if (email === "") {
                alert("Please enter your email address!");
                return;
            }

            if (!email.includes("@")) {
                alert("Please enter a valid email address!");
                return;
            }

            emailInput.value = "";
            subscribeBtn.textContent = "✓ Subscribed!";
            subscribeBtn.style.backgroundColor = "#1A1A1A";

            setTimeout(function () {
                subscribeBtn.textContent = "Subscribe";
                subscribeBtn.style.backgroundColor = "#E91E8C";
            }, 3000);
        });
    }
});

// ================================
// 4. LOGIN FORM - Validation
// ================================
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".auth-card .btn-pink");

    if (loginBtn && loginBtn.textContent.includes("Login")) {
        loginBtn.addEventListener("click", function () {
            const inputs = document.querySelectorAll(".auth-card input");
            let allFilled = true;

            inputs.forEach(function (input) {
                if (input.value.trim() === "") {
                    allFilled = false;
                    input.style.borderColor = "#E91E8C";
                } else {
                    input.style.borderColor = "#eeeeee";
                }
            });

            if (!allFilled) {
                alert("Please fill in all fields!");
                return;
            }

            alert("Welcome back to FUCHSIUS! 🎉");
        });
    }
});

// ================================
// 5. SIGNUP FORM - Validation
// ================================
document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.querySelector(".auth-card .btn-pink");

    if (signupBtn && signupBtn.textContent.includes("Create Account")) {
        signupBtn.addEventListener("click", function () {
            const inputs = document.querySelectorAll(".auth-card input");
            let allFilled = true;

            inputs.forEach(function (input) {
                if (input.value.trim() === "") {
                    allFilled = false;
                    input.style.borderColor = "#E91E8C";
                } else {
                    input.style.borderColor = "#eeeeee";
                }
            });

            if (!allFilled) {
                alert("Please fill in all fields!");
                return;
            }

            alert("Welcome to FUCHSIUS! Account created successfully! 🎉");
        });
    }
});

// ================================
// 6. CONTACT FORM - Validation
// ================================
document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.querySelector(".contact-form-card .btn-pink");

    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            const inputs = document.querySelectorAll(".contact-form-card input");
            const textarea = document.querySelector(".contact-form-card textarea");
            let allFilled = true;

            inputs.forEach(function (input) {
                if (input.value.trim() === "") {
                    allFilled = false;
                    input.style.borderColor = "#E91E8C";
                } else {
                    input.style.borderColor = "#eeeeee";
                }
            });

            if (textarea && textarea.value.trim() === "") {
                allFilled = false;
                textarea.style.borderColor = "#E91E8C";
            } else if (textarea) {
                textarea.style.borderColor = "#eeeeee";
            }

            if (!allFilled) {
                alert("Please fill in all fields!");
                return;
            }

            alert("Message sent successfully! We'll get back to you soon! 😊");
            inputs.forEach(input => input.value = "");
            if (textarea) textarea.value = "";
        });
    }
});

// ================================
// 7. SMOOTH SCROLL - Shop Now Button
// ================================
document.addEventListener("DOMContentLoaded", function () {
    const shopNowBtn = document.querySelector(".btn-white");

    if (shopNowBtn) {
        shopNowBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const featuredSection = document.querySelector(".section");
            if (featuredSection) {
                featuredSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
