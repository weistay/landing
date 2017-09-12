<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    head: {
      title: {
        inner: 'Weistay',
        separator: '–',
        complement: 'Decentralised accommodation for digital nomads'
      },
      meta: [
        { name: 'description', content: 'A decentralised marketplace for freelancers & digital nomads to book tech meetups with like-minded people around the world.', id: 'desc' },

        // Twitter
        { name: 'twitter:title', content: '' },
        { name: 'twitter:description', content: ''},

        // Google+ / Schema.org
        { itemprop: 'name', content: '' },
        { itemprop: 'description', content: '' },

        // Facebook / Open Graph
        { property: 'fb:app_id', content: '' },
        { property: 'og:title', content: '' },
        { property: 'og:image', content: '' }
      ],
      link: [
        { rel: 'icon', href: require('../static/images/fav.png'), sizes: '16x16', type: 'image/png' }
      ]
    }
  }
</script>
