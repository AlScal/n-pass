document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('nfc-button');
    const audio = document.getElementById('audio');

    if (!button) {
        console.error("Button element not found!");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const nfcActivated = urlParams.get('nfc') === 'true';
    const buttonUsed = localStorage.getItem('buttonUsed') === 'true';

    console.log("NFC Activated:", nfcActivated);
    console.log("Button Used:", buttonUsed);

    if (buttonUsed) {
        button.style.display = 'none';
    } else if (nfcActivated) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }

    button.addEventListener('click', () => {
        console.log("Button clicked!");
        audio.play();
        button.style.display = 'none';
        localStorage.setItem('buttonUsed', 'true');
    });
});
