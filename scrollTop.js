// Mostrar el botón cuando se hace scroll hacia abajo
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});
// Scroll suave al hacer clic
scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}); 