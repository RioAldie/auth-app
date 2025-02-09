# 📄 Sistem Login dengan Next.js & Node.js

## 📝 Tentang Proyek
Proyek ini adalah sistem login sederhana yang dibangun menggunakan **Next.js** dan **Node.js**. Proyek ini menerapkan autentikasi berbasis **JWT** dengan **Next-Auth**, serta menggunakan **Prisma ORM** untuk mengelola database.

## 🛠 Tech Stack
- **Next.js** 
- **Next-Auth** – Untuk menangani autentikasi
- **ShadCN-UI & Tailwind CSS** – Untuk desain tampilan
- **TypeScript** 
- **Prisma ORM** – Untuk menghubungkan backend dengan database
- **Node.JS** 
- **ExpressJS** 

## 🔄 Alur Sistem
1. Pengguna memasukkan **email** dan **password** melalui form login.
2. Data dikirim ke **API**, lalu diteruskan ke **server backend**.
3. Backend menerima permintaan, lalu memverifikasi data dalam **database** menggunakan **Prisma ORM**.
4. Jika data valid, backend akan **menghasilkan token JWT** untuk autentikasi.
5. Server mengembalikan respons berisi:
   - **accessToken**
   - **refreshToken**
   - **email user**
6. API mengirimkan respons tersebut ke frontend.
7. Frontend menyimpan token dan mengatur status autentikasi.
8. Jika login berhasil, pengguna diarahkan ke halaman dashboard.
9. Jika login gagal, server mengembalikan **respons error**, dan frontend menampilkan pesan kesalahan menggunakan **toast notification**.

## 📦 Instalasi & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/RioAldie/auth-app
cd repository-name
```

### 2️⃣ Instal Dependency
```bash
npm install
```

### 3️⃣ Konfigurasi 
Buat file `.env.local` di root proyek dan tambahkan variabel berikut:
```env
NEXT_PUBLIC_API_URL_PROD=https://auth-server-production-63b6.up.railway.app
AUTH_KEY=$2a$15$eNwjIWAkgefgPjF3wwtBROqP0sQ3PRWyYccAwOhr4WiTJLadZeJPi
```

### 4️⃣ Menjalankan Proyek
```bash
npm run dev
```

Proyek akan berjalan di `http://localhost:3000` 🚀

## 📝 Fitur Tambahan
- **Ubah Bahasa** - untuk fitur ubah bahasa sendiri saya memanfaatkan useContext dan queryParameter dimana jika value lang: berubah otomatis bahasa diseluruh sistem saya akan ikut berubah

## Deployment
Website ini bisa di akses di
[Frontend] (https://auth-app-rioaldie.vercel.app)
[Server] (https://auth-server-production-63b6.up.railway.app)

Terima Kasih Atas Kesempatannya! 🚀

