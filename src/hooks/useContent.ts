import type { InfoCard, HeroSection, AboutSection, CTASection, NewsItem, GalleryItem, ProfilInterface, PemerintahInterface, BudgetInterface, AparaturInterface, DataPendudukInterface, KategoriKeluargaInterface, DataStatisticInterface, ProdukHukumInterface, ProductItem } from "@/types/Simple"

export function useContent() {
  const hero: HeroSection = {
    title: "Selamat Datang di Desa Lubuk Raman",
    description: "Desa yang indah dengan kekayaan budaya dan keramahan masyarakatnya",
    image: "/images/hero/hero-bg.jpeg?height=600&width=1600",
    buttons: {
      primary: {
        text: "Profil Desa",
        url: "/profil",
      },
      secondary: {
        text: "Layanan Publik",
        url: "/layanan",
      },
    },
  }

  const infoCards: InfoCard[] = [
    {
      id: "demografi",
      title: "Demografi",
      description: "Jumlah penduduk Desa Lubuk Raman mencapai 5.000 jiwa dengan 1.200 kepala keluarga",
      icon: "users",
      link: {
        text: "Selengkapnya",
        url: "/demografi",
      },
    },
    {
      id: "wilayah",
      title: "Wilayah",
      description: "Desa Lubuk Raman memiliki luas wilayah 800 hektar dengan 5 dusun/banjar",
      icon: "map-pin",
      link: {
        text: "Selengkapnya",
        url: "/wilayah",
      },
    },
    {
      id: "layanan",
      title: "Layanan",
      description: "Berbagai layanan administrasi dan pelayanan publik untuk masyarakat Desa Lubuk Raman",
      icon: "file-text",
      link: {
        text: "Selengkapnya",
        url: "/layanan",
      },
    },
  ]

  const about: AboutSection = {
    badge: "Tentang Desa",
    title: "Desa Lubuk Raman, Kecamatan Rambang Niru",
    description: [
      "Desa Lubuk Raman merupakan salah satu desa yang terletak di Kecamatan Rambang Niru, Kabupaten Bangli, Provinsi Bali. Desa ini memiliki keindahan alam yang masih asri dengan pemandangan persawahan yang hijau dan udara yang sejuk.",
      "Masyarakat Desa Lubuk Raman masih memegang teguh adat istiadat dan budaya Bali. Berbagai upacara adat dan kegiatan keagamaan masih rutin dilaksanakan sebagai bentuk pelestarian budaya.",
    ],
    image: "/images/about/about-bg.jpeg?height=400&width=600",
    button: {
      text: "Profil Lengkap",
      url: "/profil",
    },
  }

  const news: NewsItem[] = [
    {
      id: "1",
      title: "Kegiatan Gotong Royong Pembangunan Balai Banjar",
      excerpt:
        "Masyarakat Desa Lubuk Raman melaksanakan kegiatan gotong royong dalam rangka pembangunan balai banjar yang akan digunakan sebagai pusat kegiatan masyarakat...",
      date: "12 April 2023",
      readTime: "5 menit membaca",
      image: "/images/news/berita-1.jpeg?height=200&width=400&text=Berita+1",
      slug: "1",
    },
    {
      id: "2",
      title: "Pelatihan Kerajinan Tangan untuk Ibu-Ibu PKK",
      excerpt:
        "Desa Lubuk Raman mengadakan pelatihan kerajinan tangan untuk meningkatkan keterampilan dan ekonomi kreatif bagi ibu-ibu PKK di balai desa...",
      date: "5 April 2023",
      readTime: "4 menit membaca",
      image: "/images/news/berita-2.jpeg?height=200&width=400&text=Berita+2",
      slug: "2",
    },
    {
      id: "3",
      title: "Penyuluhan Kesehatan dan Vaksinasi Gratis",
      excerpt:
        "Bekerjasama dengan Puskesmas setempat, Desa Lubuk Raman mengadakan kegiatan penyuluhan kesehatan dan vaksinasi gratis untuk seluruh warga...",
      date: "28 Maret 2023",
      readTime: "3 menit membaca",
      image: "/images/news/berita-3.jpeg?height=200&width=400&text=Berita+3",
      slug: "3",
    },
  ]

  const gallery: GalleryItem[] = Array.from({ length: 8 }, (_, i) => ({
    id: String(i + 1),
    image: `/images/gallery/galeri${i + 1}.jpeg?height=250&width=250&text=Galeri+${i + 1}`,
    title: `Galeri ${i + 1}`,
  }))

  const cta: CTASection = {
    title: "Hubungi Kami",
    description:
      "Untuk informasi lebih lanjut tentang Desa Lubuk Raman atau layanan yang tersedia, silakan hubungi kami melalui kontak di bawah ini.",
    buttons: {
      primary: {
        text: "Hubungi Kami",
        url: "/kontak",
        icon: "phone",
      },
      secondary: {
        text: "Kirim Pesan",
        url: "/pesan",
        icon: "mail",
      },
    },
  }

  const budgetPembelanjaan: BudgetInterface[] = [
    {
      title: "Bidang Penyelenggarakan Pemerintahan Desa",
      current: "Rp 2.026.530.313,00",
      target: "Rp 2.476.461.419,00",
      percentage: 81.83,
    },
    {
      title: "Bidang Pelaksanaan Pembangunan Desa",
      current: "Rp 646.928.920,00",
      target: "Rp 862.834.121,00",
      percentage: 74.18,
    },
    {
      title: "Bidang Pembinaan Kemasyarakatan",
      current: "Rp 599.126.500,00",
      target: "Rp 1.027.473.920,00",
      percentage: 48.3,
    },
    {
      title: "Bidang Pemberdayaan Kemasyarakatan",
      current: "Rp 599.126.500,00",
      target: "Rp 1.027.473.920,00",
      percentage: 68.8,
    },
    {
      title: "Bidang Penanggulangan Bencana, Darurat Dan Mendesak Desa",
      current: "Rp 178.614.960,00",
      target: "Rp 178.614.960,00",
      percentage: 100,
    },
  ]

  const budgetPelaksanaan: BudgetInterface[] = [
    {
      title: "Pendapatan",
      current: "Rp 4.135.209.356,00",
      target: "Rp 4.817.650.000,00",
      percentage: 85.83,
    },
    {
      title: "Belanja",
      current: "Rp 3.605.287.733,00",
      target: "Rp 4.996.264.960,00",
      percentage: 72.18,
    },
    {
      title: "Pembiayaan",
      current: "Rp 178.614.960,00",
      target: "Rp 178.614.960,00",
      percentage: 100,
    },
  ]

  const budgetPendapatan: BudgetInterface[] = [
    {
      title: "Hasil Usaha Desa",
      current: "Rp 18.500.000,00",
      target: "Rp 26.200.000,00",
      percentage: 70.61,
    },
    {
      title: "Dana Desa",
      current: "Rp 1.204.504.000,00",
      target: "Rp 1.204.504.000,00",
      percentage: 100,
    },
    {
      title: "Bagi Hasil Pajak Dan Retribusi",
      current: "Rp 150.217.500,00",
      target: "Rp 252.841.000,00",
      percentage: 59.41,
    },
    {
      title: "Alokasi Dana Desa",
      current: "Rp 2.484.462.325,00",
      target: "Rp 2.552.280.000,00",
      percentage: 97.34,
    },
    {
      title: "Bantuan Keuangan Provinsi",
      current: "Rp 209.300.000,00",
      target: "Rp 255.500.000,00",
      percentage: 81.92,
    },
    {
      title: "Bantuan Keuangan Kabupaten/Kota",
      current: "Rp 61.000.000,00",
      target: "Rp 517.000.000,00",
      percentage: 11.8,
    },
    {
      title: "Lain-Lain Pendapatan Desa Yang Sah",
      current: "Rp 7.225.531,00",
      target: "Rp 9.325.000,00",
      percentage: 77.49,
    },
  ]

  const profil: ProfilInterface = {
    title: "Profil Desa",
    date: "29 Juli 2013",
    author: "Administrator",
    readTime: "Dibaca 78.187 Kali",
    content: `            
            <p>Desa Susut merupakan daerah dataran tinggi, terletak 4 km arah Selatan dari kota kecamatan Susut dan 10 km arah Barat kota Kabupaten Bangli, dengan luas wilayah 4,83 km², dengan sebagian besar lahan digunakan untuk kegiatan pertanian, yakni seluas 216,00 Ha (0,45%).</p>

            <p>Desa Susut Bangli meliputi 9 Banjar/Pekraman, yaitu: Banjar Pukuh, Banjar Penatahan, Banjar Penglumbaran, Banjar Lebah, Banjar Juwuk Bali, Banjar Manuk, Banjar Tangkas, Banjar Susut Kaja, dan Banjar Susut Kelod.</p>

            <h3>Keadaan Umum Desa</h3>

            <h4>Ekonomi</h4>
            <p>Struktur perekonomian Desa Susut didominasi oleh sektor pertanian. Hal ini terlihat dari persentase penggunaan lahan untuk usaha pertanian sebesar 50%, dengan sebagian besar penduduk menggantungkan hidup dari sektor ini. Sekitar 1.030 jiwa atau 0,17% penduduk bergantung pada sektor pertanian, khususnya pertanian sawah dengan produk unggulan berupa padi dan palawija.</p>

            <p>Masyarakat juga mengandalkan sektor peternakan, dengan jenis ternak peliharaan seperti sapi, babi, unggas, dan lainnya. Sistem beternak masih bersifat tradisional, karena diposisikan sebagai usaha sampingan untuk memenuhi kebutuhan konsumsi keluarga. Selain itu, perekonomian desa juga digerakkan oleh sektor perdagangan dan industri kecil/rumah tangga.</p>

            <h4>Sosial dan Budaya</h4>
            <p>Kondisi sosial budaya masyarakat desa ditentukan oleh empat pilar utama: penduduk, tingkat pendidikan, derajat kesehatan, dan tradisi/budaya masyarakat desa.</p>

            <p>Penduduk merupakan modal dasar pembangunan karena menjadi pelaku dan pemanfaat hasil pembangunan. Di sektor pendidikan, pemerintah telah menyediakan berbagai fasilitas mulai dari gedung, tenaga pendidik, hingga pembiayaan melalui program BOS. Hal ini bertujuan untuk pemerataan pendidikan, peningkatan kualitas, serta kapasitas masyarakat.</p>

            <p>Sebagian besar penduduk berpendidikan tamat SD, disusul oleh lulusan SMP, SLTA, D1, dan S1.</p>

            <p>Dalam bidang kebudayaan, masyarakat Desa Susut memiliki budaya Bali yang kental, dengan nilai-nilai agama Hindu. Filosofi <strong>Tri Hita Karana</strong> menjadi tuntunan hidup dalam menjaga keseimbangan hubungan antara manusia dengan Tuhan, sesama manusia, dan lingkungan. Nilai-nilai <em>paras paros sarpa naya salunglung sabyantaka</em> (kerukunan, keselarasan, dan kepatutan) menjadi pedoman dalam menjaga ketertiban dan kedamaian sosial.</p>

            <h4>Kesehatan dan Kesejahteraan Masyarakat</h4>
            <p>Pemerintah telah menyediakan sarana dan prasarana kesehatan serta tenaga medis untuk memudahkan akses masyarakat terhadap layanan kesehatan. Di bidang kesejahteraan, berbagai program seperti raskin dan bedah rumah telah diluncurkan, namun masalah kemiskinan tetap menjadi tantangan utama. Jumlah penduduk miskin tercatat sebanyak 286 jiwa.</p>
          `,
  }

  const sejarah: ProfilInterface = {
    title: "Sejarah Desa",
    date: "29 Juli 2013",
    author: "Administrator",
    readTime: "Dibaca 78.187 Kali",
    content: `            
            <p>Desa Susut merupakan daerah dataran tinggi, terletak 4 km arah Selatan dari kota kecamatan Susut dan 10 km arah Barat kota Kabupaten Bangli, dengan luas wilayah 4,83 km², dengan sebagian besar lahan digunakan untuk kegiatan pertanian, yakni seluas 216,00 Ha (0,45%).</p>

            <p>Desa Susut Bangli meliputi 9 Banjar/Pekraman, yaitu: Banjar Pukuh, Banjar Penatahan, Banjar Penglumbaran, Banjar Lebah, Banjar Juwuk Bali, Banjar Manuk, Banjar Tangkas, Banjar Susut Kaja, dan Banjar Susut Kelod.</p>

            <h3>Keadaan Umum Desa</h3>

            <h4>Ekonomi</h4>
            <p>Struktur perekonomian Desa Susut didominasi oleh sektor pertanian. Hal ini terlihat dari persentase penggunaan lahan untuk usaha pertanian sebesar 50%, dengan sebagian besar penduduk menggantungkan hidup dari sektor ini. Sekitar 1.030 jiwa atau 0,17% penduduk bergantung pada sektor pertanian, khususnya pertanian sawah dengan produk unggulan berupa padi dan palawija.</p>

            <p>Masyarakat juga mengandalkan sektor peternakan, dengan jenis ternak peliharaan seperti sapi, babi, unggas, dan lainnya. Sistem beternak masih bersifat tradisional, karena diposisikan sebagai usaha sampingan untuk memenuhi kebutuhan konsumsi keluarga. Selain itu, perekonomian desa juga digerakkan oleh sektor perdagangan dan industri kecil/rumah tangga.</p>

            <h4>Sosial dan Budaya</h4>
            <p>Kondisi sosial budaya masyarakat desa ditentukan oleh empat pilar utama: penduduk, tingkat pendidikan, derajat kesehatan, dan tradisi/budaya masyarakat desa.</p>

            <p>Penduduk merupakan modal dasar pembangunan karena menjadi pelaku dan pemanfaat hasil pembangunan. Di sektor pendidikan, pemerintah telah menyediakan berbagai fasilitas mulai dari gedung, tenaga pendidik, hingga pembiayaan melalui program BOS. Hal ini bertujuan untuk pemerataan pendidikan, peningkatan kualitas, serta kapasitas masyarakat.</p>

            <p>Sebagian besar penduduk berpendidikan tamat SD, disusul oleh lulusan SMP, SLTA, D1, dan S1.</p>

            <p>Dalam bidang kebudayaan, masyarakat Desa Susut memiliki budaya Bali yang kental, dengan nilai-nilai agama Hindu. Filosofi <strong>Tri Hita Karana</strong> menjadi tuntunan hidup dalam menjaga keseimbangan hubungan antara manusia dengan Tuhan, sesama manusia, dan lingkungan. Nilai-nilai <em>paras paros sarpa naya salunglung sabyantaka</em> (kerukunan, keselarasan, dan kepatutan) menjadi pedoman dalam menjaga ketertiban dan kedamaian sosial.</p>

            <h4>Kesehatan dan Kesejahteraan Masyarakat</h4>
            <p>Pemerintah telah menyediakan sarana dan prasarana kesehatan serta tenaga medis untuk memudahkan akses masyarakat terhadap layanan kesehatan. Di bidang kesejahteraan, berbagai program seperti raskin dan bedah rumah telah diluncurkan, namun masalah kemiskinan tetap menjadi tantangan utama. Jumlah penduduk miskin tercatat sebanyak 286 jiwa.</p>
          `,
  }

  const pemerintah: PemerintahInterface = {
    title: "Visi & Misi",
    date: "29 Juli 2013",
    author: "Administrator",
    readTime: "Dibaca 78.187 Kali",
    content: `
                      <section>
              <h2>Visi</h2>
              <p>
                “Terbangunnya tata kelola pemerintahan desa yang baik dan bersih guna mewujudkan kehidupan masyarakat Desa yang Adil, Makmur dan Sejahtera”
              </p>

              <h2>Misi</h2>
              <ul>
                <li>Melakukan reformasi sistem kinerja aparatur pemerintahan desa guna meningkatkan kualitas pelayanan kepada masyarakat.</li>
                <li>Menyelenggarakan pemerintahan yang bersih, terbebas dari korupsi serta bentuk-bentuk penyelewengan lainnya.</li>
                <li>Menyelenggarakan urusan pemerintahan desa secara terbuka dan bertanggung jawab sesuai dengan peraturan perundang-undangan.</li>
                <li>Meningkatkan perekonomian masyarakat melalui pendampingan berupa penyuluhan khusus kepada UKM, wiraswasta, dan petani.</li>
                <li>Meningkatkan mutu kesejahteraan masyarakat untuk mencapai taraf kehidupan yang lebih baik dan layak sehingga menjadi desa yang maju dan mandiri.</li>
              </ul>
            </section>
          `,
  }

  const aparatur: AparaturInterface[] = [
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Asep Rahmat",
      jabatan: "Kepala Desa"
    },
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Ahmad Fitriana",
      jabatan: "Sekretaris Desa"
    },
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Neni Sutirah",
      jabatan: "Kaur Umum"
    },
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Tiar Gustirawan",
      jabatan: "Kaur Perencanaan"
    },
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Ayi Sumarna",
      jabatan: "Kepala Keuangan"
    },
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Dadan",
      jabatan: "Kasi Pemerintahan"
    },
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Hilman Ruhiat",
      jabatan: "Kasi Pelayanan"
    },
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Dadang Ruhiyat",
      jabatan: "Kasi Kesejahteraan"
    },
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Dendi",
      jabatan: "Kepala Dusun 1"
    },
    {
      foto: "/images/aparatur/placeholder.jpeg",
      nama: "Dani Sumardi",
      jabatan: "Kepala Dusuun 2"
    },
  ]

  const dataPenduduk: DataPendudukInterface[] = [
    {
      id: 0,
      wilayah: "Lubuk Raman Dusun 1",
      kk: 123,
      lp: 200,
      l: 100,
      p: 100
    },
    {
      id: 1,
      wilayah: "Lubuk Raman Dusun 2",
      kk: 345,
      lp: 420,
      l: 210,
      p: 210
    },
    {
      id: 2,
      wilayah: "Lubuk Raman Dusun 3",
      kk: 876,
      lp: 650,
      l: 325,
      p: 325
    },
    {
      id: 3,
      wilayah: "Lubuk Raman Dusun 4",
      kk: 123,
      lp: 200,
      l: 100,
      p: 100
    },
    {
      id: 4,
      wilayah: "Lubuk Raman Dusun 5",
      kk: 123,
      lp: 200,
      l: 100,
      p: 100
    },
    {
      id: 5,
      wilayah: "Lubuk Raman Dusun 6",
      kk: 123,
      lp: 200,
      l: 100,
      p: 100
    }
  ]

  const kategoriKeluarga: KategoriKeluargaInterface[] = [
    {
      id: 0,
      kategori: "Keluarga Sangat Miskin (KSM)",
      jumlah: 908
    },
    {
      id: 1,
      kategori: "Keluarga Miskin",
      jumlah: 621
    },
    {
      id: 2,
      kategori: "Keluarga Pra-Sejahtera",
      jumlah: 90
    },
    {
      id: 3,
      kategori: "Keluarga Sejahtera I (Menengah Bawah)",
      jumlah: 120
    },
    {
      id: 4,
      kategori: "Keluarga Sejahtera II (Menengah)",
      jumlah: 643
    },
    {
      id: 5,
      kategori: "Keluarga Sejahtera III (Menengah Atas)",
      jumlah: 389
    },
    {
      id: 6,
      kategori: "Keluarga Mampu/Kaya",
      jumlah: 124
    },
  ]

  const statisticKeluarga: DataStatisticInterface[] = [
    {
      id: 0,
      kategori: "Balita",
      lp: 44,
      l: 56,
      p: 32,
    },
    {
      id: 1,
      kategori: "Batita",
      lp: 99,
      l: 57,
      p: 25,
    },
    {
      id: 2,
      kategori: "Produktif",
      lp: 34,
      l: 65,
      p: 78,
    },
    {
      id: 3,
      kategori: "30 > 40",
      lp: 88,
      l: 67,
      p: 54,
    },
    {
      id: 4,
      kategori: "40 > 55",
      lp: 37,
      l: 56,
      p: 71,
    },
    {
      id: 5,
      kategori: "Manula",
      lp: 34,
      l: 56,
      p: 24,
    },
  ]

  const produkHukum: ProdukHukumInterface[] = [
    {
      id: 0,
      title: "Judul 1",
      file: "/images/produk-hukum/file1.pdf"
    },
    {
      id: 1,
      title: "Judul 2",
      file: "/images/produk-hukum/file2.pdf"
    },
    {
      id: 2,
      title: "Judul 3",
      file: "/images/produk-hukum/file3.pdf"
    }
  ]

  const productItems: ProductItem[] = [
    { id: 1, name: "Gula Aren Premium", seller: "Toko Sukses", price: 75000, image: "/images/produk/produk1.jpeg" },
    { id: 2, name: "Tapona Food ", seller: "Warung Maju", price: 32000, image: "/images/produk/produk2.jpeg" },
    { id: 3, name: "Kue Wingko", seller: "Pasar Sejahtera", price: 14000, image: "/images/produk/produk3.jpeg" },
    { id: 4, name: "Minuman Racikan", seller: "Toko Sukses", price: 75000, image: "/images/produk/produk4.jpeg" },
    { id: 5, name: "Bawang Goreng", seller: "Warung Maju", price: 32000, image: "/images/produk/produk5.jpeg" },
    { id: 6, name: "Mie Bola", seller: "Pasar Sejahtera", price: 14000, image: "/images/produk/produk6.jpeg" },
    { id: 7, name: "Bawang Goreng", seller: "Toko Sukses", price: 75000, image: "/images/produk/produk7.jpeg" },
  ];

  return {
    hero,
    infoCards,
    about,
    news,
    gallery,
    cta,
    profil,
    pemerintah,
    budgetPendapatan,
    budgetPelaksanaan,
    budgetPembelanjaan,
    sejarah,
    aparatur,
    dataPenduduk,
    kategoriKeluarga,
    statisticKeluarga,
    produkHukum,
    productItems,
  }
}
