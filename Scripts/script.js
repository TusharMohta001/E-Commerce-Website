// ---> Show in home page of items section <---
const container = document.getElementById("items")
const product = document.getElementById("products")
const allProducts = document.getElementById("category");
const productShow = document.getElementById('product-show');
const productShowImage = document.getElementById('productIMG');
const productShowTitle = document.getElementById('product-show-title');
const productShowDescription = document.getElementById('product-show-description');
const productShowPrice = document.getElementById('product-show-price');
const productShowAddToCart = document.getElementById('product-show-add-to-cart');
const productShowCategory = document.getElementById('product-show-category');
const productShowRating = document.getElementById('product-show-rating');
const productShowStock = document.getElementById('product-show-stock');


// ---> Show in home page of items section <---
async function Items() {
    // ---> try to fetch data from the api <---
    try {
        const response = await fetch("https://fakestoreapi.com/products"); // Api link
        const data = await response.json();
        data.slice(0, 10).forEach((item) => { // slice the data to 10 items
            const itemDiv = document.createElement('div'); // create a div element
            itemDiv.classList.add('item'); // add a class to the div element
             
            const img = document.createElement('img');
            img.src  = item.image;
            img.alt = "Item";
            itemDiv.appendChild(img);
            // ---> add an event listener to the img element <---
            img.addEventListener('click', function(){
                productShow.style.display = 'block';
                productShowImage.src = item.image;
                productShowTitle.innerText = item.title;
                productShowDescription.innerText = item.description;
                productShowPrice.innerText = `Price: $${item.price}`;
                productShowAddToCart.innerText = 'Add to Cart';
                productShowCategory.innerText = item.category;
                productShowStock.innerText = `Stock: ${item.rating.count}`;
                productShowRating.innerHTML = '';
                
                // ---> add an event listener to the productShowRating element <---
                for (let i = 0; i < item.rating.rate; i++) {
                    productShowRating.innerHTML += `<i class="fas fa-star" style="color: yellow;"></i>`;
                }
                
            });
            // ---> add an event listener to the productShowClose element <---
            const ViewClose = document.getElementById('ViewClose');
            if (ViewClose) {
                ViewClose.addEventListener('click', function(){
                    productShow.style.display = 'none';
                });
            }

            const h3 = document.createElement('h3');
            h3.innerText = item.title;
            itemDiv.appendChild(h3);

            const pDesc = document.createElement('p');
            if (item.description.split(' ').length > 5) {
                pDesc.innerText = item.description.split(' ').slice(0, 5).join(' ') + '...';
            } else {
                pDesc.innerText = item.description;
            }
            itemDiv.appendChild(pDesc);

            const pPrice = document.createElement('h2');
            pPrice.innerText = `Price: $${item.price}`;
            itemDiv.appendChild(pPrice);

            const button = document.createElement('button');
            button.innerText = "Add to Cart";
            button.id = "add-to-cart-button";
            itemDiv.appendChild(button);
            button.addEventListener('click', () => {
                const item = button.closest('.item');
                const itemTitle = item.querySelector('h3').textContent;
                const itemPrice = item.querySelector('h2').textContent.split(':')[1].trim();
                const itemImage = item.querySelector('img').src;
                const cartIcon = document.getElementById('cart-count');
                const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                const cartItemIndex = existingCartItems.findIndex(item => item.title === itemTitle);
                if (cartItemIndex !== -1) {
                    existingCartItems[cartItemIndex].quantity += 1;
                } else {
                    existingCartItems.push({
                        image: itemImage,
                        title: itemTitle,
                        price: itemPrice,
                        quantity: 1,
                    });
                }
                cartIcon.style.display = 'block';
                cartIcon.textContent = existingCartItems.reduce((total, item) => total + parseInt(item.quantity), 0).toString();
                localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
            });

            // ---> create a heart icon element <---
            const heartIcon = document.createElement('i');
            heartIcon.classList.add('fa-regular', 'fa-heart');
            heartIcon.style.position = 'absolute';
            heartIcon.style.top = '10px';
            heartIcon.style.right = '10px';
            if(localStorage.getItem('likedItems')){
                const likedItems = JSON.parse(localStorage.getItem('likedItems'));
                if(likedItems.some(likedItem => likedItem.title === item.title)){
                    heartIcon.classList.remove('fa-regular');
                    heartIcon.classList.add('fa-solid');
                    heartIcon.style.color = 'red';
                }
            }
            // ---> add an event listener to the heart icon element <---
            heartIcon.addEventListener('click', function () {
                if (heartIcon.classList.contains('fa-regular')) {
                    heartIcon.classList.remove('fa-regular');
                    heartIcon.classList.add('fa-solid');
                    heartIcon.style.color = 'red';
                    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
                    likedItems.push(item);
                    localStorage.setItem('likedItems', JSON.stringify(likedItems));
                } else {
                    heartIcon.classList.remove('fa-solid');
                    heartIcon.classList.add('fa-regular');
                    heartIcon.style.color = 'black';
                }
            });
            if (itemDiv && container) {
                itemDiv.appendChild(heartIcon);
                container.appendChild(itemDiv);
            }
        });
    }
    // ---> catch the error <---
     catch (error) {
        console.error('Error:', error);
    }
}

Items(); // call the Items function

// ---> Show in home page of items section <---
async function Product() {
    // ---> try to fetch data from the api <---
    try {
        const response = await fetch("https://fakestoreapi.com/products?sort=desc"); // Api link
        const data = await response.json();
        data.slice(0, 6).forEach((item) => { // slice the data to 6 items
            const itemDiv = document.createElement('div'); // create a div element
            itemDiv.classList.add('item'); 

            const imgContainer = document.createElement('div'); // create a div element
            imgContainer.style.position = 'relative';

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = "Item";
            imgContainer.appendChild(img);

            // ---> add an event listener to the img element <---
            img.addEventListener('click', function(){
                console.log(item);
                productShow.style.display = 'block';
                productShowImage.src = item.image;
                productShowTitle.innerText = item.title;
                productShowDescription.innerText = item.description;
                productShowPrice.innerText = `Price: $${item.price}`;
                productShowAddToCart.innerText = 'Add to Cart';
                productShowCategory.innerText = item.category;
                productShowStock.innerText = `Stock: ${item.rating.count}`;
                productShowRating.innerHTML = '';
                for (let i = 0; i < item.rating.rate; i++) {
                    productShowRating.innerHTML += `<i class="fas fa-star" style="color: yellow;"></i>`;
                }
                
            });
            // ---> add an event listener to the Model Close element <---
            const ViewClose = document.getElementById('ViewClose');
            if (ViewClose) {
                ViewClose.addEventListener('click', function(){
                    productShow.style.display = 'none';
                });
            }

            itemDiv.appendChild(imgContainer);// append the imgContainer element to the itemDiv element

            const h3 = document.createElement('h3');
            h3.innerText = item.title;
            itemDiv.appendChild(h3);

            const pDesc = document.createElement('p');
            pDesc.innerText = item.title;
            itemDiv.appendChild(pDesc);

            const pPrice = document.createElement('h2');
            pPrice.innerText = `Price: $${item.price}`;
            itemDiv.appendChild(pPrice);
            const pRate = document.createElement('p');
            for (let i = 0; i < item.rating.rate; i++) {
                pRate.innerHTML += `<i class="fas fa-star" style="color: yellow;"></i>`;
            }
            for (let i = 1; i < 5 - item.rating.rate; i++) {
                pRate.innerHTML += `<i class="fas fa-star" style="color: grey;"></i>`;
            }
            itemDiv.appendChild(pRate);


            // ---> create a heart icon element <---
            const heartIcon = document.createElement('i');
            heartIcon.classList.add('fa-regular', 'fa-heart');
            heartIcon.style.position = 'absolute';
            heartIcon.style.top = '10px';
            heartIcon.style.right = '10px';
            // ---> add an event listener to the heart icon element <---
            heartIcon.addEventListener('click', function () {
                if (heartIcon.classList.contains('fa-regular')) {
                    heartIcon.classList.remove('fa-regular');
                    heartIcon.classList.add('fa-solid');
                    heartIcon.style.color = 'red';
                } else {
                    heartIcon.classList.remove('fa-solid');
                    heartIcon.classList.add('fa-regular');
                    heartIcon.style.color = 'black';
                }
            });
            // ---> append the heart icon element to the itemDiv element <---
            if (itemDiv && product) {
                itemDiv.appendChild(heartIcon);
                product.appendChild(itemDiv);
            }
        });
    }
    // ---> catch the error <---
     catch (error) {
        console.error('Error:', error);
    }
}
Product();

// ---> Show in home page of all product section <---
async function allProduct() {
    // ---> try to fetch data from the api <---
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        data.products.forEach((item) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const img = document.createElement('img');
            img.src = item.thumbnail;
            img.alt = "Item";
            itemDiv.appendChild(img);
            img.addEventListener('click', function(){
                 productShow.style.display = 'block';
                productShowImage.src = item.thumbnail;
                productShowTitle.innerText = item.title;
                productShowDescription.innerText = item.description;
                productShowPrice.innerText = `Price: $${item.price}`;
                productShowAddToCart.innerText = 'Add to Cart';
                productShowCategory.innerText = item.category;
                productShowStock.innerText = `Stock: ${item.rating.count}`;
                productShowRating.innerHTML = '';
                for (let i = 0; i < item.rating.rate; i++) {
                    productShowRating.innerHTML += `<i class="fas fa-star" style="color: yellow;"></i>`;
                }
                
            });
            const productShowClose = document.getElementById('product-show-close');
            if (productShowClose) {
                productShowClose.addEventListener('click', function(){
                    productShow.style.display = 'none';
                });
            }


            const title = document.createElement('h3');
            title.innerText = item.title;
            itemDiv.appendChild(title);

            const pPrice = document.createElement('h2');
            pPrice.innerText = `Price: $${item.price}`;
            itemDiv.appendChild(pPrice);

            const pRate = document.createElement('p');
            for (let i = 0; i < item.rating; i++) {
                pRate.innerHTML += `<i class="fas fa-star" style="color: yellow; font-size: 10px;"></i>`;
            }
            for (let i = 1; i < 5 - item.rating; i++) {
                pRate.innerHTML += `<i class="fas fa-star" style="color: grey; font-size: 10px;"></i>`;
            }
            itemDiv.appendChild(pRate);

            const dico = document.createElement('h5');
            dico.innerHTML = `-${item.discountPercentage}%`;
            itemDiv.appendChild(dico);


            const addButton = document.createElement('button');
            addButton.innerText = 'Add to Cart';
            addButton.id = 'add-to-cart-button';
            addButton.addEventListener('click', () => {
                const item = addButton.closest('.item');
                const itemTitle = item.querySelector('h3').textContent;
                const itemPrice = item.querySelector('h2').textContent.split(':')[1].trim();
                const itemImage = item.querySelector('img').src;
                const cartIcon = document.getElementById('cart-count');
                const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                const cartItemIndex = existingCartItems.findIndex(item => item.title === itemTitle);
                if (cartItemIndex !== -1) {
                    existingCartItems[cartItemIndex].quantity = (existingCartItems[cartItemIndex].quantity || 0) + 1;
                } else {
                    cartIcon.textContent = (existingCartItems.length || 0) + 1;
                    existingCartItems.push({
                        image: itemImage,
                        title: itemTitle,
                        price: itemPrice,
                        quantity: 1,
                    });
                }
                cartIcon.style.display = 'block';
                cartIcon.textContent = existingCartItems.reduce((total, item) => total + parseInt(item.quantity), 0).toString();
                localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
            });
            itemDiv.appendChild(addButton);
            allProducts.appendChild(itemDiv);
        });
       
        
        
    }
    // ---> catch the error <---
    catch (error) {
        console.error('Error:', error);
    }
}


allProduct();

// ---> add to cart section <--- 
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('#add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const item = this.closest('.item');
            const itemTitle = item.querySelector('h3').textContent;
            const itemPrice = item.querySelector('h2').textContent.split(':')[1].trim();
            const itemImage = item.querySelector('img').src;
            const cartIcon = document.getElementById('cart-count');
            let existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            let cartItemIndex = existingCartItems.findIndex(item => item.title === itemTitle);
            if (cartItemIndex !== -1) {
                existingCartItems[cartItemIndex].quantity = parseInt(existingCartItems[cartItemIndex].quantity) + 1;
                cartIcon.style.display = 'block';
                cartIcon.textContent = existingCartItems[cartItemIndex].quantity;
            } else {
                cartIcon.textContent = (existingCartItems.length || 0) + 1;
                existingCartItems.push({
                    image: itemImage,
                    title: itemTitle,
                    price: itemPrice,
                    quantity: 1,
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
        });
    });
}); 


// --- product table section --- 
let currentImageIndex = 0;
let images = document.querySelectorAll('.banner-image img');
let totalImages = images.length;

// ---> show the next image <---
function showNextImage() {
    
    images.forEach((image, index) => {
        if (index === currentImageIndex) {
            image.style.transition = 'opacity 1s ease-in-out';
            image.style.opacity = 1;
        } else {
            image.style.transition = 'opacity 1s ease-in-out';
            image.style.opacity = 0;
        }
    });
    currentImageIndex = (currentImageIndex + 1) % totalImages;
}

setInterval(showNextImage,5000);


const categoryBox = document.querySelectorAll('.category-box');
categoryBox.forEach(box => {
    box.addEventListener('click', function(){
        const category = this.getAttribute('data-category');
        const category1 = this.getAttribute('data-category1');
        window.location.href = `./Pages/category.html?category=${category}&category1=${category1}`;
        // window.location.href = "./Pages/category.html";
    });
});





// --- product table section --- 

//  if(allProducts){
//             const users = JSON.parse(localStorage.getItem('users'));
//                 const products = users.vendor.map(user => user.products).flat();
                
//                 products.forEach(element => {
//                     if (allProducts) {
//                         allProducts.innerHTML += `
//                         <div class="item">
//                             <img src="${element.image}" class="productImge" style="width: 200px; height: 200px; object-fit: cover;" alt="Product Image">
//                             <h3>${element.name}</h3>
//                             <h2>Price: $${element.price}</h2>
//                             <p>${element.description} </p>
//                             <h5>-${element.discount}</h5>
//                             <button class="add-to-cart-button" onclick="addToCart(${element})">Add to Cart</button>
//                         </div>
//                         `;  
//                     }
//                 });
//         }














