document.querySelector('.project-collapse').onclick = function (event) {
  const expanded = this.getAttribute('aria-expanded');

  console.log(expanded);
  if (expanded === 'true') {
    this.innerHTML = `
      View Less
      <i class="fas fa-angle-up"></i>
    `;
  } else {
    console.log('false loo tapi kok');
    this.innerHTML = `
      View More
      <i class="fas fa-angle-down"></i>
    `;
  }
};