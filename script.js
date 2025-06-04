// ===== Task 2: Image Carousel Logic =====
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel-image");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  // Show the image at currentIndex, hide others
  function updateCarousel() {
    images.forEach((img, idx) => {
      img.classList.toggle("active", idx === currentIndex);
    });
  }

  // Show next image
  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  // Show previous image
  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  // Attach click events
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  // (Optional) Auto-advance every 5 seconds
  // setInterval(showNext, 5000);
});

// ===== Task 3: Fetch Data from a Public API (Random Joke) =====
const getJokeBtn = document.getElementById("getJokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");

getJokeBtn.addEventListener("click", () => {
  // Example: Using the Official Joke API
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      // data has {setup: "...", punchline: "..."}
      jokeDisplay.innerHTML = `
        <p class="joke-setup">${data.setup}</p>
        <p class="joke-punchline">${data.punchline}</p>
      `;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      jokeDisplay.textContent = "Oops! Could not fetch a joke right now.";
    });
});
