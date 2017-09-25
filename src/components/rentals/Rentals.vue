<template>
  <div>

    <section id="landing" class="landing is-fullheight">
      <landing-header></landing-header>
    </section>

    <section class="how is-fullheight">
      <div class="columns">
        <div class="column">

          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h2 class="section-title title is-2 has-text-centered has-text-white" id="how">Properties</h2>

                <div class="property-wrap">
                  <div class="property">
                    <div class="photo" style="background-image: url('/static/images/properties/long-bay-beach.jpg')">
                      <div class="img-meta">
                        <div class="columns is-mobile">
                          <div class="date column is-8">
                            1 Mar - 28 Mar 18
                          </div>
                          <div class="price column has-text-right is-4">
                            20 <abbr>Líf</abbr> <span>/ <abbr>$</abbr>600</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="meta">
                      <div class="property-name">
                        <h4 class="title is-4">Long bay beach house</h4>
                      </div>
                      <p class="property-description">
                        Join 16 other like-minded people in this luxury 16 bed getaway situated in Turks and Caicos.
                      </p>
                      <div class="property-tags field is-grouped is-grouped-multiline">
                        <div class="control property-tags-title">Skills here:</div>
                        <div class="control">
                          <div class="tags has-addons">
                            <span class="tag">Blockchain</span>
                            <span class="tag is-primary">45%</span>
                          </div>
                        </div>
                        <div class="control">
                          <div class="tags has-addons">
                            <span class="tag">Coding</span>
                            <span class="tag is-primary">32%</span>
                          </div>
                        </div>
                        <div class="control">
                          <div class="tags has-addons">
                            <span class="tag">Design</span>
                            <span class="tag is-primary">28%</span>
                          </div>
                        </div>
                        <div class="control">
                          <div class="tags has-addons">
                            <span class="tag">Writing</span>
                            <span class="tag is-primary">20%</span>
                          </div>
                        </div>
                        <div class="control">
                          <div class="tags has-addons">
                            <span class="tag">Entrepreneurship</span>
                            <span class="tag is-primary">12%</span>
                          </div>
                        </div>
                      </div>
                      <div class="action">
                        <div class="columns is-tablet is-vcentered">
                          <div class="book column is-6">
                            <a href="/" class="button is-primary">Reserve my room</a>
                          </div>
                          <div class="scarce column has-text-right is-6">
                            <div class="time">
                              <span>2d:3h:59m:30s</span> to book
                            </div>
                            <div class="min-max">
                              <span>14</span> guests minimum
                            </div>
                            <div class="spaces">
                              <span>2 of 16</span> spaces left
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <weistay-footer></weistay-footer>

  </div>
</template>

<script>
  import LandingHeader from '../partials/layout/LandingHeader.vue'
  import WeistayFooter from '../partials/layout/WeistayFooter.vue'

  export default {
    name: 'rentals',
    components: {
      WeistayFooter,
      LandingHeader
    },
    data () {
      return {
        email: ''
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.errors.add('email', 'Please enter your email', 'Email')
      })
    },
    methods: {
      subscribe: function () {
        if (this.errors.has('email')) {
          alert(this.errors.first('email'))
        } else {
          document.getElementById('mailchimp').submit()
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
