// ---> place order button <---
const placeOrderBtn = document.getElementById('checkout-btn');
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// ---> if the user is a customer, place the order <---
if(currentUser) {
    placeOrderBtn.addEventListener('click', function() {
        if(currentUser.userType === 'customer') {
            alert('Order placed successfully');
            const order = {
                customer: currentUser,
                products: JSON.parse(localStorage.getItem('cart')),
            }
            localStorage.setItem('order', JSON.stringify(order));
        }
    })
} else {
    alert('Please login to place an order');
    window.location.href = '../Pages/login.html';
}
