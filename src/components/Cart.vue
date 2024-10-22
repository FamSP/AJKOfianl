
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
            padding: 20px;
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
            display:flex;
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
    <div style="margin-left:750px" id="app">

        <!-- Cart Items -->
        <div class="cart-items">
            <div class="item">
                <img src="https://www.w3schools.com/w3images/jeans4.jpg" alt="Gradient Graphic T-shirt">
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
                <img src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/merchandise/batch-2/98047-19vm/98047-19VM_F.jpg?impolicy=myresize&rw=700" alt="Checkered Shirt">
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
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4UYpBZvbxE2mUOHwWZSIIGp7EPXmvn1npO7CMu5V4_1aLMm-i78xyfkCIDPm1MVwmi4C1IKvXicjw2ni704rVEZ2Y4TWYvWdjalhkOb-96kTpt1gig92VoH4npuhtHgopHlMGpvdO-A&usqp=CAc" alt="Skinny Fit Jeans">
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

<!-- <template>
    <div id="app" class="w3-main" style="margin-left:250px">
      <header>
        <h1>Your Cart</h1>
        <div v-if="cart.length">
          <div class="cart-item" v-for="item in cart" :key="item.id">
            <p>{{ item.name }} - ${{ item.price }}</p>
            <p>Quantity: {{ item.quantity }}</p>
          </div>
          <h3>Total: ${{ totalPrice }}</h3>
        </div>
        <div v-else>
          <p>Your cart is empty.</p>
        </div>
      </header>
      <main>
        <h2>Products</h2>
        <div class="product" v-for="product in products" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>Price: ${{ product.price }}</p>
          <button @click="addToCart(product)">Buy</button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
            id: 1,
          image: "https://images-cdn.ubuy.co.in/65380ba9e86ef865334fcb14-men-denim-jacket-streetwear-hip-hop.jpg",
          name: "Denim Streetwear Jacket",
          price: "$59.99",
          { id: 2, name: 'Checkered Shirt', price: 180 },
          { id: 3, name: 'Skinny Fit Jeans', price: 240 },
        ],
        cart: [],
      };
    },
    computed: {
      totalPrice() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    methods: {
      addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          this.cart.push({ ...product, quantity: 1 });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  header {
    background-color: #f8f8f8;
    padding: 20px;
    text-align: center;
  }
  .product {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
  }
  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }
  button:hover {
    background-color: #218838;
  }
  .cart-item {
    border-bottom: 1px solid #ddd;
    padding: 5px 0;
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
  </style> -->
