document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
  
    if (username === 'admin' && password === 'password123') {
        
        errorMessage.textContent = 'Login Successful!';
        errorMessage.style.color = 'green';
    } else {
       
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.color = 'red';
    }
});
document.getElementById('Facebook').addEventListener('click', function() {
window.open('https://www.facebook.com', '_blank');
});

document.getElementById('com').addEventListener('click', function() {
window.open('https://x.com/i/flow/login', '_blank');
});

document.getElementById('rupay').addEventListener('click', function() {
window.open('https://www.rupay.co.in', '_blank');
});
document.getElementById('developer').addEventListener('click', function() {
window.open('https://developer.mastercard.com/open-banking-us/documentation/connect/generate-2-connect-url-apis/', '_blank');
});
document.getElementById('phonepay').addEventListener('click', function() {
window.open('https://www.phonepe.com/hi/index.html', '_blank');
});
document.getElementById('visa').addEventListener('click', function() {
window.open('https://indianvisaonline.gov.in/evisa/tvoa.html', '_blank');
});
document.getElementById('pay').addEventListener('click', function() {
window.open('https://support.google.com/googlepay/answer/7644068?hl=en', '_blank');
});
document.getElementById('paytm').addEventListener('click', function() {
window.open('https://business.paytm.com/docs/v1/payment-link/', '_blank');
});