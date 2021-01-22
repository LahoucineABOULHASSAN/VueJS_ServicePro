<template>
  <div>
    <section id="about-us" class="about grid">
      <img
        src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
        alt="About us"
      />
      <div class="about-div">
        <h2>
          Get to know about
          <span> our company</span>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          officia aspernatur, quae non tempore sed.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
        <button class="button">read more</button>
      </div>
    </section>
    <section class="about-section">
      <div class="about-title">
        <h1>What they say <span> about us</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div class="about-us grid">
        <div>
          <img
            src="https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="avatar"
          />
          <h3>John Doe</h3>
          <span>Profession</span>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aut odit expedita soluta quis nobis"
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1517499610481-9bc77847c8b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="avatar"
          />
          <h3>Jane Doe</h3>
          <span>Profession</span>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aut odit expedita soluta quis nobis"
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'About',
  }
</script>
<style scoped>
  .about .about-div {
    padding: 1rem 0.5rem;
  }
  .about-section {
    background: var(--light);
    padding: 4rem 2rem;
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    text-align: center;
  }
  .about-title {
    margin-bottom: 2rem;
  }
  .about-title h1 {
    font-size: 2rem;
  }
  .about-title p {
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--blue);
  }
  .about-us {
    grid-template-columns: 1fr 1fr;
  }
  #about-us img {
    height: 100%;
  }
  .about-us div {
    padding: 1rem 1.5rem;
    background: #fff;
  }
  .about-us div img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }
  .about-us div p {
    margin-top: 1rem;
    line-height: 1.9rem;
  }
  @media screen and (max-width: 520px) {
    .about.grid,
    .about-us.grid {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .about.grid img {
      height: auto;
    }
    .about.grid p {
      text-align: justify;
      width: 76%;
      margin: 0.7rem auto;
    }
  }
</style>
