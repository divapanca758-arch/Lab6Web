// =========================================================
// LATIHAN 1: Mengubah Teks DOM
// =========================================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM & Event Handling";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// =========================================================
// LATIHAN 2: Event Click
// =========================================================
const tombolAksi = document.getElementById("tombolAksi");

tombolAksi.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// =========================================================
// LATIHAN 3: Mengubah Kelas & Gaya CSS
// =========================================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

// =========================================================
// LATIHAN 4: Event Input & Penghitung Karakter
// =========================================================
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// =========================================================
// LATIHAN 5, MINI PROJECT, & EKSPERIMEN MANDIRI: Form Workshop
// =========================================================
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
const selectSesi = document.getElementById("sesi");
const infoSesi = document.getElementById("infoSesi");
const tombolReset = document.getElementById("tombolReset");

// Eksperimen Mandiri: Event Change pada Dropdown Sesi
selectSesi.addEventListener("change", function () {
  if (selectSesi.value !== "") {
    infoSesi.textContent = "Anda memilih sesi: " + selectSesi.value;
  } else {
    infoSesi.textContent = "";
  }
});

// Form Submit Validation
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const sesi = selectSesi.value;

  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Eksperimen Mandiri: Validasi nama minimal 3 karakter
  if (nama === "" || nama.length < 3) {
    pesanForm.className = "error";
    pesanForm.textContent = "Nama wajib diisi dan minimal terdiri dari 3 karakter.";
  } else if (!polaEmail.test(email)) {
    pesanForm.className = "error";
    pesanForm.textContent = "Masukkan alamat email yang valid.";
  } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    pesanForm.className = "error";
    pesanForm.textContent = "Usia harus berupa bilangan bulat antara 17 hingga 100.";
  } else if (sesi === "") {
    pesanForm.className = "error";
    pesanForm.textContent = "Silakan pilih salah satu sesi workshop.";
  } else {
    pesanForm.className = "sukses";
    pesanForm.textContent = "Validasi berhasil! Pendaftaran Workshop atas nama " + nama + " siap diproses.";
    form.reset();
    infoSesi.textContent = "";
  }
});

tombolReset.addEventListener("click", function() {
  pesanForm.textContent = "";
  infoSesi.textContent = "";
});

// =========================================================
// LATIHAN 6 & EKSPERIMEN MANDIRI: To-Do List + Tombol Hapus
// =========================================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();

  if (teks === "") {
    pesanTugas.className = "error";
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button"); // Eksperimen Mandiri: Tombol Hapus

  label.textContent = teks + " ";

  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });

  hapus.type = "button";
  hapus.textContent = "Hapus";
  hapus.style.backgroundColor = "#ff4d4d";
  hapus.style.color = "#fff";
  hapus.style.border = "none";
  hapus.style.padding = "4px 8px";
  
  // Event listener tombol hapus
  hapus.addEventListener("click", function () {
    daftarTugas.removeChild(item);
    pesanTugas.className = "sukses";
    pesanTugas.textContent = "Tugas berhasil dihapus.";
  });

  item.append(label, selesai, hapus);
  daftarTugas.appendChild(item);

  inputTugas.value = "";
  pesanTugas.className = "sukses";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});
