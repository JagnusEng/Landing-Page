document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar__list');


    sections.forEach(section => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.href = `#${section.id}`;
        navLink.textContent = section.getAttribute('data-nav');
        navLink.classList.add('menu__link');
        navItem.appendChild(navLink);
        navbar.appendChild(navItem);
    });

    const setActiveSection = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const navLink = navbar.querySelector(`[href="#${section.id}"]`);
            const sectionBottom = rect.top + section.clientHeight;
            if (rect.top >= 0 && sectionBottom <= window.innerHeight * 0.5) {
                section.classList.add('active');
                navLink.classList.add('active');
            } else {
                section.classList.remove('active');
                navLink.classList.remove('active');
            }
        });
    };

    navbar.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.nodeName === 'A') {
            const section = document.querySelector(e.target.getAttribute('href'));
            section.scrollIntoView({behavior: 'smooth'});
        }
    });

    window.addEventListener('scroll', setActiveSection);

});