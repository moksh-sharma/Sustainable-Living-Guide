let cart = [];

function addToCart(button) {
    const productElement = button.parentElement;
    const productName = productElement.getAttribute('data-name');
    const productDescription = productElement.getAttribute('data-description');
    cart.push({ name: productName, description: productDescription });
    renderCart();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}`;
        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.onclick = () => removeFromCart(item.name);
        li.appendChild(button);
        cartItems.appendChild(li);
    });
}
