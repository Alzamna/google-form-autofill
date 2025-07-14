// Helper random string
function randomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Helper random email
function randomEmail() {
    return randomString(6) + '@example.com';
}

// Helper random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper random date
function randomDate() {
    const year = randomNumber(2020, 2025);
    const month = String(randomNumber(1, 12)).padStart(2, '0');
    const day = String(randomNumber(1, 28)).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// SCRIPT: Isi semua input[type="text"]
document.querySelectorAll('input[type="text"]').forEach((el, i) => {
    const label = el.getAttribute('aria-label')?.toLowerCase() || '';
    let value = 'Data Acak';

    if (label.includes('email')) {
        value = randomEmail();
    } else if (label.includes('tanggal') || label.includes('date')) {
        value = randomDate();
    } else if (label.includes('angka') || label.includes('number')) {
        value = randomNumber(100, 999).toString();
    } else {
        value = randomString(8);
    }

    el.value = value;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    console.log(`✅ Isi input ke-${i+1}: ${value}`);
});
