import type { Metadata } from "next";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import MemberCard from "@/components/MemberCard";
import PageHeader from "@/components/PageHeader";
import { members } from "@/lib/team";

export const metadata: Metadata = { title: "About" };

const milestones = [
  { year: "2021", text: "Berdiri dari tiga mahasiswa yang mengerjakan proyek website kampus." },
  { year: "2022", text: "Mengerjakan 20 proyek company profile untuk UMKM." },
  { year: "2024", text: "Mulai mengerjakan toko online dan aplikasi mobile sederhana." },
  { year: "2026", text: "Lebih dari 120 proyek selesai dengan klien dari berbagai kota." },
];

export default function AboutPage() {
  return (
    <div className="page-fade">
      <PageHeader
        eyebrow="About Us"
        title="Studio kecil, pekerjaan yang serius"
        subtitle="NusaKarya adalah studio digital yang fokus membantu bisnis lokal tumbuh lewat website yang rapi dan mudah dikelola."
      />

      <Container className="py-4">
        <Row className="g-5 align-items-start">
          <Col lg={6}>
            <h2 className="h4">Cerita singkat</h2>
            <div className="divider-nk" />
            <p className="text-muted-nk">
              Awalnya kami hanya mengerjakan website untuk kegiatan kampus.
              Setelah beberapa kali membantu UMKM, kami melihat banyak 
              bisnis yang sudah punya produk bagus tetapi belum
              punya kehadiran digital yang layak.
            </p>
            <p className="text-muted-nk">
              Sejak itu kami mulai menerima proyek company profile, toko online,
              dan desain antarmuka. Sampai sekarang lebih dari 120 proyek telah
              kami selesaikan bersama klien dari berbagai kota.
            </p>
            <p className="text-muted-nk mb-0">
              Tim kami masih kecil: {members.length} orang dengan peran yang
              jelas, sehingga komunikasi tetap cepat dan setiap proyek ditangani
              langsung oleh orang yang mengerjakannya.
            </p>
          </Col>

          <Col lg={6}>
            <h2 className="h4">Perjalanan kami</h2>
            <div className="divider-nk" />
            <ul className="timeline-nk">
              {milestones.map((m) => (
                <li key={m.year}>
                  <span className="text-accent font-display">{m.year}</span>
                  <p className="text-muted-nk mb-0 small">{m.text}</p>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-nk-outline btn-sm mt-3">
              Hubungi Kami
            </Link>
          </Col>
        </Row>
      </Container>

      <Container className="py-5">
        <div className="text-center mb-4">
          <span className="text-accent font-display eyebrow">Tim Kami</span>
          <h2 className="mt-1">Orang di balik proyek Anda</h2>
        </div>
        <Row xs={1} sm={2} lg={4} className="g-4">
          {members.map((member) => (
            <Col key={member.id}>
              <MemberCard member={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
