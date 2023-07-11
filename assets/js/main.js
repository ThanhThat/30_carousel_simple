const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let isMouseDown = false;
let scrollLeft;
let startX;

const wrapper = $(".wrapper");

wrapper.addEventListener("mousedown", function (e) {
  isMouseDown = true;

  // console.log(e.pageX);

  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;

  // console.log(scrollLeft);
});

wrapper.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

wrapper.addEventListener("mouseup", () => {
  isMouseDown = false;
});

wrapper.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;

  // console.log(e.pageX);

  const x = e.pageX - wrapper.offsetLeft;
  const walk = (x - startX) * 3;
  wrapper.scrollLeft = scrollLeft - walk;
});
