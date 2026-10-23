export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  description: string;
  features: string[];
  deliverables: string[];
  price: string;
  timeline: string;
};

export const services: Service[] = [
  {
    slug: "company-profile",
    title: "Company Profile Website",
    icon: "🏢",
    summary:
      "Website profil perusahaan yang rapi, cepat, dan mudah diperbarui oleh tim Anda.",
    description:
      "Layanan paling banyak dipesan klien kami. Kami menyusun struktur halaman, menulis konten bersama Anda, lalu membangun website yang menampilkan profil, layanan, dan kontak perusahaan secara jelas.",
    features: [
      "Desain responsif untuk HP, tablet, dan desktop",
      "Halaman profil, layanan, dan kontak",
      "Optimasi SEO dasar",
      "Form kontak dan integrasi WhatsApp",
    ],
    deliverables: [
      "Source code lengkap",
      "Domain dan hosting 1 tahun",
      "Panduan penggunaan admin",
    ],
    price: "Rp 3.500.000",
    timeline: "2 - 3 minggu",
  },
  {
    slug: "toko-online",
    title: "Toko Online",
    icon: "🛒",
    summary:
      "Katalog produk dengan keranjang dan checkout sederhana untuk mulai berjualan online.",
    description:
      "Cocok untuk UMKM yang ingin menjual produk langsung dari website sendiri, tanpa bergantung penuh pada marketplace. Kami bantu dari pengaturan produk sampai proses pemesanan.",
    features: [
      "Katalog produk dengan kategori",
      "Keranjang dan form pemesanan",
      "Integrasi pembayaran transfer bank",
      "Dashboard admin untuk mengelola produk",
    ],
    deliverables: [
      "Source code lengkap",
      "Setup produk awal (20 produk)",
      "Pelatihan admin 1 sesi",
    ],
    price: "Rp 6.000.000",
    timeline: "4 - 5 minggu",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: "🎨",
    summary:
      "Desain antarmuka yang bersih dan alur pengguna yang mudah dipahami.",
    description:
      "Kami mulai dari wireframe sederhana, lalu menyusun desain visual di Figma. Hasilnya bisa langsung dipakai developer internal Anda atau dilanjutkan ke tahap pengembangan oleh kami.",
    features: [
      "Wireframe dan user flow",
      "Desain high fidelity di Figma",
      "Design system dan komponen reusable",
      "Prototype interaktif",
    ],
    deliverables: [
      "File Figma lengkap",
      "Prototype yang bisa diklik",
      "Panduan warna dan tipografi",
    ],
    price: "Rp 2.500.000",
    timeline: "2 minggu",
  },
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    icon: "🛠️",
    summary:
      "Perawatan bulanan agar website tetap aman, cepat, dan bebas error.",
    description:
      "Website perlu dirawat seperti kendaraan. Kami memantau uptime, memperbarui dependensi, mencadangkan data, dan menangani perbaikan kecil setiap bulan.",
    features: [
      "Update dependensi dan patch keamanan",
      "Backup data berkala",
      "Monitoring uptime 24/7",
      "Perbaikan bug minor tanpa biaya tambahan",
    ],
    deliverables: [
      "Laporan bulanan",
      "Backup mingguan",
      "Akses support via WhatsApp",
    ],
    price: "Rp 400.000 / bulan",
    timeline: "Berjalan bulanan",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
