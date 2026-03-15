const music = document.getElementById('bgMusic');
let musicStarted = false;

function showPage(pageId) {
    const targetPage = document.getElementById(pageId);
    
    // Safety check: if page doesn't exist, stop here
    if (!targetPage) return;

    // 1. Remove 'active' class from EVERY page immediately
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(p => {
        p.classList.remove('active');
    });

    // 2. Show the target page
    targetPage.classList.add('active');

    // 3. Handle Music (starts on first interaction)
    if (!musicStarted && music) {
        music.play().catch(e => console.log("Music play blocked:", e));
        musicStarted = true;
    }

    // 4. Trigger Confetti only on the message page
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
    const nav = document.getElementById('mainNav');
    if (nav) nav.style.display = 'flex';
    showPage('gallery');
}