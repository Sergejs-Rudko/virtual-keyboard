const keys = document.querySelectorAll('.key');

keys.forEach((el) => {
  el.addEventListener('mousedown', () => {
    el.classList.add('key--active');
  });
  el.addEventListener('mouseup', () => {
    el.classList.remove('key--active');
  });
});
