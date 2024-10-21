<script>
export default {
  name: 'Jackets',
  data() {
    return {
      picture1: "https://media.gq-magazine.co.uk/photos/65d72c0e18c565af730b67c4/16:9/w_1280,c_limit/Robert.jpeg",
      products: [
        {
          id: 1,
          image: "https://images-cdn.ubuy.co.in/65380ba9e86ef865334fcb14-men-denim-jacket-streetwear-hip-hop.jpg",
          name: "Denim Streetwear Jacket",
          price: "$59.99",
          tag: "",
        },
        {
          id: 2,
          image: "https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg",
          name: "Men's Quilted Jacket",
          price: "$89.99",
          tag: "New",
        },
        {
          id: 3,
          image: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/merchandise/batch-2/98047-19vm/98047-19VM_F.jpg?impolicy=myresize&rw=700",
          name: "Harley Davidson Jacket",
          price: "$159.99",
          tag: "",
        },
        {
          id: 4,
          image: "https://www.angeljackets.com/product_images/m/296/Mens_Biker_cognac_Brown_Real_Lambskin_Leather_Jacket__83068_zoom.webp",
          name: "Leather Biker Jacket",
          price: "$129.99",
          tag: "Sale",
          discountedPrice: "$119.99",
        }
      ] 
    }
  }
}
</script>

<template>
  
    <!-- !PAGE CONTENT! -->
    <div class="w3-main" style="margin-left:250px" id="jackets">
  
      <!-- Push down content on small screens -->
      <div class="w3-hide-large" style="margin-top:83px"></div>
  
      <!-- Image header -->
      <div class="w3-display-container w3-container">
        <img :src="picture1" alt="Jackets" style="width:100%">
        <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
          <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
          <h1 class="w3-hide-large w3-hide-medium">New arrivals</h1>
          <h1 class="w3-hide-small">COLLECTION 2024</h1>
          <p><a href="#jackets" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
        </div>
      </div>
  
      <div class="w3-container w3-text-grey" id="jackets">
        <p>5 items</p>
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
          <p>{{ product.name }}<br>
            <b v-if="product.tag !== 'Sale'">{{ product.price }}</b>
            <b v-else class="w3-text-red">{{ product.discountedPrice }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>