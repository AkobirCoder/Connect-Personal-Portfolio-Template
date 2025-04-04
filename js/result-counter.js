document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let started = false;
    const observer = new IntersectionObserver(entries => {
        if (!started && entries[0].isIntersecting) {
            started = true;
            counters.forEach(counter => {
                let target = +counter.getAttribute("data-target");
                let count = 0;
                let speed = target / 100;

                function updateCounter() {
                    if (count < target) {
                        count += speed;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCounter, 10);
                    } else {
                        counter.innerText = target;
                    }
                }

                updateCounter();
            });
        }
    }, { threshold: 0.5 });

    observer.observe(document.querySelector("#results"));
});