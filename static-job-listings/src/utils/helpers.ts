/* const JOBS = {
  scrollToTop() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
  onScrollElements() {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;
    const button = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;

      header.style.backgroundPositionY = (scrollY / 2) * 1 + "px";
      header.style.opacity = -scrollY / headerHeight + 1;

      button.style.opacity = 0;
      if (scrollY > headerHeight) button.style.opacity = 1;
    });
  },
  moveFiltersOnScroll() {
    const header = document.querySelector(".header"),
      headerHeight = header.offsetHeight;
    const filters = document.querySelector(".filters");

    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;

      filters.classList.remove("fixed");

      if (scrollY > headerHeight) {
        filters.classList.add("fixed");
      }
    });
  },
}; */
const JOBS = {};
export default JOBS;
