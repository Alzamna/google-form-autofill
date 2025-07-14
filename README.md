# google-form-autofill

## 🌐 English

### Description

**google-form-autofill** is a set of JavaScript scripts you can run directly in the browser console to automatically fill out Google Forms. It helps save time for:

- Testing long forms
- Stress-testing multiple submissions
- Filling out repetitive forms

You can fill:

✅ Text fields (short or long)  
✅ Numbers, emails, dates  
✅ Radio buttons  
✅ Checkboxes  
✅ Dropdowns  
✅ Multi-section navigation (Next / Submit buttons)

---

### How To Use

1. Open your Google Form in Chrome, Edge, or Firefox.
2. Press **F12** → go to the **Console** tab.
3. Paste one of the scripts from this repo.
4. Press Enter → watch your form fill automatically!

---

# google-form-autofill

> Otomatis mengisi Google Form dengan data acak atau data yang sudah ditentukan.

---

## 🇮🇩 Deskripsi

**google-form-autofill** adalah kumpulan script JavaScript yang bisa dijalankan langsung di Console browser untuk mengisi Google Form secara otomatis. Script ini sangat membantu untuk:

- Menguji form panjang
- Stress-test (pengujian banyak pengisian)
- Mengisi form berulang secara cepat

Script ini bisa mengisi:

✅ Kolom teks (pendek maupun panjang)  
✅ Angka, email, tanggal  
✅ Radio button  
✅ Checkbox  
✅ Dropdown  
✅ Navigasi Next / Kirim (untuk form multi-section)

---

## Cara Menggunakan

1. Buka Google Form yang ingin diisi otomatis di Chrome, Edge, atau Firefox.
2. Tekan **F12** → buka tab **Console**.
3. Tempel salah satu script dari repository ini.
4. Tekan Enter → form akan terisi otomatis!

---

## Example

```js
document.querySelectorAll('input[type="text"]').forEach((el) => {
  el.value = "John Doe";
  el.dispatchEvent(new Event('input', { bubbles: true }));
});

