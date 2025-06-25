<script>
  const soalan = document.querySelectorAll('.faq-question');
  soalan.forEach(button => {
    button.addEventListener('click', () => {
      const jawapan = button.nextElementSibling;
      jawapan.style.display = (jawapan.style.display === 'block') ? 'none' : 'block';
    });
  });
</script>


function toggleSub(element) {
  const sub = element.nextElementSibling;
  sub.classList.toggle("hidden");
}
