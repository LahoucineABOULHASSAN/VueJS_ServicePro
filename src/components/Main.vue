<template>
  <main className="main-content">
    <Services />
    <Work />
    <About />
    <Features />
  </main>
</template>
<script>
  import Services from './main/Services'
  import Work from './main/Work'
  import About from './main/About'
  import Features from './main/Features'
  export default {
    name: 'Main',
    components: {
      Services,
      Work,
      About,
      Features,
    },
    data() {
      return {
        isScrolled: false,
      }
    },
    mounted() {
      window.onscroll = () => {
        // fix nav on top
        this.fixTop()
        // numbers increament
        const item = document.getElementById('nbrs')
        const services = document.getElementById('our-services')
        const btn = document.querySelector('.to-top')
        let shouldAnimate =
          window.scrollY + window.innerHeight >= item.offsetTop
        let shouldStick =
          window.scrollY + window.innerHeight >= services.offsetTop
        if (shouldAnimate && !this.isScrolled) {
          this.increase()
        }
        if (shouldStick) {
          btn.classList.add('fix-to-top')
        } else btn.classList.remove('fix-to-top')
      }
    },
    methods: {
      fixTop() {
        const nav = document.getElementById('myTopnav')
        if (
          document.body.scrollTop > 36 ||
          document.documentElement.scrollTop > 36
        ) {
          nav.classList.add('sticky')
        } else {
          nav.classList.remove('sticky')
        }
      },
      incEltNbr(elem) {
        const endNbr = Number(elem.innerHTML)
        this.incNbrRec(0, endNbr, elem)
      },
      incNbrRec(i, endNbr, elt) {
        let speed = 2
        if (i <= endNbr) {
          elt.innerHTML = i
          setTimeout(() => {
            this.incNbrRec(i + 1, endNbr, elt)
          }, speed)
        }
      },
      increase() {
        const items = document.querySelectorAll('.nbr')
        items.forEach((item) => this.incEltNbr(item))
        this.isScrolled = true
      },
    },
  }
</script>
<style>
  main h1,
  main h2,
  main h3,
  main h5 {
    margin: 0.7rem 0;
  }
  main span {
    color: var(--primary);
  }
  main p {
    line-height: 1.5rem;
    margin-bottom: 0.7rem;
  }
  .main-content .main-title {
    text-align: center;
    margin: 4rem 0;
  }
  .main-title h5 {
    text-transform: uppercase;
  }
  .button {
    font-size: 1rem;
    font-family: 'Abel', sans-serif;
    font-weight: bold;
    text-transform: capitalize;
    border: none;
    padding: 0.4rem 0.7rem;
    border-radius: 25px;
    background: var(--primary);
  }
  /* services style */
  .services.grid {
    margin: 0 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .work.grid,
  .about.grid {
    grid-template-columns: 1fr 1fr;
    margin: 4rem 0;
  }
  .work.grid {
    padding: 4rem 2rem;
  }
  .about.grid {
    margin: 0 2rem;
    background: var(--light);
  }
  /* Media Queries */
  @media screen and (max-width: 728px) {
    .services.grid {
      margin: 2rem 0;
      grid-template-columns: 1fr 1fr;
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 520px) {
    .services.grid {
      margin: 1.25rem 0;
      grid-template-columns: 1fr;
    }
    .work.grid {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
</style>
