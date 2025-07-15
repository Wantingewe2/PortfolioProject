script >
    // JavaScript would go in a separate script.js file
    function filterProjects(category) {
        const cards = document.querySelectorAll('.project-card');
        const buttons = document.querySelectorAll('.filter-btn');

        // Update active button
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        // Filter cards
        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.6s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
</script >
</avascript >
</body >
</html >
var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


var mousein = false
function demo() {
    if (mousein) return
    document.getElementById('demo' + count++)
        .classList.toggle('hover')

}

function demo2() {
    if (mousein) return
    document.getElementById('demo2')
        .classList.toggle('hover')
}

function reset() {
    count = 1
    var hovers = document.querySelectorAll('.hover')
    for (var i = 0; i < hovers.length; i++) {
        hovers[i].classList.remove('hover')
    }
}

document.addEventListener('mouseover', function () {
    mousein = true
    reset()
})
// For the thumbnail demo! :]

var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


var mousein = false
function demo() {
    if (mousein) return
    document.getElementById('demo' + count++)
        .classList.toggle('hover')

}

function demo2() {
    if (mousein) return
    document.getElementById('demo2')
        .classList.toggle('hover')
}

function reset() {
    count = 1
    var hovers = document.querySelectorAll('.hover')
    for (var i = 0; i < hovers.length; i++) {
        hovers[i].classList.remove('hover')
    }
}

document.addEventListener('mouseover', function () {
    mousein = true
    reset()
})

