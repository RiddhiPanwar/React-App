function redirectToNextPage() {
    window.location.href = '2onBoarding_2.html';
}
function LoginEmpty() {
    window.location.href = '3LoginEmpty.html';
}
function LogginFilledPage() {
    window.location.href = '4LogginFilledPage.html';
}
function loginPage() {
    window.location.href = '3LoginEmpty.html';
}
function forgotPass() {
    window.location.href = '5forgotPassword.html';
}

function loginAgain() {
    window.location.href = '3LoginEmpty.html';
}
function forgot() {
    window.location.href = '5forgotPassword.html';
}

function continuePage() {
    window.location.href = 'index.html';
}
function resetPage() {
    window.location.href = '7reset.html';
}

function reverseOtp() {
    window.location.href = 'index.html';
}
function successPage() {
    window.location.href = '8success.html';
}
function reverse() {
    window.location.href = '5forgotPassword.html';
}
function signIn() {
    window.location.href = 'postLoginPage.html';
}
function registerOn() {
    window.location.href = 'postLoginPage.html';
}


//
// function continuePage() {
//     const email = document.getElementById('emailInput').value;
//     if (!isValidEmail(email)) {
//         alert("please enter a valid gmail address!");
//         return;
//     }
//     const otp = generateRandomOtp();
//     alert(`OTP send to ${email}:${otp}`);
// }


// function continuePage() {
//     const email = document.getElementById('emailInput').value;
//     if (!isValidEmail(email)) {
//         alert("please enter a valid Gmail address!");
//         return;
//     }
//     const otp = generateRandomOtp();
//     alert(`OTP sent to ${email}: ${otp}`);
// }

let isButtonClicked = false; // This flag will check if the button has been clicked once

function continuePage() {
    if (!isButtonClicked) {
        // First click: Show a popup message
        const email = document.getElementById('emailInput').value;
        if (!isValidEmail(email)) {
            alert("Please enter a valid Gmail address!");
            return;
        }
        const otp = generateRandomOtp();
        alert(`OTP sent to ${email}: ${otp}`);

        isButtonClicked = true; // Change the flag to true after the popup
    } else {
        // Second click: Redirect to another page
        window.location.href = 'index.html'; // Change this URL to your desired destination
    }
}

function verifyOTP() {
    const enteredOTP = document.getElementById('otpInput').value;
    const generatedOTP = localStorage.getItem('generatedOTP');
    if (enteredOTP === generatedOTP) {
        alert("OTP verified successfully.");
        isOTPVerified = true;
        document.getElementById('verifyButton').textContent = 'Continue';
    } else {
        alert("Invalid OTP. Please try again!");
    }
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@gmail.com$/;
    return regex.test(email);
}
function generateRandomOtp() {
    // Generate a random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Store OTP in local storage for verification
    localStorage.setItem('generatedOTP', otp);

    return otp;
}




