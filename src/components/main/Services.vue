<template>
  <div>
    <div id="our-services" class="main-title">
      <h1>Financial <span>Services</span></h1>
      <h5>
        Lorem ipsum dolor, consectetur adipisicing. Lorem ipsum dolor sit.
      </h5>
    </div>
    <section class="services grid">
      <Service
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </section>
  </div>
</template>
<script>
  import Service from './Service'
  import Axios from 'axios'
  export default {
    name: 'Services',
    components: {
      Service,
    },
    created() {
      this.fetchData()
    },
    data() {
      return {
        services: [],
      }
    },
    methods: {
      async fetchData() {
        const url =
          'https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/services.json'
        const res = await Axios.get(url)
        this.services = res.data
      },
    },
  }
</script>
<style lang=""></style>
