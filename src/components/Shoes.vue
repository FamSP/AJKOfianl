<script>
export default {
  name: 'Shoes',
  data() {
    return {
      picture1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZjjXzYUHxlX7UJ4Tb5JiflpwbOT2cclizw&s",
    
      products: [
        {
          id: 1,
          image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
          name: "Nike Dunk High Shoes",
          price: "$120.00",
          tag: ""
        },
        {
          id: 2,
          image: "https://www.tracerindia.com/cdn/shop/files/1_a435560c-9b5e-4e7d-b1f4-4d81ecd11c85.jpg?v=1702054676&width=1445",
          name: "Tracer India Shoes",
          price: "$90.00",
          tag: "New"
        },
        {
          id: 3,
          image: "https://contents.mediadecathlon.com/p2363380/k$38a9ed7aa958c889550b68620f84dfc9/men-s-multi-court-tennis-shoes-essential-off-white-artengo-8668903.jpg",
          name: "Artengo Tennis Shoes",
          price: "$60.00",
          tag: ""
        },
        {
          id: 4,
          image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg",
          name: "Adidas Superstar Shoes",
          price: "$80.00",
          tag: "Sale",
          discountedPrice: "$75.00"
        },
        {
          id: 5,
          image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
          name: "Nike Dunk High Shoes",
          price: "$120.00",
          tag: ""
        },
        {
          id: 6,
          image: "https://www.tracerindia.com/cdn/shop/files/1_a435560c-9b5e-4e7d-b1f4-4d81ecd11c85.jpg?v=1702054676&width=1445",
          name: "Tracer India Shoes",
          price: "$90.00",
          tag: "New"
        },
        {
          id: 7,
          image: "https://contents.mediadecathlon.com/p2363380/k$38a9ed7aa958c889550b68620f84dfc9/men-s-multi-court-tennis-shoes-essential-off-white-artengo-8668903.jpg",
          name: "Artengo Tennis Shoes",
          price: "$60.00",
          tag: ""
        },
        {
          id: 8,
          image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg",
          name: "Adidas Superstar Shoes",
          price: "$80.00",
          tag: "Sale",
          discountedPrice: "$75.00"
        }
      ]
    }
  }
}
</script>

<template>
  <!-- !PAGE CONTENT! -->
  <div class="w3-main" style="margin-left:250px" id="shoes">


    <!-- Image header -->
    <div class="w3-display-container w3-container">
      <img :src="picture1" alt="Shoes" style="width:100%">
      <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
        <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
        <h1 class="w3-hide-large w3-hide-medium">New arrivals</h1>
        <h1 class="w3-hide-small">COLLECTION 2024</h1>
        <p><a href="#shoes" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
      </div>
    </div>

    <div class="w3-container w3-text-grey" id="shoes">
      <p>8 items</p>
    </div>

<!-- Product Card -->
<div class="w3-row w3-grayscale">
      <div class="w3-col l3 s6" v-for="product in products" :key="product.id">
        <div class="w3-container">
          <div class="w3-display-container">
            <img :src="product.image" style="width:100%">
            <span v-if="product.tag" class="w3-tag w3-display-topleft">{{ product.tag }}</span>
            <div class="w3-display-middle w3-display-hover">
              <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
            </div>
          </div>
          <p>{{ product.name }}<br>
            <b v-if="product.tag !== 'Sale'">{{ product.price }}</b>
            <b v-else class="w3-text-red">{{ product.discountedPrice }}</b>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>


