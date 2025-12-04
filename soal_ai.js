// DATA SOAL KECERDASAN ARTIFISIAL (AI)
const soalAI = [
  {
    id: 1,
    question: "Seorang siswa ingin menampilkan bilangan genap dari 2 hingga 10 menggunakan Python. Manakah kode range() yang benar?",
    options: ["range(2, 10, 2)", "range(2, 11, 2)", "range(1, 10, 2)", "range(2, 11, 1)", "range(2, 10, 1)"],
    answer: "range(2, 11, 2)", // Output: 2, 4, 6, 8, 10
    type: "single"
  },
  {
    id: 2,
    question: "Konsep OOP dalam Python mencakup...",
    options: ["Class", "Attribute", "Looping", "Inheritance", "Object"],
    answer: ["Class", "Attribute", "Inheritance", "Object"],
    type: "multiple"
  },
  {
    id: 3,
    question: "Class dalam Python dapat diibaratkan sebagai...",
    options: ["Variabel penyimpanan data", "Fungsi bawaan", "Cetak biru (blueprint) untuk membuat objek", "Objek nyata di kehidupan sehari-hari", "Tipe data bawaan"],
    answer: "Cetak biru (blueprint) untuk membuat objek",
    type: "single"
  },
  {
    id: 4,
    question: "Dampak positif otomatisasi oleh AI adalah...",
    options: ["Produksi lebih cepat", "Kehilangan pekerjaan", "Biaya rendah", "Kualitas meningkat", "Efisiensi"],
    answer: ["Produksi lebih cepat", "Biaya rendah", "Kualitas meningkat", "Efisiensi"],
    type: "multiple"
  },
  {
    id: 5,
    question: "Manakah pernyataan yang tepat tentang Machine Learning (ML)?",
    options: ["Mesin tidak bisa meningkatkan performanya", "Mesin belajar tanpa data historis", "Mesin belajar dari data tanpa diprogram eksplisit", "Mesin bekerja hanya berdasarkan perintah manual", "Mesin hanya bisa membaca data teks"],
    answer: "Mesin belajar dari data tanpa diprogram eksplisit",
    type: "single"
  },
  {
    id: 6,
    question: "Atribut jenis_mesin pada objek motor (motor.jenis_mesin) adalah contoh dari Atribut Instance. Mengapa atribut ini disebut demikian?",
    options: ["Karena nilainya diwarisi dari kelas induk", "Karena nilainya sama untuk semua objek", "Karena dideklarasikan di luar konstruktor __init__", "Karena hanya dapat diubah oleh class method", "Karena nilainya dapat berbeda untuk setiap objek yang dibuat dari kelas yang sama"],
    answer: "Karena nilainya dapat berbeda untuk setiap objek yang dibuat dari kelas yang sama",
    type: "single"
  },
  {
    id: 7,
    question: "Pilih semua pernyataan yang BENAR mengenai Tipe Data Koleksi Python berikut:",
    options: [
      "Set: Mutable & Unordered (elemen unik)",
      "Tuple: Immutable & Ordered",
      "List: Mutable & Ordered"
    ],
    answer: ["Set: Mutable & Unordered (elemen unik)", "Tuple: Immutable & Ordered", "List: Mutable & Ordered"],
    type: "multiple"
  },
  {
    id: 8,
    question: "Manfaat penerapan AI di masyarakat...",
    options: ["Menyebarkan hoax", "Mengurangi kesalahan", "Mempercepat pekerjaan", "Membuat keputusan lebih akurat", "Meningkatkan efisiensi layanan"],
    answer: ["Mengurangi kesalahan", "Mempercepat pekerjaan", "Membuat keputusan lebih akurat", "Meningkatkan efisiensi layanan"],
    type: "multiple"
  },
  {
    id: 9,
    question: "Konsep reinforcement learning dapat dianalogikan dengan...",
    options: ["Anak kecil belajar berjalan dengan coba-coba", "Siswa menghafal pelajaran dari buku", "Menyusun data berdasarkan label yang ada", "Mengelompokkan bunga berdasarkan kemiripan", "Guru memberi materi ke siswa"],
    answer: "Anak kecil belajar berjalan dengan coba-coba",
    type: "single"
  },
  {
    id: 10,
    question: "Tipe data primitif dalam Python yang dapat menampung nilai hasil perhitungan adalah...",
    options: ["String", "Set", "Integer", "Boolean", "Float"],
    answer: ["Integer", "Float"],
    type: "multiple"
  },
  {
    id: 11,
    question: "Tipe data collection pada Python adalah…",
    options: ["Tuple", "Dictionary", "List", "Set", "Flowchart"],
    answer: ["Tuple", "Dictionary", "List", "Set"],
    type: "multiple"
  },
  {
    id: 12,
    question: "Contoh aplikasi kecerdasan artifisial Generatif ditunjukkan oleh...",
    options: ["Gemini", "Google Maps", "Zoom", "ChatGPT", "Midjourney"],
    answer: ["Gemini", "ChatGPT", "Midjourney"],
    type: "multiple"
  },
  {
    id: 13,
    question: "Jika fungsi volume_balok(panjang, lebar, tinggi) dipanggil dengan volume_balok(6, 4, 5), maka hasil yang dikembalikan adalah...",
    options: ["150", "200", "60", "100", "120"],
    answer: "120",
    type: "single"
  },
  {
    id: 14,
    question: "Bagaimana dampak jangka panjang penggunaan AI terhadap lapangan kerja manusia?",
    options: [
      "Menggeser jenis pekerjaan yang tersedia, pekerjaan manual berkurang, tetapi peluang untuk pekerjaan yang lebih kreatif dan strategis bertambah",
      "Meningkatkan jumlah pekerjaan bagi manusia secara drastis",
      "Tidak berpengaruh signifikan",
      "Menghilangkan semua jenis pekerjaan manusia",
      "Mengurangi kesenjangan ekonomi secara otomatis"
    ],
    answer: "Menggeser jenis pekerjaan yang tersedia, pekerjaan manual berkurang, tetapi peluang untuk pekerjaan yang lebih kreatif dan strategis bertambah",
    type: "single"
  },
  {
    id: 15,
    question: "Yang termasuk komponen dalam siklus pengembangan AI adalah …",
    options: ["Deployment", "Problem Definition", "Algoritma Sorting Bubble", "Data Collection & Preparation", "Evaluation"],
    answer: ["Deployment", "Problem Definition", "Data Collection & Preparation", "Evaluation"],
    type: "multiple"
  },
  {
    id: 16,
    question: "Konsep reinforcement learning dapat dianalogikan dengan...",
    options: ["Anak kecil belajar berjalan dengan coba-coba", "Siswa menghafal", "Menyusun data label", "Clustering", "Guru memberi materi"],
    answer: "Anak kecil belajar berjalan dengan coba-coba",
    type: "single"
  },
  {
    id: 17,
    question: "Kode Python: `if 7 % 2 != 0: print('Ganjil') else: print('Genap')`. Outputnya adalah:",
    options: ["Ganjil", "Genap", "7", "Error", "Tidak muncul output"],
    answer: "Ganjil",
    type: "single"
  },
  {
    id: 18,
    question: "Manfaat penerapan AI di masyarakat (Pilih yang benar)...",
    options: ["Mengurangi kesalahan", "Mempercepat pekerjaan", "Keputusan lebih akurat", "Efisiensi layanan", "Semua benar"],
    answer: "Semua benar",
    type: "single"
  },
  {
    id: 19,
    question: "OOP dalam Python bertujuan untuk...",
    options: ["Mempercepat perhitungan numerik", "Membuat model ML", "Menyimpan data tabel", "Visualisasi data", "Mempermudah pengelolaan kode dengan konsep objek"],
    answer: "Mempermudah pengelolaan kode dengan konsep objek",
    type: "single"
  },
  {
    id: 20,
    question: "Sebuah perusahaan retail ingin memprediksi pola pembelian pelanggan berdasarkan riwayat transaksi berlabel (membeli/tidak). Metode yang tepat adalah:",
    options: ["Reinforcement Learning", "Semi-supervised Learning", "Unsupervised Learning", "Deep Learning", "Supervised Learning"],
    answer: "Supervised Learning",
    type: "single"
  },
  {
    id: 21,
    question: "Output kode `for i in range(1, 5): print(i)` adalah:",
    options: ["1, 2, 3, 4", "1, 2, 3, 4, 5", "2, 4, 6, 8", "2, 3, 4", "0, 1, 2, 3, 5"],
    answer: "1, 2, 3, 4",
    type: "single"
  },
  {
    id: 22,
    question: "Pernyataan yang tepat tentang kecerdasan artifisial adalah …",
    options: [
      "Alat pengganti manusia mutlak",
      "Kemampuan mesin atau sistem komputer untuk meniru kecerdasan manusia",
      "Sistem perintah suara saja",
      "Mesin pengganti manusia sepenuhnya",
      "Teknologi khusus kesehatan"
    ],
    answer: "Kemampuan mesin atau sistem komputer untuk meniru kecerdasan manusia",
    type: "single"
  },
  {
    id: 23,
    question: "Ciri AI Generatif adalah …",
    options: ["Mengganti kasir", "Membuat gambar dari teks", "Menganalisis data", "Membuat musik baru", "Menciptakan konten asli"],
    answer: ["Membuat gambar dari teks", "Membuat musik baru", "Menciptakan konten asli"],
    type: "multiple"
  },
  {
    id: 24,
    question: "Seorang siswa membuat class Mobil dengan atribut warna. Objek mobil1.warna='merah', mobil2.warna='biru'. Kesimpulannya?",
    options: [
      "mobil1 dan mobil2 memiliki nilai atribut instance yang berbeda",
      "Atribut warna adalah atribut class",
      "Objek tidak bisa memiliki atribut berbeda",
      "Atribut tidak dapat diubah",
      "Semua objek harus sama warnanya"
    ],
    answer: "mobil1 dan mobil2 memiliki nilai atribut instance yang berbeda",
    type: "single"
  },
  {
    id: 25,
    question: "Pilih semua pernyataan yang BENAR mengenai fungsi Python berikut:",
    options: [
      "print: Menampilkan output",
      "len: Menghitung panjang data",
      "input: Menerima masukan pengguna"
    ],
    answer: ["print: Menampilkan output", "len: Menghitung panjang data", "input: Menerima masukan pengguna"],
    type: "multiple"
  },
  {
    id: 26,
    question: "Risiko penggunaan Generative AI untuk materi belajar adalah...",
    options: ["Menggantikan guru", "Konten yang dihasilkan mungkin tidak sesuai kurikulum atau mengandung bias", "Materi selalu akurat", "Tidak butuh data", "Hanya untuk hiburan"],
    answer: "Konten yang dihasilkan mungkin tidak sesuai kurikulum atau mengandung bias",
    type: "single"
  },
  {
    id: 27,
    question: "Model mempelajari pola dari jutaan transaksi keuangan berlabel ('penipuan' atau 'aman'). Metode yang digunakan adalah...",
    options: ["Deep learning", "Semi-supervised", "Unsupervised", "Supervised learning", "Reinforcement"],
    answer: "Supervised learning",
    type: "single"
  },
  {
    id: 28,
    question: "Pilih semua pasangan metode ML yang BENAR:",
    options: ["Unsupervised: Pola tersembunyi/Tanpa label", "Reinforcement: Reward & Penalty", "Supervised: Data berlabel"],
    answer: ["Unsupervised: Pola tersembunyi/Tanpa label", "Reinforcement: Reward & Penalty", "Supervised: Data berlabel"],
    type: "multiple"
  },
  {
    id: 29,
    question: "Tipe data primitif untuk menampung hasil perhitungan desimal?",
    options: ["Integer", "Float", "String", "Boolean", "List"],
    answer: "Float",
    type: "single"
  },
  {
    id: 30,
    question: "Komponen yang harus ditentukan manual di 'while loop' tapi otomatis di 'for loop range()' adalah?",
    options: ["Fungsi print", "Kondisi berhenti (Stop)", "Nilai awal (Start)", "Logika", "step"],
    answer: ["Kondisi berhenti (Stop)", "Nilai awal (Start)", "step"],
    type: "multiple"
  }
];