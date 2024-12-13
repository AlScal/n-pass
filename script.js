document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('nfc-button');
    const audio = document.getElementById('audio');

    // Check NFC activation
    const urlParams = new URLSearchParams(window.location.search);
    const nfcActivated = urlParams.get('nfc') === 'true';
    const buttonUsed = localStorage.getItem('buttonUsed') === 'true';

    if (buttonUsed) {
        // If the button has already been used, hide it
        button.style.display = 'none';
    } else if (nfcActivated) {
        // If NFC is activated and the button hasn't been used, show it
        button.style.display = 'block';
        localStorage.setItem('nfcActivated', 'true');
    } else {
        // If NFC is not activated and the button hasn't been used, hide it
        button.style.display = 'none';
    }

    // Play audio and hide button on click
    button.addEventListener('click', () => {
        audio.play();
        button.style.display = 'none';
        localStorage.setItem('buttonUsed', 'true'); // Mark the button as used
    });
});