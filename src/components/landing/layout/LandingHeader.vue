<template>
  <nav class="nav" id="top">
    <div class="nav-left">
      <a class="nav-item">
        <img src="/static/images/logo.svg" alt="Weistay">
      </a>
    </div>

    <span class="nav-toggle" onclick="document.querySelector('.nav-menu').classList.toggle('is-active');">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div class="nav-right nav-menu">
      <a class="nav-item">
        Home
      </a>
      <a v-scroll-to="'#how'" class="nav-item">
        How it works
      </a>
      <a class="nav-item">
        FAQ's
      </a>
      <a class="nav-item">
        Contact
      </a>
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'landing-header'
    }
</script>
