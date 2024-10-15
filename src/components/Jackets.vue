<script>
export default {
  name: 'Jackets',
  data() {
    return {
      picture1: "https://files.oaiusercontent.com/file-LjETlHVAyUJYF6YitukdtNoA?se=2024-10-14T07%3A43%3A04Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D25866747-073a-4ac3-ad53-e88caf6d3509.webp&sig=DFCjwPN9XVjtbmIlmytYUxkErUwBY8Z43MxiII7hBzg%3D",
      picture2: "https://images-cdn.ubuy.co.in/65380ba9e86ef865334fcb14-men-denim-jacket-streetwear-hip-hop.jpg",
      picture3: "https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg",
      picture4: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/merchandise/batch-2/98047-19vm/98047-19VM_F.jpg?impolicy=myresize&rw=700",
      picture5: "https://www.angeljackets.com/product_images/m/296/Mens_Biker_cognac_Brown_Real_Lambskin_Leather_Jacket__83068_zoom.webp"
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
            <p>Denim Streetwear Jacket<br><b>$59.99</b></p>
          </div>
          <div class="w3-container">
            <img :src="picture3" style="width:100%">
            <p>Men's Quilted Jacket<br><b>$89.99</b></p>
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
            <p>Men's Quilted Jacket<br><b>$89.99</b></p>
          </div>
          <div class="w3-container">
            <img :src="picture4" style="width:100%">
            <p>Harley Davidson Jacket<br><b>$159.99</b></p>
          </div>
        </div>
  
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <img :src="picture5" style="width:100%">
            <p>Leather Biker Jacket<br><b>$129.99</b></p>
          </div>
          <div class="w3-container">
            <div class="w3-display-container">
              <img :src="picture5" style="width:100%">
              <span class="w3-tag w3-display-topleft">Sale</span>
              <div class="w3-display-middle w3-display-hover">
                <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
              </div>
            </div>
            <p>Leather Biker Jacket<br><b class="w3-text-red">$119.99</b></p>
          </div>
        </div>
  
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <img :src="picture5" style="width:100%">
            <p>Leather Biker Jacket<br><b>$129.99</b></p>
          </div>
          <div class="w3-container">
            <img :src="picture2" style="width:100%">
            <p>Denim Streetwear Jacket<br><b>$59.99</b></p>
          </div>
        </div>
      </div>
  
    </div>
</template>
