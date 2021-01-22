<template>
  <section id="work" class=" work grid">
    <div>
      <h2>
        Our slutions for your <br />
        <span>business growth</span>
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam officia
        aspernatur, quae non tempore sed vel quaerat quas error voluptatem!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
      <button class="button">read more</button>
    </div>
    <ul id="nbrs" class="grid">
      <li v-for="work in works" :key="work.value">
        <span class="nbr">{{ work.value }}</span>
        <p>{{ work.item }}</p>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    name: 'Work',
    data() {
      return {
        works: [
          { item: 'Work Hours', value: 500 },
          { item: 'Great Reviews', value: 500 },
          { item: 'Projects Done', value: 500 },
          { item: 'Awards Won', value: 500 },
        ],
      }
    },
  }
</script>
<style scoped>
  .work.grid {
    background: var(--lightTransparence);
    color: #fff;
  }
  .work ul.grid {
    grid-template-columns: 1fr 1fr;
  }
  .work ul {
    padding: 1rem 0;
  }
  .work ul li {
    padding: 1rem;
    background: var(--dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .work ul li span {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--blue);
  }
  .work ul li p {
    margin: 0.3rem 0;
  }
</style>
