import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardBody from "react-bootstrap/CardBody";
import CardText from "react-bootstrap/CardText";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

const stats = [
  { value: "120+", label: "Proyek selesai" },
  { value: "80+", label: "Klien aktif" },
  { value: "5", label: "Tahun pengalaman" },
  { value: "4", label: "Layanan utama" },
];

const values = [
  {
    title: "Transparan",
    text: "Estimasi biaya dan waktu disepakati di awal, tanpa biaya tambahan mendadak.",
  },
  {
    title: "Rapi",
    text: "Struktur kode dan desain yang konsisten, sehingga mudah dirawat dan dikembangkan.",
  },
  {
    title: "Tepat waktu",
    text: "Progres dilaporkan setiap minggu sampai website siap diluncurkan.",
  },
];

export default function Home() {
  return (
    <div className="page-fade">
      <HeroSection />

      <section className="stats-strip py-4">
        <Container>
          <Row className="text-center gy-4">
            {stats.map((s) => (
              <Col xs={6} md={3} key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-4 gap-2">
            <div>
              <span className="text-accent font-display eyebrow">Layanan</span>
              <h2 className="mb-0 mt-1">Apa yang bisa kami bantu?</h2>
            </div>
            <Link href="/services" className="btn btn-nk-outline btn-sm">
              Semua layanan
            </Link>
          </div>
          <Row className="g-4">
            {services.map((service) => (
              <Col md={6} xl={3} key={service.slug}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="text-center mb-4">
            <span className="text-accent font-display eyebrow">Prinsip Kerja</span>
            <h2 className="mt-1">Cara kami mengerjakan proyek</h2>
          </div>
          <Row className="g-4">
            {values.map((v) => (
              <Col md={4} key={v.title}>
                <Card className="card-nk h-100">
                  <CardBody className="p-4">
                    <h3 className="h5 text-accent">{v.title}</h3>
                    <CardText className="text-muted-nk mb-0 small">
                      {v.text}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Card className="card-nk">
            <CardBody className="p-4 p-md-5 text-center">
              <h2 className="h3 mb-2">Siap mulai proyek Anda?</h2>
              <p className="text-muted-nk mb-4">
                Konsultasi pertama gratis. Ceritakan kebutuhan Anda, kami bantu
                susun rencananya.
              </p>
              <Link href="/contact" className="btn btn-nk">
                Hubungi Kami
              </Link>
            </CardBody>
          </Card>
        </Container>
      </section>
    </div>
  );
}
