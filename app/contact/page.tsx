import type { Metadata } from "next";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardBody from "react-bootstrap/CardBody";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Contact" };

const info = [
  { label: "Email", value: "hello@nusakarya.id" },
  { label: "Telepon / WhatsApp", value: "+62 812 3456 7890" },
  { label: "Alamat", value: "Jl. Kaliurang No. 10" },
  { label: "Jam operasional", value: "Senin - Jumat, 09.00 - 17.00 WIB" },
];

export default function ContactPage() {
  return (
    <div className="page-fade">
      <PageHeader
        eyebrow="Contact"
        title="Hubungi NusaKarya"
        subtitle="Ada pertanyaan atau ingin mulai proyek? Kirim pesan lewat form, kami balas maksimal 1x24 jam."
      />

      <Container className="pb-4">
        <Row className="g-4">
          <Col lg={7}>
            <Card className="card-nk">
              <CardBody className="p-4">
                <ContactForm />
              </CardBody>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="card-nk h-100">
              <CardBody className="p-4">
                <h2 className="h6 text-accent text-uppercase mb-3">
                  Informasi Kontak
                </h2>
                {info.map((item) => (
                  <div key={item.label} className="mb-3">
                    <div className="text-accent font-display small text-uppercase">
                      {item.label}
                    </div>
                    <div className="text-muted-nk">{item.value}</div>
                  </div>
                ))}
                <p className="text-muted-nk small mb-0 mt-4">
                  Untuk respon lebih cepat, hubungi kami lewat WhatsApp pada jam
                  operasional.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
