<script>
export default {
  name: 'Shirts',
  data() {
    return {
      picture1: "https://wallpapers.com/images/hd/uniqlo-u-by-lemaire-i0qjy90oxdsflgqe.jpg",

      products: [
        {
          id: 1,
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcV0Hnd2pnpljPj0KtQ48dVL4UXNoXLasxrBjvJFd-MF4oJLUtDX6FKdNibSbf18kJXJpbyyE5ULXxg5aDSBqc1Q2OMAuCNEQAYxPk5ntnZCOHBF9pFc2_COHo1E3siV7OpuGb1H8&usqp=CAc",
          name: "Uniqlo U",
          price: "$99.99",
          tag: "",
        },
        {
          id: 2,
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQL5M6yc9yDq2yUwEzqpR4gk95t4ttUK8KAKEtoo_7M1PDszGoOJWtVl2Pjq1VIMrVi2TjjgxK9LZmAil_WmoNbnuur-UmQSNsPFpOccuoEqJcSMbdQTl6tvgXSJ0YPjPeidn9_aA&usqp=CAc",
          name: "Classic Denim",
          price: "$79.99",
          tag: "New",
        },
        {
          id: 3,
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsTsCM6O29V2WoMOBlPJJTbJCKKyPTGDd6pZsnxeSABTvHGxXzorfAIo5wzS1nL05-Fev_DWve-JzBEMYyd_ls4EdR680U96LOkNgNSMy_Q_A3Nxpz7er6kqSXqR9OcGslqQde6Q&usqp=CAc",
          name: "Leather Bomber",
          price: "$149.99",
          tag: "",
        },
        {
          id: 4,
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSPXwxY9nIDOgLsLAG3tBLpOExLCjgpM3yAmBQMJQiBaIUfjKYIgoAJTvAegs_B96SyWiSTAugtIWkGRACSMlotIa418RiW7hUi3Tg5VEbvbZ6tCD_vkDn90W_bsvmOQGx63T7ztaQ&usqp=CAc",
          name: "Parkour Windbreaker",
          price: "$59.99",
          tag: "Sale",
        },
        {
          id: 5,
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcV0Hnd2pnpljPj0KtQ48dVL4UXNoXLasxrBjvJFd-MF4oJLUtDX6FKdNibSbf18kJXJpbyyE5ULXxg5aDSBqc1Q2OMAuCNEQAYxPk5ntnZCOHBF9pFc2_COHo1E3siV7OpuGb1H8&usqp=CAc",
          name: "Uniqlo U",
          price: "$99.99",
          tag: "",
        },
        {
          id: 6,
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQL5M6yc9yDq2yUwEzqpR4gk95t4ttUK8KAKEtoo_7M1PDszGoOJWtVl2Pjq1VIMrVi2TjjgxK9LZmAil_WmoNbnuur-UmQSNsPFpOccuoEqJcSMbdQTl6tvgXSJ0YPjPeidn9_aA&usqp=CAc",
          name: "Classic Denim",
          price: "$79.99",
          tag: "New",
        },
        {
          id: 7,
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsTsCM6O29V2WoMOBlPJJTbJCKKyPTGDd6pZsnxeSABTvHGxXzorfAIo5wzS1nL05-Fev_DWve-JzBEMYyd_ls4EdR680U96LOkNgNSMy_Q_A3Nxpz7er6kqSXqR9OcGslqQde6Q&usqp=CAc",
          name: "Leather Bomber",
          price: "$149.99",
          tag: "",
        },
        {
          id: 8,
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSPXwxY9nIDOgLsLAG3tBLpOExLCjgpM3yAmBQMJQiBaIUfjKYIgoAJTvAegs_B96SyWiSTAugtIWkGRACSMlotIa418RiW7hUi3Tg5VEbvbZ6tCD_vkDn90W_bsvmOQGx63T7ztaQ&usqp=CAc",
          name: "Parkour Windbreaker",
          price: "$59.99",
          tag: "Sale",
        },
      ]
       }
  }
}
</script>

<template>

    <!-- !PAGE CONTENT! -->
    <div class="w3-main" style="margin-left:250px" id="jackets">
  
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
          <p>{{ product.name }}<br><b>{{ product.price }}</b></p>
        </div>
      </div>
    </div>
  </div>
</template>
