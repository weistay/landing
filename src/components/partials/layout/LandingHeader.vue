<template>
  <nav class="nav" id="top">
    <div class="nav-left">
      <a class="nav-item brand">
        <span class="logo">
          WEI<span>STAY</span>
        </span>
      </a>
    </div>

    <span class="nav-toggle" onclick="document.querySelector('.nav-menu').classList.toggle('is-active');">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div class="nav-right nav-menu">
      <!--<router-link to="rentals" class="nav-item">
        <strong>Alpha Marketplace</strong>
      </router-link>-->
      <a v-scroll-to="'#how'" class="nav-item">
        How it works
      </a>
      <a v-scroll-to="'#faqs'" class="nav-item">
        FAQ's
      </a>
      <a v-scroll-to="'#join'" class="nav-item">
        Join
      </a>
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'landing-header'
    }
</script>
