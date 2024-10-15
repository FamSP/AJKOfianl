<script>
export default {
  name: 'Shirts',
  data() {
    return {
      picture1: "https://wallpapers.com/images/hd/uniqlo-u-by-lemaire-i0qjy90oxdsflgqe.jpg",
      picture2: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcV0Hnd2pnpljPj0KtQ48dVL4UXNoXLasxrBjvJFd-MF4oJLUtDX6FKdNibSbf18kJXJpbyyE5ULXxg5aDSBqc1Q2OMAuCNEQAYxPk5ntnZCOHBF9pFc2_COHo1E3siV7OpuGb1H8&usqp=CAc",
      picture3: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQL5M6yc9yDq2yUwEzqpR4gk95t4ttUK8KAKEtoo_7M1PDszGoOJWtVl2Pjq1VIMrVi2TjjgxK9LZmAil_WmoNbnuur-UmQSNsPFpOccuoEqJcSMbdQTl6tvgXSJ0YPjPeidn9_aA&usqp=CAc",
      picture4: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsTsCM6O29V2WoMOBlPJJTbJCKKyPTGDd6pZsnxeSABTvHGxXzorfAIo5wzS1nL05-Fev_DWve-JzBEMYyd_ls4EdR680U96LOkNgNSMy_Q_A3Nxpz7er6kqSXqR9OcGslqQde6Q&usqp=CAc",
      picture5: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSPXwxY9nIDOgLsLAG3tBLpOExLCjgpM3yAmBQMJQiBaIUfjKYIgoAJTvAegs_B96SyWiSTAugtIWkGRACSMlotIa418RiW7hUi3Tg5VEbvbZ6tCD_vkDn90W_bsvmOQGx63T7ztaQ&usqp=CAc"
    }
  }
}
</script>

<template>
    <header class="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
      <div class="w3-bar-item w3-padding-24 w3-wide">FamSP</div>
      <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-24 w3-right" onclick="w3_open()"><i class="fa fa-bars"></i></a>
    </header>
  
    <!-- Overlay effect when opening sidebar on small screens -->
    <div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>
  
    <!-- !PAGE CONTENT! -->
    <div class="w3-main" style="margin-left:250px" id="jackets">
  
      <!-- Push down content on small screens -->
      <div class="w3-hide-large" style="margin-top:83px"></div>
      
      <!-- Top header -->
      <header class="w3-container w3-xlarge">
        <p class="w3-left">Jackets</p>
        <p class="w3-right">
          <i class="fa fa-shopping-cart w3-margin-right"></i>
          <i class="fa fa-search"></i>
        </p>
      </header>
  
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
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <img :src="picture2" style="width:100%">
            <p>Uniqlo U <br><b>$99.99</b></p>
          </div>
          <div class="w3-container">
            <img :src="picture3" style="width:100%">
            <p>Classic Denim <br><b>$79.99</b></p>
          </div>
        </div>
  
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <div class="w3-display-container">
              <img :src="picture3" style="width:100%">
              <span class="w3-tag w3-display-topleft">New</span>
              <div class="w3-display-middle w3-display-hover">
                <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
              </div>
            </div>
            <p>Classic Denim <br><b>$79.99</b></p>
          </div>
          <div class="w3-container">
            <img :src="picture4" style="width:100%">
            <p>Leather Bomber <br><b>$149.99</b></p>
          </div>
        </div>
  
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <img :src="picture5" style="width:100%">
            <p>Parkour Windbreaker<br><b>$59.99</b></p>
          </div>
          <div class="w3-container">
            <div class="w3-display-container">
              <img :src="picture5" style="width:100%">
              <span class="w3-tag w3-display-topleft">Sale</span>
              <div class="w3-display-middle w3-display-hover">
                <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
              </div>
            </div>
            <p>Parkour Windbreaker<br><b class="w3-text-red">$49.99</b></p>
          </div>
        </div>
  
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <img :src="picture5" style="width:100%">
            <p>Parkour Windbreaker<br><b>$59.99</b></p>
          </div>
          <div class="w3-container">
            <img :src="picture2" style="width:100%">
            <p>Uniqlo U <br><b>$99.99</b></p>
          </div>
        </div>
      </div>
  
    </div>
</template>
