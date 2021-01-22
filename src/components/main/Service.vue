<template>
  <figure class="service">
    <img :src="service.image" :alt="service.title" />
    <div class="service-info">
      <h4>{{ service.title }}</h4>
      <p>{{ service.desc }}</p>
      <button class="button">Read More</button>
    </div>
  </figure>
</template>
<script>
  export default {
    name: 'Service',
    props: {
      service: Object,
    },
  }
</script>
<style scoped>
  .service {
    width: 100%;
    background: var(--light);
  }
  .service img {
    height: 275px;
  }
  .service .service-info {
    padding: 1rem;
  }
  .service-info h4 {
    margin-bottom: 0.7rem;
  }

  @media screen and (max-width: 1020px) {
    .service img {
      height: 200px;
    }
  }
  @media screen and (max-width: 920px) {
    .service img {
      height: 175px;
    }
  }
  @media screen and (max-width: 720px) {
    .service img {
      height: 170px;
    }
  }
  @media screen and (max-width: 520px) {
    .service img {
      height: auto;
    }
  }
</style>
