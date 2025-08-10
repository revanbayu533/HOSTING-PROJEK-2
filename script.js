// Membuat confetti
function createConfetti() {
 const confetti = document.createElement('div');
 confetti.classList.add('confetti');
 confetti.style.left = Math.random() * window.innerWidth + 'px';
 confetti.style.width = `${Math.random() * 10 + 5}px`;
 confetti.style.height = confetti.style.width;
 confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
 document.body.appendChild(confetti);
 setTimeout(() => confetti.remove(), 5000);
}

// Membuat efek kilau (sparkle)
function createSparkle() {
 const sparkle = document.createElement('div');
 sparkle.classList.add('sparkle');
 sparkle.style.left = Math.random() * window.innerWidth + 'px';
 sparkle.style.top = Math.random() * window.innerHeight + 'px';
 document.body.appendChild(sparkle);
 setTimeout(() => sparkle.remove(), 3000);
}

// Membuat confetti dan sparkle secara berkala
setInterval(createConfetti, 50); // Lebih sering untuk efek meriah
setInterval(createSparkle, 200);