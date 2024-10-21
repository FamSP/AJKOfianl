<script>
export default {
  name: 'janes',
  data(){
    return{
      picture1:"https://www.w3schools.com/w3images/jeans.jpg",


      products: [
        {
          id: 1,
          image: "https://www.w3schools.com/w3images/jeans1.jpg",
          name: "Ripped Skinny Jeans",
          price: "$24.99",
          tag: "",
        },
        {
          id: 2,
          image: "https://www.w3schools.com/w3images/jeans2.jpg",
          name: "Mega Ripped Jeans",
          price: "$19.99",
          tag: "New",
        },
        {
          id: 3,
          image: "https://www.w3schools.com/w3images/jeans3.jpg",
          name: "Washed Skinny Jeans",
          price: "$20.50",
          tag: "",
        },
        {
          id: 4,
          image: "https://www.w3schools.com/w3images/jeans4.jpg",
          name: "Vintage Skinny Jeans",
          price: "$14.99",
          tag: "Sale",
        },
        {
          id: 5,
          image: "https://www.w3schools.com/w3images/jeans1.jpg",
          name: "Ripped Skinny Jeans",
          price: "$24.99",
          tag: "",
        },
        {
          id: 6,
          image: "https://www.w3schools.com/w3images/jeans2.jpg",
          name: "Mega Ripped Jeans",
          price: "$19.99",
          tag: "New",
        },
        {
          id: 7,
          image: "https://www.w3schools.com/w3images/jeans3.jpg",
          name: "Washed Skinny Jeans",
          price: "$20.50",
          tag: "",
        },
        {
          id: 8,
          image: "https://www.w3schools.com/w3images/jeans4.jpg",
          name: "Vintage Skinny Jeans",
          price: "$14.99",
          tag: "Sale",
        },
      ]
    }
  }

}
</script>

<template>
  <!-- !PAGE CONTENT! -->
   <HeaderBox></HeaderBox>
  <div class="w3-main" style="margin-left:250px" id="janes">

    <!-- Image header -->
    <div class="w3-display-container w3-container">
      <img :src="picture1" alt="Jeans" style="width:100%">
      <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
        <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
        <h1 class="w3-hide-large w3-hide-medium">New arrivals</h1>
        <h1 class="w3-hide-small">COLLECTION 2024</h1>
        <p><a href="#jeans" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
      </div>
    </div>

    <div class="w3-container w3-text-grey" id="jeans">
      <p>8 items</p>
    </div>

        <!-- Product grid -->
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
          <p>{{ product.name }}<br><b>{{ product.price }}</b></p>
        </div>
      </div>
    </div>
  </div>
</template>