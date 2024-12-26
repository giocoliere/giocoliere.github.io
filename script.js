const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

let cursorX = 0;
let cursorY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
});

function animate() {
  const ease = 0.15;
  
  currentX += (cursorX - currentX) * ease;
  currentY += (cursorY - currentY) * ease;
  
  cursor.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
  requestAnimationFrame(animate);
}

animate();