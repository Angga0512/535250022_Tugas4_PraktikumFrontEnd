import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer-nk">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <p className="text-accent font-display mb-2">NusaKarya Studio</p>
            <p className="text-muted-nk small mb-0" style={{ maxWidth: "20rem" }}>
              Studio digital yang membantu UMKM dan startup tumbuh lewat
              website yang rapi dan mudah dikelola.
            </p>
          </Col>
          <Col md={3} xs={6}>
            <p className="footer-title">Halaman</p>
            <ul className="footer-list">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} xs={6}>
            <p className="footer-title">Kontak</p>
            <ul className="footer-list">
              <li>hello@nusakarya.id</li>
              <li>+62 812 3456 7890</li>
              <li>Indonesia</li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <small>&copy; 2026 NusaKarya Studio. Tugas Praktikum Frontend.</small>
        </div>
      </Container>
    </footer>
  );
}
