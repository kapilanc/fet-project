class FormValidator {
    validateForm(event: Event): void {
        event.preventDefault(); 
        const usernameInput = document.getElementById('username') as HTMLInputElement;
        const username = usernameInput.value;
        if (!/^[a-zA-Z]+$/.test(username) || username.length <= 6) {
            alert('Invalid username. It should not contain numbers and must be greater than 6 characters.');
            return;
        }
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const email = emailInput.value;
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Invalid email address.');
            return;
        }
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        const password = passwordInput.value;
        if (password.length < 8 || !/\d/.test(password)) {
            alert('Invalid password. It should be at least 8 characters long and include at least one digit.');
            return;
        }
        alert('Login successful!');
        window.location.href = 'success.html';
    }
}
const formValidator = new FormValidator();
const loginForm = document.getElementById('loginForm') as HTMLFormElement;
loginForm.addEventListener('submit', (event) => {
    formValidator.validateForm(event);
});
