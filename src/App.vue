<template>
  <div>
    <Nav />
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Nav,
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Abel&display=swap");
@import url("https://fonts.googleapis.com/css?family=News+Cycle&display=swap");
/* VARIABLES DECLARATION */
:root {
  --primary: #39a275;
  --secondary: #e2375a;
  --dark: #1d1b1b;
  --darker: #111111;
  --light: #e9e9e9;
  --lighter: #f7f7f7;
  --lightTransparence: #191818d9;
  --blue: #3396b5;
  --bluer: #607d8b;
  --animate-duration: 2500ms;
  --animate-delay: 0.9s;
}
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
  transition: all 0.8s ease-in-out;
}
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: inherit;
}
img {
  width: 100%;
}
ul {
  list-style: none;
}
.clear {
  clear: both;
}
.grid {
  display: grid;
  grid-gap: 1rem;
}
.flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.flex-row {
  flex-direction: row;
  justify-content: space-between;
}
/* -------------------------------------- */
/* special classes */
.to-left {
  float: left;
}
.to-right {
  float: right;
}
/* media queries */
@media screen and (min-width: 1368px) {
  #root {
    max-width: 1350px;
    margin: 0 auto;
  }
  #root .topnav {
    max-width: 1350px;
  }
}
</style>
