const ball = document.getElementById('ball');
const btn = document.getElementById('toggle');

// Taille de la balle
const size = parseFloat(getComputedStyle(ball).width);

// État du jeu
let x = 100,
  y = 100; // position
let vx = 300,
  vy = 200; // vitesse (px/s)
let paused = false;
let last = performance.now();

function update(ts) {
  if (!paused) {
    const dt = (ts - last) / 1000; // secondes depuis le dernier affichage
    x += vx * dt;
    y += vy * dt;

    const w = window.innerWidth;
    const h = window.innerHeight;

    // rebonds horizontaux
    if (x <= 0) {
      x = 0;
      vx *= -1;
    } else if (x + size >= w) {
      x = w - size;
      vx *= -1;
    }

    // rebonds verticaux
    if (y <= 0) {
      y = 0;
      vy *= -1;
    } else if (y + size >= h) {
      y = h - size;
      vy *= -1;
    }

    // appliquer la position
    ball.style.transform = `translate(${x}px, ${y}px)`;
  }

  last = ts;
  requestAnimationFrame(update);
}

// Boucle principale
requestAnimationFrame(update);

// Bouton pause/reprise
btn.addEventListener('click', () => {
  paused = !paused;
  btn.textContent = paused ? 'Reprendre' : 'Pause';
  last = performance.now(); // évite un saut au redémarrage
});

// Rebond instantané si la fenêtre change de taille
window.addEventListener('resize', () => {
  x = Math.min(x, window.innerWidth - size);
  y = Math.min(y, window.innerHeight - size);
});
