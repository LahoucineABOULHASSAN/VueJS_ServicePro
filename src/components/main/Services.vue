<template>
  <div>
    <div id="our-services" class="main-title">
      <h1>Financial <span>Services</span></h1>
      <h5>
        Lorem ipsum dolor, consectetur adipisicing. Lorem ipsum dolor sit.
      </h5>
    </div>
    <section v-if="services.length" class="services grid">
      <Service
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </section>
    <Loading v-else-if="!error" />
    <Error v-if="error" :error="error" />
  </div>
</template>
<script>
import Service from "./Service";
import Loading from "../Loading";
import Error from "../Error";
import Axios from "axios";
export default {
  name: "Services",
  components: {
    Service,
    Loading,
    Error,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      services: [],
      error: null,
    };
  },
  methods: {
    async fetchData() {
      const url =
        "https://raw.githubusercontent.com/LahoucineABOULHASSAN/json_files/main/services.json";
      try {
        const res = await Axios.get(url);
        if (res.status !== 200) {
          throw Error("Couldn't get res");
        }
        this.services = res.data;
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>
<style lang=""></style>
