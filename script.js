window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: '#vanta',
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundAlpha: 0.0,
    quantity: 3.0,
  });
});

setTimeout(() => {
  const main = document.querySelector('main');
  main.style.opacity = 1;
  main.style.filter = 'blur(0px)';
}, 200);
