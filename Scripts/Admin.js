// -------------------------initialize the sidebar and show the 'dashboard' section by default-------------------------
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('click', function(e) {
        if (e.target.tagName === 'li') {
            const sectionId = e.target.getAttribute('data-section');
            showSection(sectionId);
        }
    });
    showSection('dashboard'); 
});


// -------------------------show the section-------------------------
function showSection(sectionId) {
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => {
        // -------------------------hide the section-------------------------
        if (section.id !== sectionId) {
            section.style.zIndex = '0';
            section.style.display = 'none';
        }
        // -------------------------show the section-------------------------
         else {
            section.style.zIndex = '1';
            section.style.display = 'block';

        }
    });
}

// --------------------------------------------customer section--------------------------------------------

// ---> add customer Button form Show <---
function showAddCustomer() {
    const addCoustomer = document.querySelector('#add-customer-btn');
    addCoustomer.addEventListener('click', function() {   
    const modal = document.querySelector('.modal');
    const editCustomerBtn = document.querySelector('.Cadd-btn');
    const addCustomerBtn = document.querySelector('.Cedit-btn');
    const h2 = document.querySelector('#add-customer-h2');
    const Zname = document.getElementById('customer-name');
    const Zemail = document.getElementById('customer-email');
    const Zpassword = document.getElementById('customer-password');



    Zname.value = '';
    Zemail.value = '';
    Zpassword.value = '';
    h2.textContent = 'Add Customer';
    modal.style.display = 'block';
    editCustomerBtn.style.display = 'block';
    addCustomerBtn.style.display = 'none';
});
}
showAddCustomer();



// ---> add customer form <---
function addCustomerForm() {
    const addCustomerForm = document.querySelector('#add-customer-form');
    addCustomerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#customer-name').value;
    const email = document.querySelector('#customer-email').value;
    const password = document.querySelector('#customer-password').value;
    const user = JSON.parse(localStorage.getItem('users') || '{"customer": []}');
    user.customer.push({
        name: name,
        email: email,
        password: password,
        userType: 'customer'
    });
    localStorage.setItem("users", JSON.stringify(user));
    addCustomerForm.reset();
    location.reload();  
});
}
addCustomerForm();


// ---> customer table <---
const userTableBody = document.querySelector('#userTableBody');
const vendorTableBody = document.querySelector('#vendorTableBody');
const users = JSON.parse(localStorage.getItem('users'));




// ---> delete customer Button <---
function deleteCustomer(email) {
    const users = JSON.parse(localStorage.getItem('users') || '{"customer": []}');
    users.customer = users.customer.filter(user => user.email !== email);
    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
}



// ---> edit customer Button <---
function editCustomer(name,email, password) {
    const editCustomerModal = document.querySelector('.modal');
    const editCustomerBtn = document.querySelector('.Cedit-btn');
    const addCustomerBtn = document.querySelector('.Cadd-btn');
    const h2 = document.querySelector('#add-customer-h2');
    const Zname = document.getElementById('customer-name');
    const Zemail = document.getElementById('customer-email');
    const Zpassword = document.getElementById('customer-password');
    h2.textContent = 'Edit Customer';
    editCustomerModal.style.display = 'block';
    editCustomerBtn.style.display = 'block';
    addCustomerBtn.style.display = 'none';
    Zname.value = name;
    Zemail.value = email;
    Zpassword.value = password;
    const editCustomerbtn = document.getElementById('edit-customer-btn');
    editCustomerbtn.addEventListener('click', function(e) {
        e.preventDefault();
        const name = Zname.value;
        const email = Zemail.value;
        const password = Zpassword.value;
        
        users.customer.forEach(user => {
            if (user.email === email) {
                user.name = name;
                user.email = email;
                user.password = password;
            }
        });
        localStorage.setItem("users", JSON.stringify(users));
        editCustomerModal.style.display = 'none';
        location.reload();
    });


}



// ---> show the customer table <---
if (users.customer) {
    users.customer.forEach(user => {
        if (user.userType === 'customer' && userTableBody) {
            userTableBody.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td id="Mbtn"><button class="btn delete-btn" onclick="deleteCustomer('${user.email}')">Delete</button>
                <button class="btn edit-btn" onclick="editCustomer('${user.name}','${user.email}', '${user.password}')">Edit</button>
                </td>
            </tr>
            `;
        }

    });
}


// ---> close the customer modal <---
const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
});



// --------------------------------------------vendor section--------------------------------------------

// ---> delete vendor Button <---
function deleteVendor(email) {
    console.log(email);
    const users = JSON.parse(localStorage.getItem('users') || '{"vendor": []}');
    users.vendor = users.vendor.filter(user => user.email !== email);
    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
}

// ---> edit vendor Button <---
function editVendor(email, password) {
    const editVendorModal = document.getElementById('add-vendor-modal');
    const editVendorBtn = document.querySelector('.Vadd-btn');
    const addVendorBtn = document.querySelector('.Vedit-btn');
    const h2 = document.getElementById('add-vendor-h2');
    const Zemail = document.getElementById('vendor-email');
    const Zpassword = document.getElementById('vendor-password');
    h2.textContent = 'Edit Vendor';
    editVendorModal.style.display = 'block';
    editVendorBtn.style.display = 'none';
    addVendorBtn.style.display = 'block';
    Zemail.value = email;
    Zpassword.value = password;
    const editVendorbtn = document.getElementById('edit-vendor-btn');
    editVendorbtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = Zemail.value;
        const password = Zpassword.value;
        users.vendor.forEach(user => {
            if (user.email === email) {
                user.email = email;
                user.password = password;
            }
        });
        localStorage.setItem("users", JSON.stringify(users));
        editVendorModal.style.display = 'none';
        location.reload();
    });


}
// ---> show the vendor table <---
if (users.vendor) {
    users.vendor.forEach(user => {

        if (user.userType === 'vendor' && vendorTableBody) {
            vendorTableBody.innerHTML += `
            <tr>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td id="Mbtn"><button class="btn delete-btn" onclick="deleteVendor('${user.email}')">Delete</button>
                <button class="btn edit-btn" onclick="editVendor('${user.email}', '${user.password}')">Edit</button>
                </td>
            </tr>
            `;
        }
    });
}

// ---> add vendor Button <---
const addVendorModal = document.querySelector('#add-vendor-btn');
addVendorModal.addEventListener('click', function() {   
    const modal = document.querySelector('#add-vendor-modal');
    const addVendorBtn = document.querySelector('.Vedit-btn');
    const editVendorBtn = document.querySelector('.Vadd-btn');
    addVendorBtn.style.display = 'none';
    editVendorBtn.style.display = 'block';
    modal.style.display = 'flex';
});

// ---> close the add vendor modal <---
const Vclose = document.querySelector('.Vclose');
Vclose.addEventListener('click', function() {
    const modal = document.querySelector('#add-vendor-modal');
    
    modal.style.display = 'none';
});
// ---> add vendor form <---
const addVendorForm = document.querySelector('#add-vendor-form');
addVendorForm.addEventListener('submit', function(e) {
    e.preventDefault();


    const email = document.querySelector('#vendor-email').value;
    const password = document.querySelector('#vendor-password').value;
    const user = JSON.parse(localStorage.getItem('users') || '{"vendor": []}');
    user.vendor.push({    
        email: email,
        password: password,
        userType: 'vendor'
    });
    localStorage.setItem("users", JSON.stringify(user));
    addVendorForm.reset();
    location.reload();
});




// ------------------------------------------------order section------------------------------------------------


// ---> order table <---
const orderTableBody = document.getElementById('ordertable');
    const orders = JSON.parse(localStorage.getItem('order'));
    // console.log(orders);
    if (orders) {
        orders.forEach(order => {
        orderTableBody.innerHTML += `
        <tr>
            <td>${order.orderId}</td>
            <td>${order.customerName}</td>
            <td>${order.dateTime}</td>
            <td>${order.items}</td>
            <td>${order.status}</td>
            <td>${order.paymentMethod}</td>
            <td>${order.total}</td>
            <td><button class="btn order-btn" onclick="editOrder('${order.orderId}')">Edit</button></td>
        </tr>
        `;
    });
    }





    // ---> edit order Button <---
    function editOrder(orderId) {
    const editModal = document.getElementById('edit-order-modal');
  
    // console.log(orderId);
    const order = orders.find(order => order.orderId === orderId);
        editModal.style.display = 'block';

        const statusSelect = document.getElementById('status-select');
        statusSelect.value = order.status;

        const editOrderForm = editModal.querySelector('form');
        editOrderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            order.status = statusSelect.value;
            localStorage.setItem('order', JSON.stringify(orders));
            editModal.style.display = 'none';
            location.reload();
        });
            console.log(order.status);

        }





    // ---> close the edit order modal <---
    const ORclose = document.querySelector('.ORclose');
    ORclose.addEventListener('click', function() {
        const editModal = document.getElementById('edit-order-modal');
        editModal.style.display = 'none';
    });


    // ---> show the admin info <---
    const adminName = document.getElementById('admin-name');
    const adminEmail = document.getElementById('admin-email');
    const adminPassword = document.getElementById('admin-password');
    const currentAdminInfo = JSON.parse(localStorage.getItem('currentUser'));
    adminName.innerHTML = currentAdminInfo.name;
    adminEmail.innerHTML = currentAdminInfo.email;
    adminPassword.innerHTML = currentAdminInfo.password;





    // ---> logout button <---
    const logoutbtn = document.getElementById('logout-btn');
    logoutbtn.addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        location.reload();
        window.location.href = '../Login.html';
    });
