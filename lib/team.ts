export type Member = {
  id: string;
  name: string;
  role: string;
  emoji: string;
  bio: string;
};

export const members: Member[] = [
  {
    id: "andi",
    name: "Andi Pratama",
    role: "Founder & Web Developer",
    emoji: "👨‍💻",
    bio: "Menangani arsitektur aplikasi dan pengembangan website. Lulusan Teknik Informatika yang suka ngoprek Next.js.",
  },
  {
    id: "siti",
    name: "Siti Rahma",
    role: "UI/UX Designer",
    emoji: "👩‍🎨",
    bio: "Menyusun wireframe, desain antarmuka, dan menjaga konsistensi design system di setiap proyek.",
  },
  {
    id: "budi",
    name: "Budi Santoso",
    role: "Digital Marketer",
    emoji: "📊",
    bio: "Membantu klien menyusun konten dan strategi agar website mereka mudah ditemukan calon pelanggan.",
  },
  {
    id: "dewi",
    name: "Dewi Lestari",
    role: "Project Manager",
    emoji: "📋",
    bio: "Menjadi penghubung antara klien dan tim, memastikan proyek selesai sesuai jadwal dan kesepakatan.",
  },
];
