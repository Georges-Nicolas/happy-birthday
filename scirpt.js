function revealSurprise() {
    document.getElementById('header').innerText = "SURPRISE!";
    document.getElementById('gift-box').classList.add('hidden');
    document.getElementById('surprise').classList.remove('hidden');
    
    // Simple console log for testing
    console.log("Birthday surprise triggered!");
}