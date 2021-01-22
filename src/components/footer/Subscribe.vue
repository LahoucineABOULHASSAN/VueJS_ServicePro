<template>
  <div id="subscribe" class="subscribe">
    <form>
      <label htmlFor="email">Subscribe</label>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="E-mail Address"
        required
      />
      <input type="submit" value="Subscribe" />
    </form>
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
  </div>
</template>
<script>
  export default {
    name: 'Subscribe',
    data() {
      return {
        email: '',
      }
    },
  }
</script>
<style scoped>
  /* subscribe style */
  .subscribe {
    padding: 1rem;
    background: var(--lightTransparence);
    color: var(--light);
  }
  .subscribe form {
    display: inline-block;
  }
  .subscribe form label {
    font-family: 'Abel', sans-serif;
    font-weight: bold;
  }
  .subscribe form input[type='email'] {
    background: var(--light);
    border: 1px solid var(--dark);
    border-radius: 3px;
    padding: 0.5rem;
    margin: 0 0.25rem;
  }
  .subscribe form input[type='submit'] {
    background: var(--dark);
    color: var(--light);
    border: none;
    border-radius: 3px;
    padding: 0.5rem;
  }
  .subscribe ul {
    padding: 0.5rem 0;
  }
  .subscribe ul li {
    display: inline-block;
    color: var(--secondary);
    margin: 0 0.25rem;
  }
  .subscribe ul li:hover {
    color: var(--primary);
  }
  @media screen and (max-width: 500px) {
    .subscribe form {
      width: 100%;
      text-align: center;
    }
    .subscribe ul {
      display: none;
    }
  }
</style>
