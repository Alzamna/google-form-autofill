function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const selects = document.querySelectorAll('.quantumWizMenuPaperselectEl');
selects.forEach((select, i) => {
    select.click();
    setTimeout(() => {
        const options = document.querySelectorAll('.quantumWizMenuPaperselectContent > div[role="option"]');
        if (options.length > 0) {
            const choice = options[randomNumber(0, options.length - 1)];
            choice.click();
            console.log(`✅ #${i+1} Dropdown`);
        }
    }, 300 + i * 300);
});
