<template>
  <li :class="link.link === '#home' ? 'nav-item active' : 'nav-item'">
    <a :href="link.link" @click="isActive">
      {{ link.value }}
    </a>
  </li>
</template>
<script>
  export default {
    name: 'NavItem',
    props: {
      link: Object,
    },
    methods: {
      isActive(event) {
        const navLinks = document.querySelectorAll('.nav-item')
        navLinks.forEach((elem) => {
          if (elem === event.target.parentElement) {
            elem.classList.add('active')
          } else elem.classList.remove('active')
        })
      },
    },
  }
</script>
