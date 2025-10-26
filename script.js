const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 500);


 function cekKataRahasia() {
     const input = document.getElementById("secretInput").value.trim().toLowerCase();
     if (input === "icii") {
       window.location.href = "secret.html";
     } else {
       alert("Kata rahasia salah! Coba lagi ya :)");
     }
   }