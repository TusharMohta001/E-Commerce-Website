// ---> customer section <---
const customer = [
    {
      id: 1,
        name: "coustomer1",
        email: "coustomer1@gmail.com",
        password: "password123",
        userType: "customer"
    },
    {
        id: 2,
        name: "coustomer2",
        email: "coustomer2@gmail.com",
        password: "password123",
        userType: "customer"
    },
    {
        id: 3,
        name: "coustomer3",
        email: "coustomer3@gmail.com",
        password: "password123",
        userType: "customer"
    },
    {
        id: 4,
        name: "coustomer4",
        email: "coustomer4@gmail.com",
        password: "password123",
        userType: "customer"
    },
    {
        id: 5,
        name: "coustomer5",
        email: "coustomer5@gmail.com",
        password: "password123",
        userType: "customer"
    },
    
]

// ---> vendor section <---
const vendor = [
    {
        name: "vendor1",
        email: "vendor1@gmail.com",
        password: "password123",
        userType: "vendor",
        products:[
            {
              "name": "Wireless Headphones",
              "description": "High-fidelity over-ear wireless headphones with noise-canceling feature.",
              "price": 150,
              "quantity": "50",
              "image": "https://images.unsplash.com/photo-1511376777868-611b54f68947",
              "rating": 4.5,
              "discount": "10%"
            },
            {
              "name": "Smartwatch",
              "description": "Water-resistant smartwatch with heart rate monitor and GPS.",
              "price": 200,
              "quantity": "30",
              "image": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
              "rating": 4.7,
              "discount": "15%"
            },
            {
              "name": "Bluetooth Speaker",
              "description": "Portable Bluetooth speaker with deep bass and 12-hour playtime.",
              "price": 80,
              "quantity": "100",
              "image": "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
              "rating": 4.3,
              "discount": "5%"
            },
            {
              "name": "DSLR Camera",
              "description": "24.1 MP DSLR camera with full HD video recording.",
              "price": 500,
              "quantity": "20",
              "image": "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhfGVufDB8fDB8fHww",
              "rating": 4.8,
              "discount": "12%"
            },
            {
              "name": "Laptop",
              "description": "14-inch laptop with 8GB RAM and 256GB SSD.",
              "price": 700,
              "quantity": "15",
              "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
              "rating": 4.6,
              "discount": "10%"
            },
            {
              "name": "Smartphone",
              "description": "Latest model smartphone with 128GB storage and dual camera.",
              "price": 600,
              "quantity": "25",
              "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
              "rating": 4.7,
              "discount": "8%"
            },
            {
              "name": "Tablet",
              "description": "10-inch tablet with 64GB storage and Wi-Fi connectivity.",
              "price": 300,
              "quantity": "40",
              "image": "https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "rating": 4.4,
              "discount": "7%"
            },
            {
              "name": "Fitness Tracker",
              "description": "Wearable fitness tracker with sleep monitoring and step counter.",
              "price": 50,
              "quantity": "60",
              "image": "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "rating": 4.2,
              "discount": "5%"
            },
            {
              "name": "Gaming Console",
              "description": "Next-gen gaming console with 1TB storage.",
              "price": 400,
              "quantity": "10",
              "image": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "rating": 4.9,
              "discount": "10%"
            },
            {
              "name": "Wireless Mouse",
              "description": "Ergonomic wireless mouse with adjustable DPI settings.",
              "price": 25,
              "quantity": "80",
              "image": "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "rating": 4.3,
              "discount": "5%"
            },
            {
              "name": "Mechanical Keyboard",
              "description": "RGB backlit mechanical keyboard with blue switches.",
              "price": 70,
              "quantity": "35",
              "image": "https://images.unsplash.com/photo-1558050032-160f36233a07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "rating": 4.5,
              "discount": "8%"
            },
        ]


    },
    
    {
        name: "vendor2",
        email: "vendor2@gmail.com",
        password: "password123",
        userType: "vendor",
        products: [
            {
                name: "product1",
                description: "product1 description",
                price: 100,
                quantity: 10,
                image: "https://images.unsplash.com/photo-1551021794-03be4ddaf67d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                rating: 4.5,
                discountPercentage: 10,
            },
            {
                name: "product2",
                description: "product2 description",
                price: 200,
                quantity: 20,
                image: "https://images.unsplash.com/photo-1551021794-03be4ddaf67d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                rating: 4.5,
                discountPercentage: 10,
            },
            {
                name: "product3",
                description: "product3 description",
                price: 300,
                quantity: 30,
                image: "https://images.unsplash.com/photo-1551021794-03be4ddaf67d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                rating: 4.5,
                discountPercentage: 10,
            }   
            
        ]
    },
    {
        name: "vendor3",
        email: "vendor3@gmail.com",
        password: "password123",
        userType: "vendor",
        products: [
            {
                "name": "External Hard Drive",
                "description": "1TB portable external hard drive with USB 3.0.",
                "price": 60,
                "quantity": "45",
                "image": "https://images.unsplash.com/photo-1581725645226-92ad3b4c16d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RXh0ZXJuYWwlMjBIYXJkJTIwRHJpdmV8ZW58MHx8MHx8fDA%3D",
                "rating": 4.4,
                "discount": "6%"
              },
              {
                "name": "4K Monitor",
                "description": "27-inch 4K UHD monitor with HDR support.",
                "price": 350,
                "quantity": "22",
                "image": "https://images.unsplash.com/photo-1527800792452-506aacb2101f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "rating": 4.6,
                "discount": "9%"
              },
              {
                "name": "Action Camera",
                "description": "Waterproof action camera with 4K recording capability.",
                "price": 120,
                "quantity": "30",
                "image": "https://plus.unsplash.com/premium_photo-1710961233810-5350d81d4b20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "rating": 4.5,
                "discount": "7%"
              },
              {
                "name": "E-Reader",
                "description": "6-inch e-reader with adjustable front light.",
                "price": 90,
                "quantity": "50",
                "image": "https://images.unsplash.com/photo-1456953180671-730de08edaa7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "rating": 4.4,
                "discount": "5%"
              },
              {
                "name": "Portable Charger",
                "description": "10,000mAh portable charger with fast charging support.",
                "price": 40,
                "quantity": "70",
                "image": "https://images.unsplash.com/photo-1732194357689-0bc28399329b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "rating": 4.3,
                "discount": "6%"
              },
              {
                "name": "Smart Home Speaker",
                "description": "Voice-controlled smart speaker with integrated assistant.",
                "price": 100,
                "quantity": "40",
                "image": "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "rating": 4.5,
                "discount": "8%"
              },
            ]
    },
]
  
// ---> admin section <---
const admin =  [  {
        name: "admin",
        email: "admin@gmail.com",
        password: "password123",
        userType: "admin"
    }
]



localStorage.setItem("users", JSON.stringify({customer, vendor, admin}));


