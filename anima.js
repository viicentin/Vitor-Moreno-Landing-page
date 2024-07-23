document.addEventListener("DOMContentLoaded", function() {
    const elementsToShow = [
        document.getElementById('hidden'),
        document.getElementById('hidden1'),
        document.getElementById('hidden2'),
        document.getElementById('hidden3'),
        document.getElementById('hidden4'),
        document.getElementById('hidden5'),
        document.getElementById('hidden6'),
        document.getElementById('hidden7'),
        document.getElementById('hidden8'),
        document.getElementById('hidden9'),
        document.getElementById('hidden10'),
        document.getElementById('hidden11'),
        document.getElementById('hidden12'),
        document.getElementById('hidden13'),
        document.getElementById('hidden14'),
        document.getElementById('hidden15'),
        document.getElementById('hidden16'),
        document.getElementById('hidden17'),
        document.getElementById('hidden18'),
        document.getElementById('hidden19'),
        document.getElementById('hidden20'),
        document.getElementById('hidden21'),
        document.getElementById('hidden22'),
        document.getElementById('hidden23'),
        document.getElementById('hidden24'),
        document.getElementById('hidden24'),
        document.getElementById('hidden25'),
        document.getElementById('hidden26'),
        document.getElementById('hidden27'),
        document.getElementById('hidden28'),
        document.getElementById('hidden29'),
        document.getElementById('hidden30'),
        document.getElementById('hidden31'),
        document.getElementById('hidden32'),
        document.getElementById('hidden33'),
        document.getElementById('hidden34'),
        document.getElementById('hidden35'),
        document.getElementById('hidden36'),
       
    ];

    elementsToShow.forEach(el => {
        if (el) {
            el.classList.add('hidden-element');
        }
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToShow.forEach(el => {
        if (el) {
            observer.observe(el);
        }
    });
});
