// TYPEWRITER
const text = "Hey Hadija… I made this just for you ❤️";
let index = 0;
const speed = 80;
const target = document.getElementById("typewriter");

function typeWriter() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// FADE IN ON SCROLL
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  faders.forEach(fade => {
    if (fade.getBoundingClientRect().top < window.innerHeight - 100) {
      fade.classList.add("show");
    }
  });
});

// CONFETTI FUNCTION
function createConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// VALENTINE BUTTON (ONLY TRIGGERS ON CLICK)
const button = document.getElementById("valentineBtn");
const answer = document.getElementById("answer");
const music = document.getElementById("loveMusic");

button.addEventListener("click", () => {
  answer.innerText = "I already know the answer 😌❤️";
  answer.classList.remove("hidden");

  button.innerText = "She said YES 💘";
  button.disabled = true;

  music.volume = 0.6;
  music.play();

  createConfetti();
});
