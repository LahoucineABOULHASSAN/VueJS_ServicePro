<template>
  <nav>
    <SocialNav />
    <div class="topnav flex flex-row" id="myTopnav">
      <div class="logo" @click="scrollTo('#home')">ServicePro</div>
      <Menu />
    </div>
  </nav>
</template>
<script>
import Menu from "./nav/Menu";
import SocialNav from "./nav/SocialNav";
import { scrollTo } from "../utilities/nav";
export default {
  name: "Nav",
  components: {
    Menu,
    SocialNav,
  },
  data() {
    return {
      scrollTo,
    };
  },
};
</script>
<style>
/* Nav Bar Items Style */
.sticky {
  background: var(--lightTransparence);
  top: 0;
}
.topnav {
  width: 100%;
  height: 42px;
  color: #fff;
  text-transform: uppercase;
  padding: 0 2rem;
  position: fixed;
  z-index: 2;
  overflow: hidden;
}
.topnav .menu {
  text-transform: capitalize;
}
.menu li {
  display: inline-block;
}
.menu .nav-item {
  cursor: pointer;
  background: none;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-family: "News Cycle", sans-serif;
  padding: 0.5rem 0.7rem;
}
.nav-item:hover {
  text-transform: uppercase;
}
.nav-item:focus {
  outline: none;
}
.topnav .logo {
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.6rem;
}
.topnav .navBtn {
  display: none;
}
.topnav .navBtn:hover {
  background: none;
  color: var(--secondary);
}
.topnav .active {
  background: var(--lightTransparence);
  color: var(--secondary);
}
/* Screen styles */
@media screen and (max-width: 620px) {
  .topnav {
    padding: 0;
  }
  .topnav.flex-row {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  }
  .topnav .logo {
    width: 100%;
    text-align: center;
    padding: 0.7rem;
  }
  .topnav .navBtn {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.9rem;
  }
  .topnav .menu .nav-item:hover {
    border: none;
  }
  .responsive .menu {
    width: 100%;
  }
  .responsive .menu li {
    display: block;
  }
  .responsive .menu .nav-item {
    width: 100%;
    display: block;
    text-align: left;
  }
  .responsive {
    height: auto;
    z-index: 2;
  }
  .responsive .active {
    border: none;
  }
}
</style>
