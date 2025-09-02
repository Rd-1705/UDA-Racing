# 🏍️ UDA-RACING

UDA-RACING adalah website showroom motor sederhana berbasis **React + Vite**.  
Website ini menyediakan katalog produk motor (Matic, Sport, Cub), detail produk, sistem komentar, pencarian, dan fitur autentikasi dasar.

---

## 🚀 Fitur Utama

- **Autentikasi User**
  - Login & Register menggunakan halaman khusus.
  - Proteksi halaman dengan `ProtectedRouter`.

- **Produk**
  - Menampilkan daftar motor berdasarkan kategori.
  - Detail produk dengan informasi lebih lengkap.
  - Pencarian produk berdasarkan nama.
  - Pagination untuk navigasi produk.

- **Komentar**
  - User dapat menambahkan komentar di setiap produk.
  - Komentar tersimpan menggunakan **React Context** (`CommentContext`).
  - Komentar tidak hilang meskipun berpindah halaman (tersimpan di LocalStorage).

- **Komponen Reusable**
  - `Header` dan `Footer` untuk navigasi.
  - Context API (`SearchContext`, `CommentContext`, `Authentication`) untuk state global.

---

## 📂 Struktur Folder

```bash
src/
├── assets/              # Asset statis (logo, gambar, dll.)
├── component/           # Komponen UI (Header, Footer, Router)
├── conteks/             # Context API (Auth, Search, Comment)
├── pages/               # Halaman utama (Home, Product, Detail, Login, Register, About)
├── App.jsx              # Root komponen utama
├── main.jsx             # Entry point aplikasi
└── index.css            # Styling global
