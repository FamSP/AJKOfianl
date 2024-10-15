<script>
export default {
  name: 'Shoes',
  data() {
    return {
      picture1: "https://files.oaiusercontent.com/file-5rk9AOCeBKIJFUfDsPtAL9kz?se=2024-10-14T07%3A27%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df154ad8a-9468-4be9-98fe-08aa1e562398.webp&sig=zqrFtH/L8h/RCkPTm74J1MfED0CjYOEH3WaDjGAW5CM%3D",
      picture2: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
      picture3: "https://www.tracerindia.com/cdn/shop/files/1_a435560c-9b5e-4e7d-b1f4-4d81ecd11c85.jpg?v=1702054676&width=1445",
      picture4: "https://contents.mediadecathlon.com/p2363380/k$38a9ed7aa958c889550b68620f84dfc9/men-s-multi-court-tennis-shoes-essential-off-white-artengo-8668903.jpg",
      picture5: "https://assets.adidas.com/images/w_600,f_auto,q_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_00_standard.jpg"
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
  <div class="w3-main" style="margin-left:250px" id="shoes">

    <!-- Push down content on small screens -->
    <div class="w3-hide-large" style="margin-top:83px"></div>
    
    <!-- Top header -->
    <header class="w3-container w3-xlarge">
      <p class="w3-left">Shoes</p>
      <p class="w3-right">
        <i class="fa fa-shopping-cart w3-margin-right"></i>
        <i class="fa fa-search"></i>
      </p>
    </header>

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

    <!-- Product grid -->
    <div class="w3-row w3-grayscale">
      <div class="w3-col l3 s6">
        <div class="w3-container">
          <img :src="picture2" style="width:100%">
          <p>Nike Dunk High Shoes<br><b>$120.00</b></p>
        </div>
        <div class="w3-container">
          <img :src="picture3" style="width:100%">
          <p>Tracer India Shoes<br><b>$90.00</b></p>
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
          <p>Tracer India Shoes<br><b>$90.00</b></p>
        </div>
        <div class="w3-container">
          <img :src="picture4" style="width:100%">
          <p>Artengo Tennis Shoes<br><b>$60.00</b></p>
        </div>
      </div>

      <div class="w3-col l3 s6">
        <div class="w3-container">
          <img :src="picture5" style="width:100%">
          <p>Adidas Superstar Shoes<br><b>$80.00</b></p>
        </div>
        <div class="w3-container">
          <div class="w3-display-container">
            <img :src="picture5" style="width:100%">
            <span class="w3-tag w3-display-topleft">Sale</span>
            <div class="w3-display-middle w3-display-hover">
              <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
            </div>
          </div>
          <p>Adidas Superstar Shoes<br><b class="w3-text-red">$75.00</b></p>
        </div>
      </div>

      <div class="w3-col l3 s6">
        <div class="w3-container">
          <img :src="picture5" style="width:100%">
          <p>Adidas Superstar Shoes<br><b>$80.00</b></p>
        </div>
        <div class="w3-container">
          <img :src="picture2" style="width:100%">
          <p>Nike Dunk High Shoes<br><b>$120.00</b></p>
        </div>
      </div>
    </div>

  
  </div>
</template>
