const toggleBtn = document.getElementById("container__button");
const elements = document.querySelectorAll(".container__element");

let showElements = true;

const toggleElements = () => {
  elements.forEach((element) => {
    element.style.display = showElements ? "block" : "none";
  });
  showElements = !showElements;
};

function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

toggleBtn.addEventListener("click", debounce(toggleElements, 1000));