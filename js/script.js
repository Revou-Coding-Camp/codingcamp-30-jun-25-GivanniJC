/* === MOBILE NAVBAR SLIDE‑DOWN === */
const menuBtn   = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('scale-y-0');
  mobileNav.classList.toggle('scale-y-100');
});

/* === ❶ TUTUP MENU setelah klik tautan === */
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('scale-y-0');     // sembunyikan
    mobileNav.classList.remove('scale-y-100');
  });
});

/* === Header shadow saat scroll (optional) === */
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow-lg', window.scrollY > 0);
});
/* === ❷ Tampilkan kembali menu saat scroll ke atas === */
let lastScrollTop = 0;

/* === VALIDASI & CETAK HASIL === */
const form   = document.getElementById('contactForm');
const box    = document.getElementById('messageResult');
const errTxt = document.getElementById('formError');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name   = document.getElementById('inputName').value.trim();
  const date   = document.getElementById('inputDate').value;
  const msg    = document.getElementById('inputMessage').value.trim();
  const gender = form.elements['gender'].value;

  // Validasi: tidak boleh kosong
  if (!name || !date || !msg || !gender) {
    errTxt.textContent = 'Semua kolom wajib diisi!';
    return;
  }

  // Validasi: nama hanya huruf dan spasi
  if (!/^[A-Za-z\s]+$/.test(name)) {
    errTxt.textContent = 'Nama tidak boleh mengandung angka atau simbol!';
    return;
  }

  // Jika lolos semua validasi
  errTxt.textContent = '';
  const now = new Date().toLocaleString();

  box.innerHTML = `
    <p><strong>Waktu :</strong> ${now}</p><br>
    <p><strong>Nama :</strong> ${name}</p>
    <p><strong>Tanggal Lahir :</strong> ${date}</p>
    <p><strong>Jenis Kelamin :</strong> ${gender}</p>
    <p><strong>Pesan :</strong> ${msg}</p>
  `;

  form.reset();
});
