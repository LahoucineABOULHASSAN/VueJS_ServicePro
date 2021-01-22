<template>
  <section id="features" class="features grid">
    <div>
      <i class="chat outline big icon"></i>
      <h5>Online Support</h5>
      <p>We support online 24/7 on day</p>
    </div>
    <div>
      <i class="dollar big icon"></i>
      <h5>Money Guarantee</h5>
      <p>30 days money back guarantee</p>
    </div>
    <div>
      <i class="dollar big icon"></i>
      <h5>Money Guarantee</h5>
      <p>30 days money back guarantee</p>
    </div>
    <div>
      <i class="payment outline big icon"></i>
      <h5>Secure Payement</h5>
      <p>All payement are Secured and Trusted</p>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'Features',
  }
</script>
<style scoped>
  .features {
    padding: 0 2rem;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 4rem;
  }
  .features div {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  .features div i {
    color: var(--primary);
  }
  .features div p {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 728px) {
    .features {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 520px) {
    .features {
      grid-template-columns: 1fr;
    }
  }
</style>
