const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const quoteForm = document.querySelector('#quote-form');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const business = formData.get('business')?.toString().trim() || '';
    const details = formData.get('details')?.toString().trim() || '';

    const subject = encodeURIComponent(`Homepage redesign inquiry from ${business || name || 'website visitor'}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business}`,
        '',
        'Focus:',
        details,
      ].join('\n')
    );

    window.location.href = `mailto:contact@gojuggernaut.com?subject=${subject}&body=${body}`;
  });
}
