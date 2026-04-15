const body = document.body;
const portfolioButtons = document.querySelectorAll('[data-open-portfolio]');
const closeButtons = document.querySelectorAll('[data-close-portfolio]');
const navButtons = document.querySelectorAll('[data-nav]');

function openPortfolio() {
  body.classList.add('portfolio-open');
  history.replaceState(null, '', '#portfolio');
}

function closePortfolio() {
  body.classList.remove('portfolio-open');
  history.replaceState(null, '', '#hero');
}

portfolioButtons.forEach((button) => {
  button.addEventListener('click', openPortfolio);
});

closeButtons.forEach((button) => {
  button.addEventListener('click', closePortfolio);
});

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.nav;
    if (target === 'portfolio') {
      openPortfolio();
      return;
    }

    closePortfolio();
    const section = document.getElementById(`${target === 'home' ? 'hero' : target}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if (window.location.hash === '#portfolio') {
  openPortfolio();
}
