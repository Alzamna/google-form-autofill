// SCRIPT: Isi semua textarea
document.querySelectorAll('textarea').forEach((el, i) => {
    const text = `Jawaban panjang random ke-${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
    el.value = text;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    console.log(`✅ Isi textarea ke-${i+1}`);
});
