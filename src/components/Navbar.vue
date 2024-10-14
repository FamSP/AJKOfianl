<template>
  <nav class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:250px" id="mySidebar">
    <div class="w3-container w3-display-container w3-padding-16">
      <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
      <h3 class="w3-wide"><b>FamSP</b></h3>
    </div>
    <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">
      <router-link to="/shirts" class="w3-bar-item w3-button">Shirts</router-link>
      <router-link to="/dresses" class="w3-bar-item w3-button">Dresses</router-link>
      <router-link to="/jeans" class="w3-bar-item w3-button">Jeans</router-link>
      <router-link to="/jackets" class="w3-bar-item w3-button">Jackets</router-link>
      <router-link to="/shoes" class="w3-bar-item w3-button">Shoes</router-link>
    </div>
    <a href="#footer" class="w3-bar-item w3-button w3-padding">Contact</a> 
  <a href="#footer"  class="w3-bar-item w3-button w3-padding">Subscribe</a>
  </nav>
</template>