import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/hero.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <Container className={styles.content}>
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <span className={styles.eyebrow}>Digital Studio</span>
            <h1 className={styles.title}>
              Kami bangun website yang <span>benar-benar dipakai</span>
            </h1>
            <p className={styles.lead}>
              NusaKarya membantu UMKM dan startup memiliki website profil,
              toko online, dan desain antarmuka yang rapi, cepat, dan mudah
              dikelola.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link href="/services" className="btn btn-nk btn-lg">
                Lihat Layanan
              </Link>
              <Link href="/contact" className="btn btn-nk-outline btn-lg">
                Konsultasi Gratis
              </Link>
            </div>
          </Col>

          <Col lg={5}>
            <div className={styles.panel}>
              <h2 className={styles.panelTitle}>Kenapa NusaKarya?</h2>
              <ul className={styles.list}>
                <li>
                  <span>01</span> Harga transparan, tanpa biaya tersembunyi
                </li>
                <li>
                  <span>02</span> Pengerjaan 2 - 5 minggu
                </li>
                <li>
                  <span>03</span> Garansi revisi 2 kali
                </li>
                <li>
                  <span>04</span> Pendampingan setelah website online
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
