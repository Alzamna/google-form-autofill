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

// Tunggu 1 detik → klik tombol submit atau next
setTimeout(() => {
    // Selector cari tombol Next / Selanjutnya / Kirim
    const nextBtn = document.querySelector(
        `div[role="button"][aria-label*="Berikutnya"],
         div[role="button"][aria-label*="Next"],
         div[role="button"][aria-label*="Selanjutnya"],
         div[role="button"][aria-label*="Kirim"],
         div[role="button"][aria-label*="Submit"]`
    );

    if (nextBtn) {
        nextBtn.click();
        console.log("✅ Tombol Next/Kirim diklik!");
    } else {
        console.warn("⚠️ Tombol Next/Kirim tidak ditemukan!");
    }
}, 1000);
