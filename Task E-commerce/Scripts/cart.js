// ---> remove item from cart <---
const cartTable = document.getElementById('cart-table');
function removeCart(title) {
    if(confirm("Do you want to remove this item from your cart?")){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = cartItems.filter(item => item.title !== title);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    window.location.reload();
    }
}



// ---> update Increment and decrement quantity <---
function IncDec(operation, title) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    const updatedCartItems = cartItems.map(item => {
        if (item.title === title) {
            let quantity = parseInt(item.quantity);
            if (operation === 'increment') {
                quantity += 1;
            } else if (operation === 'decrement') {
                quantity -= 1;
            }
            return { ...item, quantity: quantity.toString() };
        }
        return item;
    });
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    window.location.reload();
}



// ---> display cart items <---
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
cartItems.forEach(item => {
    item.price = item.price.replace(/^./, '');
    const quantity = item.quantity || 1;
    const row = document.createElement('tr');
    row.innerHTML = `
        <td id="cart-item-image" style="padding:20px;  font-size: 20px;"><img src="${item.image}"  alt=""> ${item.title}</td>
        <td style="padding: 20px;  font-size: 20px;">${item.price}</td>
        <td>
            <div id="quantity-control" style="display: flex; align-items: center; justify-content: center; gap: 10px;">
            <i class="fas fa-minus-circle" onclick="IncDec('decrement',  '${item.title}')"></i>
            <h3 id="quantity-control-span" style="font-size: 20px;">${item.quantity}</h3>
            <i class="fas fa-plus-circle" onclick="IncDec('increment', '${item.title}')"></i>
            </div>
        </td>
        <td style="padding: 20px; font-size: 20px;">${parseFloat(Math.round(item.price) * item.quantity)}</td> 
        <td style="padding: 5px; font-size: 20px;"><i style="cursor: pointer; font-size: 20px; color: red;" class="fas fa-trash-alt" onclick="removeCart('${item.title}')"></i></td>
     `;
    if (cartTable) {
        cartTable.appendChild(row);
    }
});




// ---> calculate total price <---
const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
const value = document.getElementById('total-price').textContent = totalPrice.toFixed(2);
const totae = document.getElementById('total').textContent = totalPrice;
 
// ---> calculate shipping price <---
const shipping = 100;
const value2 = document.getElementById('shipping').textContent = shipping.toFixed(2);

// ---> calculate tax <---
const tax = 0.1;
const value3 = document.getElementById('tax').textContent = (totalPrice * tax).toFixed(2);

// ---> calculate total price <---
const total = totalPrice + shipping + tax;
const value4 = document.getElementById('total').textContent = total.toFixed(2);




const billingDetailsForm = document.getElementById('billing-details-form');




// ---> place order <---
const placeOrder = document.getElementById('place-order');
const cardNumber = document.getElementById('card-number');
const expiryDate = document.getElementById('expiry-date');
const cash = document.getElementById('cash');
const credit = document.getElementById('credit');

// ---> place order <---
placeOrder.addEventListener('click', (e) => {
    e.preventDefault();
    const billingDetailsFormFields = billingDetailsForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    const allFieldsFilled = Array.from(billingDetailsFormFields).every(field => field.value.trim() !== '');
    // ---> check if all fields are filled and if the payment method is selected <---
    if (allFieldsFilled && (cash.checked || (cardNumber.value && expiryDate.value && credit.checked))) {
        alert('Order placed successfully');
        localStorage.removeItem('cartItems');
        window.location.href = 'home.html';
        const order = {
            orderId: "Bakery-001"+Math.floor(Math.random() * 100),
            customerName: document.getElementById('p-name').value,
            dateTime: new Date().toISOString(),
            status: 'placed',
            items: cartItems.map(item => item.title),
            total: Math.round(total),
            paymentMethod: cash.checked ? 'COD' : 'Card'
        };
        // ---> add the order to the local storage <---
        let orders = JSON.parse(localStorage.getItem('order')) || [];
        orders.push(order);
        localStorage.setItem('order', JSON.stringify(orders));
    } else {
        alert('Please fill all the billing details fields');
    }
});


