document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    console.log(anchor);
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});