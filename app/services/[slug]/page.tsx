import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardBody from "react-bootstrap/CardBody";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service ? service.title : "Layanan tidak ditemukan" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <Container className="page-fade py-5">
      <Link href="/services" className="btn text-accent px-0 mb-4">
        &larr; Kembali ke Services
      </Link>

      <Row className="g-5">
        <Col lg={7}>
          <span className="d-inline-grid mb-3" style={{ fontSize: "2rem" }}>
            {service.icon}
          </span>
          <h1 className="display-6">{service.title}</h1>
          <div className="divider-nk" />
          <p className="text-muted-nk">{service.description}</p>

          <h2 className="h5 mt-4 text-accent">Yang Anda dapatkan</h2>
          <ul className="text-muted-nk">
            {service.features.map((feature) => (
              <li key={feature} className="mb-1">
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="h5 mt-4 text-accent">Hasil akhir</h2>
          <ul className="text-muted-nk">
            {service.deliverables.map((item) => (
              <li key={item} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </Col>

        <Col lg={5}>
          <Card className="card-nk">
            <CardBody className="p-4">
              <h2 className="h6 text-accent text-uppercase mb-3">Ringkasan</h2>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span className="text-muted-nk small">Harga mulai</span>
                <span className="text-accent">{service.price}</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <span className="text-muted-nk small">Estimasi waktu</span>
                <span>{service.timeline}</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span className="text-muted-nk small">Revisi</span>
                <span>2 kali</span>
              </div>
              <Link href="/contact" className="btn btn-nk w-100 mt-3">
                Minta Penawaran
              </Link>
            </CardBody>
          </Card>

          <Card className="card-nk mt-4">
            <CardBody className="p-4">
              <h2 className="h6 text-accent text-uppercase mb-3">Layanan lain</h2>
              <ul className="footer-list">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`}>
                        {s.icon} {s.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
