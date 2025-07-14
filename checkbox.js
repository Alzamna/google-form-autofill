document.querySelectorAll('div[role="checkbox"]').forEach((el, i) => {
    if (Math.random() < 0.5) {
        el.click();
        console.log(`✅ #${i+1} checkbox`);
    }
});
