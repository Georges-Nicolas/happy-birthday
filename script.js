const music = document.getElementById('bgMusic');
let musicStarted = false;

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');

    if (!musicStarted) {
        music.play().catch(() => {});
        musicStarted = true;
    }

    if (pageId === 'message') {
        confetti({
            particleCount: 150,
            spread: 80,
            colors: ['#d4af37', '#ffffff', '#fcfcfc'],
            origin: { y: 0.6 }
        });
    }
}

function unlockFullSite() {
    document.getElementById('mainNav').style.display = 'flex';
    showPage('gallery');
}