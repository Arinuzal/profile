const profileImage = document.getElementById("profileImage");
profileImage.addEventListener("click", () => {
  alert("Halo! Terima kasih sudah berkunjung. 😊");
});

document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.querySelector(".jumbotron h1");
  greeting.style.opacity = 0;
  greeting.style.transform = "translateY(-20px)";
  
  setTimeout(() => {
    greeting.style.transition = "opacity 1s, transform 1s";
    greeting.style.opacity = 1;
    greeting.style.transform = "translateY(0)";
  }, 500);

  setTimeout(() => {
    greeting.classList.add("active");
  }, 500);
});

const contactLinks = document.querySelectorAll(".contact li");
contactLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1.2)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
  });
});

const typingEffect = document.getElementById("typingEffect");
const texts = ["Web Developer", "Creative Thinker", "Problem Solver"];
let i = 0, j = 0;
let isDeleting = false;

function type() {
  const current = texts[i];
  typingEffect.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
document.addEventListener("DOMContentLoaded", type);


