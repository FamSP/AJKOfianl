<template>
<header class="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
    <div class="w3-bar-item w3-padding-24 w3-wide">FamSP</div>
    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-24 w3-right" onclick="w3_open()"><i class="fa fa-bars"></i></a>
  </header>
    <!-- Overlay effect when opening sidebar on small screens -->
  <div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>


  <!-- Push down content on small screens -->
  <div class="w3-hide-large" style="margin-top:83px"></div>

  <div class="w3-main" style="margin-left:250px">
    <!-- Top header -->
    <header class="w3-container w3-xlarge">
      <p class="w3-left"></p>
      <p class="w3-right">
        <i class="fa fa-shopping-cart w3-margin-right"></i>
        <i class="fa fa-search"></i>
      </p>
    </header>
  </div>
</template>