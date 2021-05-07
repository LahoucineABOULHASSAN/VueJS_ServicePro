export const displayMenu = () => {
  const topNav = document.querySelector(".topnav");
  const responsiveBtn = document.querySelector(".responsive-btn");
  topNav.classList.toggle("responsive");
  responsiveBtn.classList.toggle("times");
  responsiveBtn.classList.toggle("bars");
};
export const isActive = (event) => {
  const navLinks = document.querySelectorAll(".nav-item");
  navLinks.forEach((elem) => {
    if (elem === event.target) {
      elem.classList.add("active");
    } else elem.classList.remove("active");
  });
  scrollTo(event.target.dataset.id);
};
export const scrollTo = (elem) => {
  const sticky = document.querySelector(elem).offsetTop;
  document.body.scrollTop = sticky - 30; // For Safari
  document.documentElement.scrollTop = sticky - 30;
};
