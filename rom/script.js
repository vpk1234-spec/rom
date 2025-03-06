console.log('Script loaded');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const cryEmoji = document.getElementById('cryEmoji');
const effects = document.getElementById('effects');
const h1 = document.querySelector('h1');

console.log('Elements:', { yesButton, noButton, cryEmoji, effects, h1 });

yesButton.addEventListener('click', () => {
    console.log('Yes button clicked');
    document.body.style.backgroundColor = '#e0ffe0';
    effects.style.display = 'block';
    effects.innerHTML = `
        <div class="butterfly">🦋</div>
        <div class="butterfly">🦋</div>
        <div class="butterfly">🦋</div>
        <div class="huge-firecrackers">🎆🎆🎆</div>
    `;
    h1.style.opacity = '0';
    setTimeout(() => {
        h1.style.display = 'none';
    }, 1000);
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    cryEmoji.style.display = 'none';
    const message = document.createElement('div');
    message.className = 'message';
    message.innerHTML = 'That\'s so kind of you dear 😊☕';
    document.body.appendChild(message);
    setTimeout(() => {
        message.style.display = 'block';
        message.style.opacity = '1';
    }, 100);

    const additionalMessage = document.createElement('div');
    additionalMessage.className = 'additional-message';
    additionalMessage.innerHTML = 'Don\'t worry, I will be there for you always, Arya';
    document.body.appendChild(additionalMessage);
    setTimeout(() => {
        additionalMessage.style.display = 'block';
        additionalMessage.style.opacity = '1';
    }, 1000);

    createContinuousBalloons();
    stopContinuousCries();
});

noButton.addEventListener('click', () => {
    console.log('No button clicked');
    cryEmoji.style.display = 'none';
    createContinuousCries();
    yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) * 2) + 'px';
    yesButton.style.zIndex = 3; // Ensure the "Yes" button remains on top
});

function createContinuousBalloons() {
    const balloonContainer = document.createElement('div');
    balloonContainer.className = 'continuous-balloons';
    document.body.appendChild(balloonContainer);

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.innerHTML = '🎈';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 5}s`; // Decrease arrival time
        balloonContainer.appendChild(balloon);
    }
}

function createContinuousCries() {
    const cryContainer = document.createElement('div');
    cryContainer.className = 'continuous-cries';
    cryContainer.id = 'cryContainer';
    document.body.appendChild(cryContainer);

    for (let i = 0; i < 20; i++) {
        const cry = document.createElement('div');
        cry.className = 'cry-emoji';
        cry.innerHTML = '😢';
        cry.style.left = `${Math.random() * 100}%`;
        cry.style.animationDelay = `${Math.random() * 5}s`;
        cryContainer.appendChild(cry);
    }
}

function stopContinuousCries() {
    const cryContainer = document.getElementById('cryContainer');
    if (cryContainer) {
        cryContainer.remove();
    }
    // Remove any remaining cry emojis
    const cryEmojis = document.querySelectorAll('.cry-emoji');
    cryEmojis.forEach(emoji => emoji.remove());
}
