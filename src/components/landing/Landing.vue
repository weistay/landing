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
                  <h2 class="subtitle is-4">A decentralised home rental marketplace for freelancers & digital nomads to book tech meetups with like-minded people around the world.</h2>
                  <div class="action">
                    <form action="//discoveryholidayhomes.us5.list-manage.com/subscribe/post?u=7905298e52d9ad2579d34f77f&amp;id=693fd2e294" method="post" id="mailchimp" target="_blank" novalidate>
                      <div class="field has-addons">
                        <div class="control">
                          <input class="input is-large" v-validate="'required|email'" v-model="email" name="email" type="text" placeholder="@ Subscribe for updates">
                          <input class="hidden" v-bind:value="email" name="EMAIL">
                        </div>
                        <div class="control">
                          <a :class="{'button is-large is-success': !errors.has('email'), 'button is-large': errors.has('email') }" @click="subscribe"><span class="icon"><i class="fa fa-arrow-right"></i></span></a>
                        </div>
                        <div class="line-art">
                          <img src="/static/images/landing-line-art.svg" class="line-art-top">
                          <img src="/static/images/landing-line-art.png" class="line-art-bottom">
                        </div>
                      </div>
                    </form>
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

    <section class="how is-fullheight">
      <div class="columns">
        <div class="column">

          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h2 class="section-title title is-2 has-text-centered has-text-white" id="how">How it works</h2>
                <div class="property-wrap">
                  <!-- Property -->
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

                  <!-- Tips -->
                  <div class="pt pt-left pt-1">
                    <div class="columns is-vcentered">
                        <div class="column pt-tip">
                          <span class="pt-title">1. Where</span>
                          <p>A preview of where you can live & work with like-minded people</p>
                        </div>
                        <div class="column line"></div>
                    </div>
                  </div>

                  <div class="pt pt-left pt-2">
                    <div class="columns is-vcentered">
                      <div class="column pt-tip">
                        <span class="pt-title">2. Start & end dates</span>
                        <p>See the checkin & checkout date for this meetup</p>
                      </div>
                      <div class="column line"></div>
                    </div>
                  </div>

                  <div class="pt pt-right pt-3">
                    <div class="columns is-vcentered">
                      <div class="column line"></div>
                      <div class="column pt-tip">
                        <span class="pt-title">3. Líf tokens</span>
                        <p>Pay in Líf, a new cryptocurrency - <a href="">Learn more about Líf</a></p>
                      </div>
                    </div>
                  </div>

                  <div class="pt pt-right pt-4">
                    <div class="columns is-vcentered">
                      <div class="column line"></div>
                      <div class="column pt-tip">
                        <span class="pt-title">4. Skills</span>
                        <p>Cumulative skills from guests who've booked</p>
                      </div>
                    </div>
                  </div>

                  <div class="pt pt-left pt-5">
                    <div class="columns is-vcentered">
                      <div class="column pt-tip">
                        <span class="pt-title">6. Reserve with Líf</span>
                        <p>Tokens are re-funded if min guests aren't hit & time runs out</p>
                      </div>
                      <div class="column line"></div>
                    </div>
                  </div>

                  <div class="pt pt-right pt-6">
                    <div class="columns is-vcentered">
                      <div class="column line"></div>
                      <div class="column pt-tip">
                        <span class="pt-title">5. Time & rooms left</span>
                        <p>Book your room before time or space runs out</p>
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

    <section class="faqs is-fullheight">
        <div class="columns is-vcentered">
          <div class="column left-side is-7">
            <section id="faqs" class="hero">
              <div class="hero-body">
                <div class="nothing">
                  <div class="columns is-tablet">
                    <div class="column">
                      <div class="faq">
                        <img src="/static/images/who.svg">
                        <h5 class="title is-5">Who is Weistay for?</h5>
                        <p>Weistay is for anyone who loves to work, travel and meet like-minded people.</p>
                        <p>This may include other freelancers, remote workers, entrepreneurs, developers, writers, designers, digital nomads, social media managers, artists, musicians, data scientists, growth hackers and much more. </p>
                      </div>
                    </div>
                    <div class="column">
                      <div class="faq">
                        <img src="/static/images/solution.svg">
                        <h5 class="title is-5">What problem does Weistay solve?</h5>
                        <p>Weistay solves the problem of freelancers & remote workers feeling isolated with a lack entrepreneurial spirit, a sense of community and a group of like-minded people they can meet, bounce ideas off and learn from.</p>
                        <p>Weistay also makes expensive self-catering accommodation for individuals & small groups cheaper through group renting.</p>
                      </div>
                    </div>
                  </div>
                  <div class="columns is-tablet">
                    <div class="column">
                      <div class="faq">
                        <img src="/static/images/network.svg">
                        <h5 class="title is-5">Why is Weistay decentralised & open source?</h5>
                        <p>Using blockchain technology & smart contracts, Weistay can connect travelers with accommodation providers & other travelers directly, without centralised middleman like Airbnb, who take high commissions (up to %20) & guest service fees (up to 12%).</p>
                        <p>Weistay is open source to enable & encourage its own users to help build the platform and take it in a direction that suits everybody.</p>
                      </div>
                    </div>
                    <div class="column">
                      <div class="faq">
                        <img src="/static/images/travel.svg">
                        <h5 class="title is-5">How do I get involved?</h5>
                        <p>If you're a traveler interested in using Weistay, please subscribe for updates to our first release.</p>
                        <p>If you're a property owner looking to make some extra money by renting your space to freelancers & remote workers, please send us an <a href="mailto:danny@rentivo.com">email</a>.
                        <p>If you're a developer/contributor, please check out our <a href="https://github.com/weistay">Github</a>.</p>
                      </div>
                    </div>
                  </div>
                  <div class="columns is-tablet">
                    <div class="column">
                      <div class="faq">
                        <img src="/static/images/lif.svg">
                        <h5 class="title is-5">What are Líf tokens?</h5>
                        <p>In a nutshell, Líf tokens are an ERC20 digital token issued by Winding Tree, who are a platform to connect suppliers & sellers in a single marketplace and build travel applications on. It's essentially a set of smart contracts on Ethereum with a DAO governance platform that allows for the holders of Líf to participate in the development of those contracts.</p>
                        <p>Weistay uses Líf tokens as a form of payment between travelers and accommodation providers.</p>
                      </div>
                    </div>
                    <div class="column">
                      <div class="faq">
                        <img src="/static/images/alpha.svg">
                        <h5 class="title is-5">When will Weistay's alpha be ready?</h5>
                        <p>We're aiming for the 1st of November, 2017. Subscribe for updates for more information.</p>
                        <p>If you're interested in joining the project, please visit our <a href="https://github.com/weistay">Github</a>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="column right-side">
            <h2 class="section-title title is-2">FAQ's</h2>
            <div class="overlay"></div>
            <section class="hero is-fullheight is-default">
              <div class="hero-body has-text-centered">
                <div class="hero-inner">
                  <img src="/static/images/thinking.svg">
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
    name: 'landing',
    components: {
      LandingHeader,
      WeistayFooter
    },
    data () {
      return {
        email: ''
      }
    },
    mounted: function () {
      this.$nextTick(function () {
          this.errors.add('email', 'Please enter your email', 'Email');
      });
    },
    methods: {
      subscribe: function () {
        if (this.errors.has('email')) {
            alert(this.errors.first('email'));
        } else {
            document.getElementById("mailchimp").submit();
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
