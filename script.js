let progress = document.getElementById("progress");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    // if currentActive is less then one that means we are at the beging and we want to set it to one
    currentActive = 1;
  }
  update();
});

function update() {
  // update the DOM, loop through circles which is a node list. forEach takes a function, use arrow function. For each circle
  // I'm going to get circle and index. Check if the index of that circle is less then currentActive if it is I'm going to add active or remove it
  circles.forEach((circle, id) => {
    if (id < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  let actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
