document.addEventListener('DOMContentLoaded', () => {
    // Select the relevant DOM elements with updated class names
    var openBtn = document.querySelector('.open_form_hm');
    var main = document.querySelector('.main_hm');
    var btns = document.querySelectorAll('.btn_hm button');
    var signInBtn = document.querySelector('.sign_in_hm');
    var signUpBtn = document.querySelector('.sign_up_hm');
    var signInForm = document.querySelector('.sign_in_form_hm');
    var signUpForm = document.querySelector('.sign_up_form_hm');
    var inputField = document.querySelectorAll('input');
    var passwordInput = document.querySelector('.pass_hm');
    var eyeBtn = document.querySelector('.eye_hm');
    var passwordInput1 = document.querySelector('.pass1_hm');
    var passwordInput2 = document.querySelector('.pass2_hm');
    var eyeBtn1 = document.querySelector('.eye1_hm');
    var eyeBtn2 = document.querySelector('.eye2_hm');
    var cross = document.querySelector('.cross_hm');

    // Listen for the custom event to open the login modal
    document.addEventListener('open-login-modal', () => {
        main.classList.add('active_hm');
        eyeBtn.style.display = "none";
        eyeBtn1.style.display = "none";
        eyeBtn2.style.display = "none";
    });

    // Handle mouseover event on the open button to animate background effect
    if (openBtn) {
        openBtn.addEventListener('mouseover', (event) => {
            const x = (event.pageX - openBtn.offsetLeft);
            const y = (event.pageY - openBtn.offsetTop);

            openBtn.style.setProperty("--xPos", x + "px");
            openBtn.style.setProperty("--yPos", y + "px");
        });
    }

    // Toggle between sign-in and sign-up forms
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(btn => {
                btn.classList.remove('active_hm');
            });
            btn.classList.add('active_hm');

            if (btn.classList.contains('sign_in_hm')) {
                signUpForm.style.display = 'none';
                signInForm.style.display = 'block';
            } else {
                signInForm.style.display = 'none';
                signUpForm.style.display = 'block';
            }
        });
    });

    // Show the main container and hide eye icons initially
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            main.classList.add('active_hm');
            eyeBtn.style.display = "none";
            eyeBtn1.style.display = "none";
            eyeBtn2.style.display = "none";
        });
    }

    // Close the main container and reset the form
    if (cross) {
        cross.addEventListener('click', () => {
            main.classList.remove('active_hm');
            signInBtn.classList.add('active_hm');
            signUpBtn.classList.remove('active_hm');
            signInForm.style.display = 'block';
            signUpForm.style.display = 'none';

            inputField.forEach(inputVal => {
                inputVal.value = "";
            });

            eyeBtn.style.display = 'none';
            passwordInput.setAttribute('type', 'password');
            eyeBtn.classList.add('fa-eye');
            eyeBtn.classList.remove('fa-eye-slash');

            eyeBtn1.style.display = 'none';
            passwordInput1.setAttribute('type', 'password');
            eyeBtn1.classList.add('fa-eye');
            eyeBtn1.classList.remove('fa-eye-slash');

            eyeBtn2.style.display = 'none';
            passwordInput2.setAttribute('type', 'password');
            eyeBtn2.classList.add('fa-eye');
            eyeBtn2.classList.remove('fa-eye-slash');
        });
    }

    // Show/hide eye icon for password input fields
    function handlePasswordVisibility(input, eyeButton) {
        input.addEventListener('focus', () => {
            if (input.value.trim() !== '') {
                eyeButton.style.display = "block";
            }
        });

        input.addEventListener('keyup', () => {
            if (input.value.trim() !== '') {
                eyeButton.style.display = "block";
            } else {
                eyeButton.style.display = "none";
                input.setAttribute('type', 'password');
                eyeButton.classList.remove("fa-eye-slash");
                eyeButton.classList.add('fa-eye');
            }
        });
    }

    handlePasswordVisibility(passwordInput, eyeBtn);
    handlePasswordVisibility(passwordInput1, eyeBtn1);
    handlePasswordVisibility(passwordInput2, eyeBtn2);

    // Toggle password visibility on eye icon click
    function togglePasswordVisibility(input, eyeButton) {
        eyeButton.addEventListener('click', () => {
            if (input.type === "password") {
                input.setAttribute('type', 'text');
                eyeButton.classList.remove("fa-eye");
                eyeButton.classList.add('fa-eye-slash');
            } else {
                input.setAttribute('type', 'password');
                eyeButton.classList.add("fa-eye");
                eyeButton.classList.remove('fa-eye-slash');
            }
        });
    }

    togglePasswordVisibility(passwordInput, eyeBtn);
    togglePasswordVisibility(passwordInput1, eyeBtn1);
    togglePasswordVisibility(passwordInput2, eyeBtn2);
});
