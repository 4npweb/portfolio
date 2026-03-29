const track = document.getElementById('projectsTrack');
const total = track.children.length;
let current = 0;

function goTo(n) {
    current = (n + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
}

setInterval(() => goTo(current + 1), 3500);