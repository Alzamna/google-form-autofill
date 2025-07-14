const radios = document.querySelectorAll('div[role="radio"]');
let selected = false;

radios.forEach(e => {
    const pos = parseInt(e.getAttribute('aria-posinset'));
    const random = Math.random();

    if ((pos === 3 && random < 0.7) || (pos === 4 && random < 0.7) || random < 0.3) {
        e.click();
        selected = true;
    }
});

if (!selected && radios.length > 0) {
    radios[Math.floor(Math.random() * radios.length)].click();
}

