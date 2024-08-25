document.addEventListener("DOMContentLoaded", function () {
  const gorny = document.getElementById("gorny");
  const dolny = document.getElementById("dolny");
  let isOpen = false;

  gorny.addEventListener("click", function () {
    if (isOpen) {
      gorny.style.animation = "closeBook 2s linear forwards";
    } else {
      gorny.style.animation = "openBook 2s linear forwards";
    }
    isOpen = !isOpen; // Przełączamy stan otwarcia
  });
  dolny.addEventListener("click", function () {
    if (isOpen) {
      gorny.style.animation = "closeBook 2s linear forwards";
    } else {
    }
    isOpen = !isOpen; // Przełączamy stan otwarcia
  });
});
