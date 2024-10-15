
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .cart-container {
            display: flex;
            justify-content: space-between;
            background-color: white;
            padding: 15px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .cart-items {
            width: 50%;
            margin-right: 20px;
        }
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #ddd;
        }
        .item img {
            width: 60px;
            height: 60px;
            margin-right: 15px;
        }
        .item-details {
            flex: 1;
        }
        .item-price {
            font-weight: bold;
        }
        .order-summary {
            width: 35%;
            padding: 15px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .summary-item {
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
        }
        .total {
            font-weight: bold;
            font-size: 1.2em;
        }
        .checkout-button {
            width: 100%;
            padding: 10px;
            background-color: black;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
            border-radius: 5px;
        }
        .checkout-button:hover {
            background-color: #444;
        }
    </style>
<template>

    <h1>Your Cart</h1>
    <div class="w3-main" style="margin-left:250px">

        <!-- Cart Items -->
        <div class="cart-items">
            <div class="item">
                <img src="https://via.placeholder.com/60" alt="Gradient Graphic T-shirt">
                <div class="item-details">
                    <p>Gradient Graphic T-shirt</p>
                    <p class="item-price">$145</p>
                </div>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>

            <div class="item">
                <img src="https://via.placeholder.com/60" alt="Checkered Shirt">
                <div class="item-details">
                    <p>Checkered Shirt</p>
                    <p class="item-price">$180</p>
                </div>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>

            <div class="item">
                <img src="https://via.placeholder.com/60" alt="Skinny Fit Jeans">
                <div class="item-details">
                    <p>Skinny Fit Jeans</p>
                    <p class="item-price">$240</p>
                </div>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
            <h2>Order Summary</h2>
            <div class="summary-item">
                <span>Subtotal</span>
                <span>$565</span>
            </div>
            <div class="summary-item">
                <span>Discount (-20%)</span>
                <span>-$113</span>
            </div>
            <div class="summary-item">
                <span>Delivery Fee</span>
                <span>$15</span>
            </div>
            <hr>
            <div class="summary-item total">
                <span>Total</span>
                <span>$467</span>
            </div>
            <input type="text" placeholder="Add promo code" style="width: 100%; padding: 10px; margin: 10px 0;">
            <button class="checkout-button">Go to Checkout</button>
        </div>
    </div>
</template>
