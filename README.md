# Dicoding Menjadi Front-End Web Developer Expert [MFWDE]

## Kriteria Submission

### Fitur yang harus ada pada aplikasi:

#### Halaman Utama (Daftar Restoran)
Syarat:
Menampilkan daftar restoran yang datanya bersumber dari API https://restaurant-api.dicoding.dev/. Silakan lihat dokumentasinya pada halaman tersebut.
Minimal menampilkan gambar, kota, rating, dan deskripsi (bisa diberi maksimal teks) dari restoran.
Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
Hero elemen tetap dipertahankan.

#### Halaman Detail Restoran
Syarat:
Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
Pada halaman detail restoran harus terdapat:
1. Gambar
2. Alamat Lengkap 
3. Kategori Menu
4. Menu Makanan
5. Menu Minuman
6. Rating
7. Customer Reviews
8. Terdapat tombol favorite untuk memasukkan atau menghapus restoran favorit dari database (gunakan IndexedDB).

#### Halaman Daftar Restoran Favorit
Syarat:
Halaman Daftar Restoran dapat diakses melalui menu navigasi favorit.
Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
Minimal menampilkan gambar, kota, rating, dan deskripsi (bisa diberi maksimal teks) dari restoran.
Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
#### Native Capability
Syarat:
Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apapun, bahkan menggunakan workbox.
Aplikasi harus menampilkan icon Add to Home Screen.
Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.

#### Code Quality
Syarat:
Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. Harap lampirkan berkas konfigurasi ESLint ya.
Menerapkan salah satu style guide baik itu Google JavaScript Code Style, AirBnB JavaScript Code Style, atau StandardJS Code Style.

#### Pertahankan syarat yang ada pada submission sebelumnya. Seperti responsibilitas tampilan, dan aksesibilitas pada website.