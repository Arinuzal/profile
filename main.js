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
