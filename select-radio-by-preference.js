// Select all radio buttons
const radios = document.querySelectorAll('div[role="radio"]');
let selected = false;

radios.forEach(e => {
    const pos = parseInt(e.getAttribute('aria-posinset'));
    const random = Math.random();

    /* 
        Adjust below to prefer certain choices:
          - pos === 3 → 70% chance to select
          - pos === 4 → 70% chance to select
          - else → 30% chance to select

        Change "pos" or random threshold as needed.
    */

    if (
        (pos === 3 && random < 0.7) ||
        (pos === 4 && random < 0.7) ||
        random < 0.3
    ) {
        e.click();
        selected = true;
    }
});

// If nothing selected, pick one randomly
if (!selected && radios.length > 0) {
    radios[Math.floor(Math.random() * radios.length)].click();
}
