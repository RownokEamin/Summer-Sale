let cartItems = [];
let total = 0;
let couponApplied = false;

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - TK ${item.price}`;
        cartItemsList.appendChild(li);
    });
    document.getElementById("cart-total").textContent = total;
}

function addToCart(name, price) {
    cartItems.push({ name, price });
    total += price;
    updateCart();
}

function applyCoupon() {
    const couponInput = document.getElementById("coupon-input");
    if (couponInput.value === "SELL200" && !couponApplied) {
        const couponDiscount = total * 0.2; // 20% discount
        total -= couponDiscount;
        couponApplied = true;
        updateCart();
    }
}

function checkout() {
    if (total === 0) {
        alert("Your cart is empty. Add some items to your cart.");
        return;
    }
    
    if (!couponApplied) {
        alert("Please apply a valid coupon code before checking out.");
        return;
    }

    alert("Congratulations! Your purchase is successful. Thank you for shopping with us!");
    cartItems = [];
    total = 0;
    couponApplied = false;
    updateCart();
}
