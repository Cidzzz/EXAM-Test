// DATA SOAL FTTH (Fiber To The Home)
const soalFTTH = [
  {
    id: 1,
    question: "Perbandingan kabel fiber optik kaca murni vs kaca campuran plastik. Pernyataan yang benar adalah...",
    options: [
      "Kaca campuran lebih baik kualitasnya",
      "Kaca campuran cocok untuk jarak jauh",
      "Redaman kabel lebih kecil pada kaca murni",
      "Semakin murni kaca semakin tidak efisien",
      "Cahaya lebih banyak terserap di kaca murni"
    ],
    answer: "Redaman kabel lebih kecil pada kaca murni",
    type: "single"
  },
  {
    id: 2,
    question: "Seorang teknisi menyambung ulang kabel 6 tube (6 core/tube). Core yang disambung: Core 17, Core 2, Core 30. Tentukan kode warna Core 2.",
    options: ["Putih", "Hitam", "Merah", "Abu-abu", "Orange"],
    answer: "Orange", // Urutan: Biru, Orange...
    type: "single"
  },
  {
    id: 3,
    question: "Tentukan kode warna untuk Core ke-30 (pada kabel 6 tube, 6 core/tube).",
    options: ["Putih", "Hitam", "Merah", "Abu-abu", "Orange"],
    answer: "Putih", // Core 30 ada di Tube 5 (25-30). Core ke-6 di tube itu adalah Putih.
    type: "single"
  },
  {
    id: 4,
    question: "Tentukan kode warna untuk Core ke-17 (pada kabel 6 tube, 6 core/tube).",
    options: ["Putih", "Hitam", "Merah", "Abu-abu", "Orange"],
    answer: "Abu-abu", // Core 17 ada di Tube 3 (13-18). Core ke-5 di tube itu adalah Abu-abu.
    type: "single"
  },
  {
    id: 5,
    question: "Instalasi fiber optik di dalam tanah dengan pipa pelindung disebut...",
    options: ["Indoor", "Aerial", "Direct Buried", "Duct", "Submarine"],
    answer: "Duct", // Di dalam tanah dengan pipa pelindung
    type: "single"
  },
  {
    id: 6,
    question: "Komponen wajib pada kabel bawah laut (Submarine) untuk menahan tekanan dan air...",
    options: ["Rip cord", "Aluminium water barrier", "Stranded Steel Wire", "Polyethylene", "Aluminium Tube"],
    answer: ["Rip cord", "Aluminium water barrier", "Stranded Steel Wire", "Polyethylene", "Aluminium Tube"],
    type: "multiple"
  },
  {
    id: 7,
    question: "Syarat agar sinyal cahaya bisa terkirim dalam serat optik (Total Internal Reflection) adalah...",
    options: [
      "Indeks bias core = cladding",
      "Indeks bias cladding > core",
      "Sudut datang = sudut kritis",
      "Sudut datang < sudut kritis",
      "Indeks bias core selalu dibuat lebih besar daripada indeks bias cladding"
    ],
    answer: "Indeks bias core selalu dibuat lebih besar daripada indeks bias cladding",
    type: "single"
  },
  {
    id: 8,
    question: "Lapisan yang ditempatkan di antara kulit kabel dan water blocking yang berfungsi memperkuat kabel adalah...",
    options: ["Aramid yarn / Strength member", "Core", "Cladding", "Buffer", "Jelly"],
    answer: "Aramid yarn / Strength member", // Berdasarkan deskripsi soal no 7 di file asli
    type: "single"
  },
  {
    id: 9,
    question: "Perangkat untuk mendeteksi lokasi putus/bending dan mengukur redaman total kabel adalah...",
    options: ["OSA", "VFL", "Optical Time Domain Reflectometer (OTDR)", "Fusion Splicer", "OPM"],
    answer: "Optical Time Domain Reflectometer (OTDR)",
    type: "single"
  },
  {
    id: 10,
    question: "Perangkat 'Cleaver' berfungsi untuk...",
    options: [
      "Menyambungkan core",
      "Mendeteksi daya",
      "Mengupas kulit kabel",
      "Mendeteksi crack",
      "Memotong core agar rata dan dapat disambungkan dengan sempurna"
    ],
    answer: "Memotong core agar rata dan dapat disambungkan dengan sempurna",
    type: "single"
  },
  {
    id: 11,
    question: "Bagian serat optik yang terbuat dari gelas dengan indeks bias lebih kecil dari core dan berfungsi sebagai cermin (waveguide) adalah...",
    options: ["Cladding", "Core", "Buffer", "Strength Member", "Coating"],
    answer: "Cladding",
    type: "single"
  },
  {
    id: 12,
    question: "Arti label kabel 'SM-A-LT SS 12/6T' adalah...",
    options: ["Instalasi Udara (Aerial)", "Kapasitas total 72", "Slotted Core", "Stranded Steel", "Kapasitas per-tube adalah 2 core"],
    answer: ["Instalasi Udara (Aerial)", "Kapasitas per-tube adalah 2 core"], // SM=SingleMode, A=Aerial, 12 core total / 6 tube = 2
    type: "multiple"
  },
  {
    id: 13,
    question: "Hal yang TIDAK perlu dilakukan teknisi setelah perbaikan di rumah pelanggan...",
    options: [
      "Meminta waktu istirahat untuk makan hidangan pelanggan",
      "Memastikan pekerjaan selesai",
      "Merapikan alat",
      "Memastikan Berita Acara",
      "Meminta feedback"
    ],
    answer: "Meminta waktu istirahat untuk makan hidangan pelanggan",
    type: "single"
  },
  {
    id: 14,
    question: "Kabel yang tepat untuk menghubungkan ODP (Tiang) ke OTP (Rumah Pelanggan) adalah...",
    options: ["UTP", "Patchcord", "Indoor", "Aerial", "Dropcore"],
    answer: "Dropcore",
    type: "single"
  },
  {
    id: 15,
    question: "Kondisi perambatan cahaya: Jika sudut datang LEBIH BESAR dari sudut kritis, maka terjadi...",
    options: ["Refraksi", "Refleksi Total", "Merambat lurus", "Dispersi", "Absorpsi"],
    answer: "Refleksi Total",
    type: "single"
  },
  {
    id: 16,
    question: "Pada kabel 12 Core / 6 Tube (2 core per tube). Apa warna Tube ke-1 dan Tube ke-2?",
    options: ["Biru & Orange", "Hijau & Coklat", "Abu & Putih", "Merah & Hitam", "Biru & Hijau"],
    answer: "Biru & Orange",
    type: "single"
  },
  {
    id: 17,
    question: "Fungsi Thixotropic Gel (Jelly) pada loose tube adalah...",
    options: [
      "Penguat kabel",
      "Isian padat",
      "Konduktor",
      "Agar serat optik bebas bergerak dan terlindung dari air/gesekan",
      "Penutup strength member"
    ],
    answer: "Agar serat optik bebas bergerak dan terlindung dari air/gesekan",
    type: "single"
  },
  {
    id: 18,
    question: "Jika cahaya dibiaskan sejajar dengan permukaan (sudut bias 90 derajat), maka sudut datangnya disebut...",
    options: ["Refraksi", "Indeks bias", "Refleksi", "Total internal reflection", "Critical angle (Sudut Kritis)"],
    answer: "Critical angle (Sudut Kritis)",
    type: "single"
  },
  {
    id: 19,
    question: "Fungsi lapisan CORE adalah...",
    options: [
      "Pelengkap kekuatan",
      "Penguat tengah",
      "Tempat merambatnya cahaya dari ujung satu ke ujung lainnya",
      "Cermin pemantul",
      "Pelindung mekanis"
    ],
    answer: "Tempat merambatnya cahaya dari ujung satu ke ujung lainnya",
    type: "single"
  },
  {
    id: 20,
    question: "Contoh penerapan empati pada pelanggan, KECUALI...",
    options: [
      "Dengarkan keluhan",
      "Meminta maaf dan menyuruh pelanggan baca buku manual sendiri",
      "Tunjukkan peduli",
      "Sampaikan maaf tulus",
      "Selesaikan masalah segera"
    ],
    answer: "Meminta maaf dan menyuruh pelanggan baca buku manual sendiri",
    type: "single"
  },
  {
    id: 21,
    question: "Cara membersihkan jelly (thixotropic gel) pada core yang benar adalah...",
    options: ["Siram alkohol", "Biarkan saja", "Tissue basah", "Membersihkan dengan tissue yang dibasahi alkohol", "Bedak cair"],
    answer: "Membersihkan dengan tissue yang dibasahi alkohol",
    type: "single"
  },
  {
    id: 22,
    question: "Alasan kabel fiber optik marak digunakan, KECUALI...",
    options: [
      "Transmisi data lebih lamban dibanding kabel konvensional",
      "Bandwidth lebar",
      "Kapasitas transmisi besar",
      "Redaman kecil",
      "Harga kompetitif"
    ],
    answer: "Transmisi data lebih lamban dibanding kabel konvensional",
    type: "single"
  },
  {
    id: 23,
    question: "Perbedaan utama kabel Slotted Core dibanding Loose Tube adalah...",
    options: ["Bahan slot", "Hanya indoor", "Loose tube lebih kuat", "Bahan PBTP", "Slotted Core mampu menampung kapasitas serat (ribuan) jauh lebih besar"],
    answer: "Slotted Core mampu menampung kapasitas serat (ribuan) jauh lebih besar",
    type: "single"
  },
  {
    id: 24,
    question: "Fungsi Splitter Optik dalam ODP adalah...",
    options: ["Penanda port", "Pelindung sambungan", "Isolator cahaya", "Membagi daya optik dari satu input ke beberapa output", "Merapikan kabel"],
    answer: "Membagi daya optik dari satu input ke beberapa output",
    type: "single"
  },
  {
    id: 25,
    question: "Profil Graded Index (Multimode) memiliki ciri khas...",
    options: ["Indeks bias konstan", "Untuk jarak sangat jauh", "Indeks bias berubah berangsur-angsur (parabola) untuk mengurangi dispersi", "Hanya 1 mode cahaya", "Core sangat kecil"],
    answer: "Indeks bias berubah berangsur-angsur (parabola) untuk mengurangi dispersi",
    type: "single"
  },
  {
    id: 26,
    question: "Fungsi utama kode warna pada serat optik adalah...",
    options: ["Standar internasional", "Mempermudah identifikasi serat saat penyambungan", "Kurangi dispersi", "Tentukan panjang gelombang", "Hindari putus"],
    answer: "Mempermudah identifikasi serat saat penyambungan",
    type: "single"
  },
  {
    id: 27,
    question: "Pilih jenis kabel yang sesuai: Area perumahan yang mengizinkan galian TANPA pipa pelindung.",
    options: ["Duct", "Direct Buried", "Indoor", "Submarine", "Aerial"],
    answer: "Direct Buried",
    type: "single"
  },
  {
    id: 28,
    question: "Pilih jenis kabel yang sesuai: Area perumahan yang mengizinkan menanam tiang.",
    options: ["Duct", "Direct Buried", "Indoor", "Submarine", "Aerial"],
    answer: "Aerial",
    type: "single"
  },
  {
    id: 29,
    question: "Label kabel: Graded Index, Tanam Langsung (Buried), Loose Tube, Solid Steel, 96 Core / 8 Tube.",
    options: ["GI-B-LT SS 96/8T", "GI-D-TB WS 96/8T", "MM-B-LT SS 96/8T", "SM-D-SC GRP 12/96T", "GI-D-SC WS 12/8T"],
    answer: "GI-B-LT SS 96/8T",
    type: "single"
  }
];