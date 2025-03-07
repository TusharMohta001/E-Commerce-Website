
const urlParams = new URLSearchParams(window.location.search);
const categoryData = urlParams.get('category');
console.log(categoryData);
if(categoryData){
    const api = "https://fakestoreapi.com/products"
async function category(){
    try{
        const response = await fetch(api);
        const data = await response.json();
        data.forEach(element => {
            if(element.category === categoryData) {
                const item = document.createElement("div");
                item.classList.add("category-item");
                item.innerHTML = `
                    <img class="category-item-image" src="${element.image}" alt="${element.title}">
                    <h2 class="category-item-title">${element.title }</h2>
                    <h5 class="category-item-price">$ ${element.price}</h5>
                    <button class="category-item-button" >Add to Cart</button>
                    `;
                    console.log(element);
                    document.querySelector('.category-container').appendChild(item);
            }
        });
    }
    

    
    catch (error) {
        console.error('Error:', error);
    }
}
category();
}


const urlParrams = new URLSearchParams(window.location.search);
const categoryDataa = urlParams.get('category1');
console.log(categoryDataa);

if(categoryDataa){
    const api = "https://dummyjson.com/products"
async function category(){
    try{
        const response = await fetch(api);
        const data = await response.json();
        data.products.forEach(element => {
            if(element.category === categoryDataa) {
                const item = document.createElement("div");
                item.classList.add("category-item");
                item.innerHTML = `
                    <img class="category-item-image" src="${element.thumbnail}" alt="${element.title}">
                    <h2 class="category-item-title">${element.title }</h2>
                    <h5 class="category-item-price">$ ${element.price}</h5>
                    <button class="category-item-button" onclick="addToCart()">Add to Cart</button>
                    `;
                    console.log(element);
                    document.querySelector('.category-container').appendChild(item);
            }
        });
    }
    

    
    catch (error) {
        console.error('Error:', error);
    }
}
category();
}