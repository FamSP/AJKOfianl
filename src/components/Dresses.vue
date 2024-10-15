<script>
export default {
  name: 'Dresses',
  data() {
    return {
      picture1: "https://e0.pxfuel.com/wallpapers/319/429/desktop-wallpaper-2019-black-dress-scarlett-johansson.jpg",
      picture2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQgnXz0mFRZDZV1XB1fSZq60T8Z1c6GlxOOD8WnuOYHLN5PT1yF4CQpiVBMZHIN2iNW9NVZ-2AS-KGIr_zj_5j7mCm65kgkx9gszEbLi4dCTjwOB2YpQ1wRCh45eq4YC_DANokegR0&usqp=CAc",
      picture3: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4UYpBZvbxE2mUOHwWZSIIGp7EPXmvn1npO7CMu5V4_1aLMm-i78xyfkCIDPm1MVwmi4C1IKvXicjw2ni704rVEZ2Y4TWYvWdjalhkOb-96kTpt1gig92VoH4npuhtHgopHlMGpvdO-A&usqp=CAc",
      picture4: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3lP88tsOyCjepLrEe0woRmU-cO-Nf0ydV3U7FtRIwlM_GM11wxXRwetA8o8_lvGQpiYlIIuxWTYBSeh3YvekJC1WwqXqbHY50i8py6K3Won-IjOJD9xZ0YtYnee7oJ_XFWq7xFA&usqp=CAc",
      picture5: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT7au0PaviVAYRAp_zMzzclrLHHYqGJQjbKOaxiQGzmQNXQQKVmSKpXu6sm2-k8MwM_8UL83wK2M2MqRRfMEeb-AthDNY166pFfsVIca4NnXcqY7dw9V10_NL9RXqv6tczc2C17hGqn&usqp=CAc"
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
    <div class="w3-main" style="margin-left:250px" id="dresses">
  
      <!-- Push down content on small screens -->
      <div class="w3-hide-large" style="margin-top:83px"></div>
      
      <!-- Top header -->
      <header class="w3-container w3-xlarge">
        <p class="w3-left">Dresses</p>
        <p class="w3-right">
          <i class="fa fa-shopping-cart w3-margin-right"></i>
          <i class="fa fa-search"></i>
        </p>
      </header>
  
      <!-- Image header -->
      <div class="w3-display-container w3-container">
        <img :src="picture1" alt="Dresses" style="width:100%">
        <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
          <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
          <h1 class="w3-hide-large w3-hide-medium">New arrivals</h1>
          <h1 class="w3-hide-small">COLLECTION 2024</h1>
          <p><a href="#dresses" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
        </div>
      </div>
  
      <div class="w3-container w3-text-grey" id="dresses">
        <p>5 items</p>
      </div>
  
      <!-- Product grid -->
      <div class="w3-row w3-grayscale">
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <img :src="picture2" style="width:100%">
            <p>Black Evening Dress<br><b>$149.99</b></p>
            <div class="w3-display-middle w3-display-hover">
                <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
              </div>
          </div>
          <div class="w3-container">
            <img :src="picture3" style="width:100%">
            <p>Floral Midi Dress<br><b>$89.99</b></p>
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
            <p>Floral Midi Dress<br><b>$89.99</b></p>
          </div>
          <div class="w3-container">
            <img :src="picture4" style="width:100%">
            <p>Red Cocktail Dress<br><b>$119.99</b></p>
          </div>
        </div>
  
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <img :src="picture5" style="width:100%">
            <p>Casual Summer Dress<br><b>$79.99</b></p>
          </div>
          <div class="w3-container">
            <div class="w3-display-container">
              <img :src="picture5" style="width:100%">
              <span class="w3-tag w3-display-topleft">Sale</span>
              <div class="w3-display-middle w3-display-hover">
                <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
              </div>
            </div>
            <p>Casual Summer Dress<br><b class="w3-text-red">$69.99</b></p>
          </div>
        </div>
  
        <div class="w3-col l3 s6">
          <div class="w3-container">
            <img :src="picture5" style="width:100%">
            <p>Casual Summer Dress<br><b>$79.99</b></p>
          </div>
          <div class="w3-container">
            <img :src="picture2" style="width:100%">
            <p>Black Evening Dress<br><b>$149.99</b></p>
          </div>
        </div>
      </div>
  

    </div>
</template>
