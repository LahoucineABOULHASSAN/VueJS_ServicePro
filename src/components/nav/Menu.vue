<template>
  <ul class="menu to-right">
    <NavItem v-for="link in links" :key="link.link" :link="link" />
    <li href="#" class="navBtn" @click="displayMenu">
      <i class="bars icon responsive-btn"></i>
    </li>
  </ul>
</template>
<script>
  import NavItem from './NavItem'
  export default {
    name: 'Menu',
    components: {
      NavItem,
    },
    data() {
      return {
        links: [
          { link: '#home', value: 'home' },
          { link: '#our-services', value: 'our services' },
          { link: '#about-us', value: 'about us' },
          { link: '#subscribe', value: 'subscribe' },
        ],
      }
    },
    methods: {
      displayMenu() {
        // get the DOM items
        const topNav = document.querySelector('.topnav')
        const responsiveBtn = document.querySelector('.responsive-btn')
        topNav.classList.toggle('responsive')
        responsiveBtn.classList.toggle('times')
        responsiveBtn.classList.toggle('bars')
      },
    },
  }
</script>
<style></style>
