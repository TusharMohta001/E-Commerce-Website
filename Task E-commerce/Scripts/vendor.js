// -------------------------initialize the sidebar and show the 'dashboard' section by default-------------------------
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('click', function(e) {
        if (e.target.tagName === 'li') {
            const sectionId = e.target.getAttribute('data-section');
            showSection(sectionId);
        }
    });
    showSection('overview'); 
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


// -------------------------edit product-------------------------
function EProduct(name, description,price,quantity,image) {
    const modal = document.querySelector('.modal'); 
    const editProductBtn = document.getElementById('EditProductBtn');
    const addProductBtn = document.getElementById('AddProductBtn');
    const TextProduct = document.getElementById('TextProduct');
    TextProduct.innerHTML = 'Edit Product';
    modal.style.display = 'block';
    editProductBtn.style.display = 'block';
    addProductBtn.style.display = 'none';
    const Vname = document.getElementById('product-name');
    const Vdescription = document.getElementById('product-description');
    const Vprice = document.getElementById('product-price');
    const Vquantity = document.getElementById('product-quantity');
    const Vimage = document.getElementById('product-image');        
    Vname.value = name; // ---> set the value of the name input field <---
    Vdescription.value = description;
    Vprice.value = price;
    Vquantity.value =   quantity;
    Vimage.value = image;
    console.log(quantity); 
    // ---> edit the product <---
    editProductBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const currentUserProducts = users.vendor.find(user => user.email === currentUser.email).products;
        // ---> edit the product <---
        currentUserProducts.forEach(product => {
            if (product.name === Vname.value) {
                product.description = Vdescription.value;
                product.price = Vprice.value;
                product.quantity = Vquantity.value;
                product.image = Vimage.value;
            }
        });
        // ---> save the product <---
        localStorage.setItem('users', JSON.stringify(users));
        location.reload();
    });
    
}

// -------------------------product section to show the products-------------------------
function productTable() {
    const productTableBody = document.querySelector('#product-table');
    const CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    const data = JSON.parse(localStorage.getItem('users')).vendor.find(user => user.email === CurrentUser.email).products;

    data.forEach(item => {
        productTableBody.innerHTML += `
            <tr>
                <td><img src="${item.image}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10%;" alt="Product Image"></td>
                <td style="text-align: center; font-size: 1.2rem; font-weight: bold;">${item.name}</td>
                <td style="text-align: center;">${item.description}</td>
                <td style="text-align: center;">${item.quantity} units</td>
                <td style="text-align: center;">${item.price}</td>
                <td style=" height: 150px; display: flex; justify-content: center; gap: 10px; flex-direction: column; align-items: center; text-align: center; "><button class="delete-btn" style="background-color: red; color: white; border: none; padding: 10px 40px; border-radius: 5px; cursor: pointer;" onclick="DProduct('${item.name}' )">Delete</button>
                <button class="edit-btn"  style="background-color: #007bff; color: white; border: none; padding: 10px 50px; border-radius: 5px; cursor: pointer;" onclick="EProduct('${item.name}','${item.description}','${item.price}','${item.quantity}','${item.image}')">Edit</button></td>
            </tr>
            `;
    });
}

productTable();

    
// -------------------------delete product-------------------------
function DProduct(name) {
    let users = JSON.parse(localStorage.getItem('users') || '{"vendor": []}');
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let currentUserProducts = users.vendor.find(user => user.email === currentUser.email).products;
    currentUserProducts = currentUserProducts.filter(product => product.name !== name);
    users.vendor.find(user => user.email === currentUser.email).products = currentUserProducts;
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
}


// -------------------------add product section-------------------------
function AddProduct() {
    const addProductModal = document.querySelector('#add-product-btn');
    addProductModal.addEventListener('click', function() {   
        const modal = document.querySelector('.modal');
        const editProductBtn = document.getElementById('EditProductBtn');
        const addProductBtn = document.getElementById('AddProductBtn');
        const TextProduct = document.getElementById('TextProduct');
        TextProduct.innerHTML = 'Add New Product';
        modal.style.display = 'block';
        editProductBtn.style.display = 'none';
        addProductBtn.style.display = 'block';
    });
}
AddProduct();



// -------------------------close the modal-------------------------
const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
});


// -------------------------add product to the local storage-------------------------
const addProductForm = document.querySelector('#add-product-form');
addProductForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;
    const quantity = document.getElementById('product-quantity').value;
    const product = {    
        name: name,
        description: description,
        price: price,
        image: image,
        quantity: quantity,
        rating: Math.floor(Math.random() * 5),
        discountPercentage: Math.floor(Math.random() * 10),
    };




    // -------------------------add product to the local storage-------------------------
    const users = JSON.parse(localStorage.getItem('users'));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentUserProducts = users.vendor.find(user => user.email === currentUser.email).products;
    currentUserProducts.push(product);
    localStorage.setItem('users', JSON.stringify(users));




    // -------------------------show the products-------------------------
    productTableBody.innerHTML += `
    <tr>
        <td><img src="${product.image}" style="width: 100px; height: 100px;" alt="Product Image"></td>
        <td style="text-align: center; font-size: 1.2rem; font-weight: bold;">${product.name}</td>
        <td style="text-align: center;">${product.description}</td>
        <td style="text-align: center;">${product.quantity}</td>
        <td style="text-align: center;">${product.price}</td>
    </tr>
    `;
    addProductForm.reset();
});



// -------------------------vendor name section-------------------------
const vendorName = document.getElementById('Vendor-name');
const vendorEmail = document.getElementById('Vendor-email');
const vendorPassword = document.getElementById('Vendor-password');
const currentVendorInfo = JSON.parse(localStorage.getItem('currentUser'));
vendorName.innerHTML = currentVendorInfo.name;
vendorEmail.innerHTML = currentVendorInfo.email;
vendorPassword.innerHTML = currentVendorInfo.password;


const logoutbtn = document.getElementById('logout-btn');
logoutbtn.addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    location.reload();
    window.location.href = '../Login.html';
});





