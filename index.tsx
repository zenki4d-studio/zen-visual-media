import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Cat Tail Trail Animation
const createTail = () => {
  const dots: HTMLDivElement[] = [];
  const mouse = { x: 0, y: 0 };

  for (let i = 0; i < 8; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-tail';
    dot.style.scale = `${1 - i * 0.1}`;
    dot.style.opacity = `${0.6 - i * 0.05}`;
    document.body.appendChild(dot);
    dots.push(dot);
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  const animate = () => {
    let x = mouse.x;
    let y = mouse.y;

    dots.forEach((dot, index) => {
      const nextDot = dots[index + 1] || { offsetLeft: mouse.x, offsetTop: mouse.y };
      
      dot.style.left = x - 6 + 'px';
      dot.style.top = y - 6 + 'px';
      
      const dx = (nextDot instanceof HTMLDivElement ? nextDot.offsetLeft : mouse.x) - x;
      const dy = (nextDot instanceof HTMLDivElement ? nextDot.offsetTop : mouse.y) - y;
      
      x += dx * 0.35;
      y += dy * 0.35;
    });

    requestAnimationFrame(animate);
  };

  animate();
};

createTail();