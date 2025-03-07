// ---> watchlist section <---
const watchList = document.getElementById('watch-list');
const heartIcon = document.getElementById('heart-icon');
const card = document.getElementById('card');
const cardImage = document.getElementById('card-image');
const cardTitle = document.getElementById('card-title');
const cardDescription = document.getElementById('card-description');
const cardPrice = document.getElementById('card-price');
const cardButton = document.getElementById('card-button');


// ---> get the watchlist from the local storage <---
const lwatchList = JSON.parse(localStorage.getItem('likedItems') || '[]');

// ---> loop through the watchlist and create a card for each item <---
lwatchList.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('img');
    cardImage.src = item.image;
    cardImage.classList.add('card-image');
    card.appendChild(cardImage);

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title;
    card.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = item.description.length > 30 ? item.description.substring(0, 50) + '...' : item.description;
    card.appendChild(cardDescription);

            const cardPrice = document.createElement('p');
            cardPrice.textContent = ` Price: $${item.price}`;
            cardPrice.classList.add('card-price');
            card.appendChild(cardPrice);

    const cardButton = document.createElement('button');
    cardButton.textContent = 'Add to Cart';
    cardButton.classList.add('card-button');
    card.appendChild(cardButton);

    watchList.appendChild(card);    

    // ---> create a heart icon <---
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

    // ---> add an event listener to the heart icon <---
    heartIcon.addEventListener('click', function () {
        if (heartIcon.classList.contains('fa-regular')) {
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = 'red';
            const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
            likedItems.push(item);
            localStorage.setItem('likedItems', JSON.stringify(likedItems));
        } else {
            if (confirm("Do you want to remove this item from your wishlist?")) {

            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = 'black';
            setTimeout(() => {
                const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
                const index = likedItems.findIndex(likedItem => likedItem.title === item.title);
                if (index !== -1) {
                    likedItems.splice(index, 1);
                }
                localStorage.setItem('likedItems', JSON.stringify(likedItems));
                watchList.removeChild(card);
            },500);
            }
        }
    });

    card.appendChild(heartIcon);
    // watchList.appendChild(card);
});

