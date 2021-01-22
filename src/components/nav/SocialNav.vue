<template>
  <div id="top" class="nav-social">
    <ul class="to-left">
      <li class="date">
        <i class="calendar alternate outline icon"></i>
        {{ date() }}
      </li>
      <li class="phone-num"><i class="phone icon"></i> 080-080-0808</li>
    </ul>
    <ul class="to-right">
      <li>
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
          <i class="facebook f icon"></i>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/" rel="noreferrer" target="_blank">
          <i class="twitter icon"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
          <i class="linkedin icon"></i>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
          <i class="youtube icon"></i>
        </a>
      </li>
    </ul>
    <div class="clear"></div>
  </div>
</template>
<script>
  export default {
    name: 'SocialNav',
    methods: {
      date() {
        return new Date().toDateString()
      },
    },
  }
</script>
<style scoped>
  /* Custom Style */
  .nav-social {
    width: 100%;
    height: 36px;
    padding: 0 2rem;
    background: var(--lightTransparence);
    color: var(--primary);
  }
  .nav-social ul li {
    display: inline-block;
    padding: 0.5rem 0.7rem;
    border-right: 1px solid #fff;
  }
  .nav-social ul.to-right li:hover {
    opacity: 0.5;
  }
  .nav-social ul li:nth-child(1) {
    border-left: 1px solid #fff;
  }
  @media screen and (max-width: 728px) {
    .nav-social {
      text-align: center;
    }
    .nav-social .to-left {
      display: none;
    }
    .nav-social .to-right,
    .nav-social .to-left {
      float: none;
    }
  }
</style>
