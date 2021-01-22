<template>
  <nav>
    <SocialNav />
    <div class="topnav" id="myTopnav">
      <div class="logo to-left">ServicePro</div>
      <Menu />
      <div class="clear"></div>
    </div>
  </nav>
</template>
<script>
  import Menu from './nav/Menu'
  import SocialNav from './nav/SocialNav'
  export default {
    name: 'Nav',
    components: {
      Menu,
      SocialNav,
    },
  }
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
  .menu .nav-item {
    display: inline-block;
    cursor: pointer;
    background: none;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
    font-family: 'News Cycle', sans-serif;
    padding: 0.5rem 0.7rem;
  }
  .nav-item:hover {
    text-transform: uppercase;
  }
  .nav-item:focus {
    outline: none;
  }
  .topnav .logo {
    cursor: default;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.6rem;
  }
  .topnav .navBtn {
    display: none;
  }
  .topnav .navBtn:hover {
    background: none;
    color: var(--blue);
  }
  .topnav .active {
    background: var(--lightTransparence);
    color: var(--blue);
  }
  /* Screen styles */
  @media screen and (max-width: 620px) {
    .topnav {
      padding: 0;
    }
    .topnav .logo {
      text-align: center;
      padding: 0.7rem;
      float: none;
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
    .responsive .menu .nav-item {
      float: none;
      display: block;
      text-align: left;
    }
    .responsive .menu .nav-item a {
      width: 100%;
      display: block;
    }
    .responsive {
      height: auto;
      z-index: 2;
    }
    .responsive .menu {
      float: none;
    }
    .responsive .active {
      border: none;
    }
  }
</style>
