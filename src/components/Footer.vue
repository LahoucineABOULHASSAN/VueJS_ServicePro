<template>
  <footer>
    <Subscribe />
    <div class="details">
      <Infos />
    </div>
    <p class="copyrights">
      Copyright &copy; 2021 | <span> ServicePro</span>
      <i @click="scrollTo('#home')" class="to-top angle up large icon"></i>
    </p>
  </footer>
</template>
<script>
import Infos from "./footer/Infos";
import Subscribe from "./footer/Subscribe";
import { scrollTo } from "../utilities/nav";
export default {
  name: "Footer",
  components: {
    Subscribe,
    Infos,
  },
  data() {
    return { scrollTo };
  },
};
</script>
<style>
footer .details {
  padding: 4rem 2rem;
  margin-bottom: 1rem;
}
footer .copyrights {
  width: 100%;
  text-align: center;
  background: var(--lightTransparence);
  color: var(--light);
  padding: 1rem;
  position: relative;
}
footer span {
  text-transform: uppercase;
  color: var(--primary);
}
/* Details Style */
.footer-infos.grid {
  text-align: left;
  grid-template-columns: repeat(4, 1fr);
}
.footer-infos h3 {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.footer-infos li {
  cursor: pointer;
  font-family: "Abel", sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}
.footer-infos li:hover {
  color: var(--blue);
}
.footer-infos ul.icons {
  margin-top: 1rem;
}
.footer-infos li.icon-item {
  display: inline-block;
  color: var(--primary);
}
/*  to top button */
.to-top.icon {
  width: 48px;
  height: 48px;
  color: var(--blue);
  background: var(--lightTransparence);
  border: none;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}
.fix-to-top.icon {
  position: fixed;
}
/* Media Queries */
@media screen and (max-width: 768px) {
  footer .footer-infos.grid {
    text-align: center;
  }
  .footer-infos.grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 500px) {
  .footer-infos.grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-infos.grid div:not(:nth-child(4)) {
    display: none;
  }
}
</style>
