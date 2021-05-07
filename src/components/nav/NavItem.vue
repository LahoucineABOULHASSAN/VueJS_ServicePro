<template>
  <li>
    <span
      :data-id="link.link"
      :class="link.link === '#our-services' ? 'nav-item active' : 'nav-item'"
      @click="isActive"
    >
      {{ link.value }}
    </span>
  </li>
</template>
<script>
import { isActive } from "../../utilities/nav";
export default {
  name: "NavItem",
  props: {
    link: Object,
  },
  data() {
    return {
      isActive,
    };
  },
};
</script>
