document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('h2');
    var paragraph = document.querySelector('p');
    // Function to animate the elements
    function animateElements() {
        // Add a CSS class to trigger the animation
        if (header) {
            header.classList.add('animate');
        }
        if (paragraph) {
            paragraph.classList.add('animate');
        }
    }
    // Call the animateElements function after a delay of 500ms
    setTimeout(function () {
        // Show the content and trigger the animation
        if (header && paragraph) {
            header.textContent = "Login Successful!";
            paragraph.textContent = "Your login was successful. Welcome to the success page!";
            animateElements();
        }
    }, 1); // Adjust delay as needed
});
