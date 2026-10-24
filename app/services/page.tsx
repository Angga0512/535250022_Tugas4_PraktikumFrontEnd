import type { Metadata } from "next";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="page-fade">
      <PageHeader
        eyebrow="Our Services"
        title="Layanan NusaKarya"
        subtitle="Empat layanan utama yang bisa disesuaikan dengan kebutuhan dan anggaran proyek Anda."
      />

      <Container className="py-4">
        <Row xs={1} md={2} className="g-4">
          {services.map((service) => (
            <Col key={service.slug}>
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="py-5">
        <div className="text-center">
          <p className="text-muted-nk mb-3">
            Belum yakin layanan mana yang cocok? Ceritakan kebutuhan Anda dulu.
          </p>
          <Link href="/contact" className="btn btn-nk">
            Konsultasi Gratis
          </Link>
        </div>
      </Container>
    </div>
  );
}
