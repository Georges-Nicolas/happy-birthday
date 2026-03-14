function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
}

const music = document.getElementById('bgMusic');

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Auto-play workaround: Browsers block auto-audio, 
// so it plays on the first click anywhere.
document.body.addEventListener('click', () => {
    // music.play(); // Uncomment this if you want it to start on first click
}, { once: true });