<template>
  <ul class="menu to-right">
    <NavItem v-for="link in links" :key="link.link" :link="link" />
    <li href="#" class="navBtn" @click="displayMenu">
      <i class="bars icon responsive-btn"></i>
    </li>
  </ul>
</template>
<script>
import NavItem from "./NavItem";
import { displayMenu } from "../../utilities/nav";
export default {
  name: "Menu",
  components: {
    NavItem,
  },
  data() {
    return {
      links: [
        { link: "#our-services", value: "services" },
        { link: "#work", value: "solutions" },
        { link: "#about-us", value: "about us" },
        { link: "#subscribe", value: "subscribe" },
      ],
      displayMenu,
    };
  },
};
</script>
