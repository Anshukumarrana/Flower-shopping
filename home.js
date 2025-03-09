const addToCartBtnd = document.getElementById('addToCartBtnd');
const cartModald = document.getElementById('cartModald');
const closeModalBtnd = document.getElementById('closeModalBtnd');
const cartFormd = document.getElementById('cartFormd');


addToCartBtnd.addEventListener('click', function() {
  cartModald.style.display = 'block';
});


closeModalBtnd.addEventListener('click', function() {
  cartModald.style.display = 'none';
});


window.addEventListener('click', function(event) {
  if (event.target === cartModald) {
    cartModald.style.display = 'none';
  }
});



cartFormd.addEventListener('submit', function(event) {
  event.preventDefault();
  const quantityd = document.getElementById('quantityd').value;
  const Addressd = document.getElementById('Addressd').value;
  alert("Order Successful");
  cartModald.style.display = 'none'; 
});

const addToCartBtna = document.getElementById('addToCartBtna');
const cartModala = document.getElementById('cartModala');
const closeModalBtna = document.getElementById('closeModalBtna');
const cartForma = document.getElementById('cartForma');


addToCartBtna.addEventListener('click', function() {
  cartModala.style.display = 'block';
});


closeModalBtna.addEventListener('click', function() {
  cartModala.style.display = 'none';
});


window.addEventListener('click', function(event) {
  if (event.target === cartModala) {
    cartModala.style.display = 'none';
  }
});



cartForma.addEventListener('submit', function(event) {
  event.preventDefault();
  const quantitya = document.getElementById('quantitya').value;
  const Addressa = document.getElementById('Addressa').value;
  alert("Order Successful");
  cartModala.style.display = 'none'; 
});

const addToCartBtnc = document.getElementById('addToCartBtnc');
const cartModalc = document.getElementById('cartModalc');
const closeModalBtnc = document.getElementById('closeModalBtnc');
const cartFormc = document.getElementById('cartFormc');


addToCartBtnc.addEventListener('click', function() {
  cartModalc.style.display = 'block';
});


closeModalBtnc.addEventListener('click', function() {
  cartModalc.style.display = 'none';
});


window.addEventListener('click', function(event) {
  if (event.target === cartModalc) {
    cartModalc.style.display = 'none';
  }
});



cartFormc.addEventListener('submit', function(event) {
  event.preventDefault();
  const quantityc = document.getElementById('quantityc').value;
  const Addressc = document.getElementById('Addressc').value;
  alert("Order Successful");
  cartModald.style.display = 'none'; 
});

/*document.getElementById('instaButton').addEventListener('click', function() {
  window.open('https://www.instagram.com', '_blank');
});
*/
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