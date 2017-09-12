<template>
  <div>
    <section id="landing" class="landing is-fullheight">
      <div class="columns">
        <div class="column left-side is-5">

          <landing-header></landing-header>

          <section class="hero is-fullheight is-default is-bold">
            <div class="hero-body">
              <div class="container">
                <div class="column is-full-desktop">
                  <h1 class="title is-2">Travel, live & work with like-minded people around the world</h1>
                  <h2 class="subtitle is-4">A decentralised marketplace for freelancers & digital nomads to book tech meetups with like-minded people around the world.</h2>
                  <div class="action">
                    <div class="field has-addons">
                      <div class="control">
                        <input class="input is-large" type="text" placeholder="@ Subscribe for updates">
                      </div>
                      <div class="control">
                        <a class="button is-large"><span class="icon"><i class="fa fa-arrow-right"></i></span></a>
                      </div>
                      <div class="line-art">
                        <img src="/static/images/landing-line-art.svg" class="line-art-top">
                        <img src="/static/images/landing-line-art.png" class="line-art-bottom">
                      </div>
                    </div>
                  </div>
                  <div class="social">
                    <div class="columns is-mobile">
                      <div class="column">
                        <a href=""><i class="fa fa-slack"></i></a>
                      </div>
                      <div class="column">
                        <a href=""><i class="fa fa-twitter"></i></a>
                      </div>
                      <div class="column">
                        <a href=""><i class="fa fa-github"></i></a>
                      </div>
                      <div class="column">
                        <a href=""><i class="fa fa-medium"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="scroll-down">
                <a v-scroll-to="'#how'"><span>&darr;</span> Scroll down</a>
              </div>
            </div>
          </section>
        </div>

        <div class="column right-side">
          <div class="overlay"></div>
          <section class="hero is-fullheight is-default is-bold">
            <a href="http://www.windingtree.com" class="wt columns is-vcentered">
              <div class="column wt-logo">
                <img src="/static/images/winding-tree-logo-v2.svg">
              </div>
              <div class="column wt-text">
                <span>Built on Winding Tree</span>
              </div>
            </a>
          </section>
        </div>

      </div>
    </section>

    <section id="how" class="how is-fullheight">
      <div class="columns">
        <div class="column">

          <section class="hero is-fullheight">
            <div class="hero-body">
              <div class="container">
                  <div class="property">
                    <div class="photo" style="background-image: url('/static/images/properties/lo')">
                      <div class="img-meta">
                        <div class="columns">
                          <div class="date column is-8">
                            1<abbr>st</abbr> Mar, 2018 - 7<abbr>th</abbr> Mar, 2018
                          </div>
                          <div class="price column has-text-right is-4">
                            20 <abbr>Líf</abbr> <span>/ <abbr>$</abbr>600</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="meta">
                      Hello
                    </div>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import LandingHeader from './layout/LandingHeader.vue'

  export default {
    name: 'landing',
    components: {
      LandingHeader
    },
    data () {
      return {
        msg: 'weistay'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
