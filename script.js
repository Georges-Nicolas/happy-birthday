function revealSurprise() {
    const gift = document.getElementById('gift-box');
    
    // Add a quick "pop" animation effect
    gift.style.transform = "scale(0.8)";
    
    setTimeout(() => {
        document.getElementById('header').innerText = "HAPPY BIRTHDAY!";
        gift.classList.add('hidden');
        document.getElementById('surprise').classList.remove('hidden');
        
        // Optional: Trigger device vibration if supported
        if (navigator.vibrate) {
            navigator.vibrate(200); 
        }
    }, 150);
}