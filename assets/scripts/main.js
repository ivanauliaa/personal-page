console.log(window.location.href);

window.onload = function () {
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      document.querySelector('.theme-switch i').className = 'far fa-moon';
      document.querySelector('.navbar').className = 'navbar navbar-expand-lg navbar-dark fixed-top bg-main';
    }
  }
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');

    document.querySelector('.theme-switch i').className = 'far fa-moon';
    document.querySelector('.navbar').className = 'navbar navbar-expand-lg navbar-dark fixed-top bg-main';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');

    document.querySelector('.theme-switch i').className = 'fas fa-moon';
    document.querySelector('.navbar').className = 'navbar navbar-expand-lg navbar-light fixed-top bg-main';
  }
}
toggleSwitch.addEventListener('change', switchTheme, false);

const toggleCollapse = document.querySelector('.project-card-collapse');
function collapseProjects(_) {
  const expanded = this.getAttribute('aria-expanded');

  if (expanded === 'true') {
    this.innerHTML = `
      View Less
      <i class="fas fa-angle-up"></i>
    `;
  } else {
    this.innerHTML = `
      View More
      <i class="fas fa-angle-down"></i>
    `;
  }
};
toggleCollapse.addEventListener('click', collapseProjects, false);