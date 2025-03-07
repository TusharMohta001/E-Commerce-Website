// ---> register section <---
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const userTypeInput = document.getElementById('userType');
const SignBtn = document.getElementById('creacc');
const logInBtn = document.getElementById('logInBtn');
const logout = document.getElementById('logout');


// ---> check user status <---
function checkUserStatus() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const signMenu = document.getElementById('signmenu');
    const userProfile = document.getElementById('user-profile');

    if (user && user.userType === 'customer') {
        signMenu.style.display = 'none';
        logout.style.display = 'block';
        userProfile.style.display = 'block';
    }
    else if (user && user.userType === 'vendor') {
        signMenu.style.display = 'block';
        logout.style.display = 'none';
        userProfile.style.display = 'none';
    }
}



// ---> register button section <---
if (SignBtn) {
    SignBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const userType = userTypeInput.value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        const users = JSON.parse(localStorage.getItem('users')) || {customer: [], vendor: [], admin: []};
        const newUser = { email, password, userType , products: []};
        console.log(users);
        
        if (userType === 'customer') {
            users.customer.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = './Home.html';
        } else if (userType === 'vendor') {
            users.vendor.push(newUser);
            localStorage.setItem('vendor', JSON.stringify(users.vendor));
            window.location.href = '../Pages/AuthPage/Vendor.html';
        } else if (userType === 'admin') {
            users.admin.push(newUser);
            localStorage.setItem('admin', JSON.stringify(users.admin));
            window.location.href = '../Pages/AuthPage/Admin.html';
        }
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        });
}

// ---> login button section <---
if (logInBtn) {
    logInBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        const userType = userTypeInput.value;
        const users = JSON.parse(localStorage.getItem('users')) || {customer: [], vendor: [], admin: []};
        let user;   
        if (users.customer) {
            user = users.customer.find(u => u.email === email && u.password === password && u.userType === userType);
        }
        if (!user && users.vendor) {
            user = users.vendor.find(u => u.email === email && u.password === password && u.userType === userType);
        }
        if (!user && users.admin) {
            user = users.admin.find(u => u.email === email && u.password === password && u.userType === userType);
        } 
      
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            if (userType === 'customer') {
                window.location.href = '../Home.html';
            } else if (userType === 'vendor') {
                window.location.href = '../Pages/AuthPage/Vendor.html';
            } else if (userType === 'admin') {
                window.location.href = '../Pages/AuthPage/Admin.html';
            }
        } else {
            alert('Invalid email, password, or user type');
        }
    });
}

// ---> logout button section <---
if (logout) {
    logout.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        checkUserStatus();
        console.log("Logged out successfully");
        window.location.href = '../Login.html';
    });
}

// ---> check user status <---
document.addEventListener('DOMContentLoaded', checkUserStatus);
