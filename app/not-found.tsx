import Link from "next/link";
import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="page-fade text-center py-5">
      <h1 className="display-1 text-accent">404</h1>
      <h2 className="h4">Halaman tidak ditemukan</h2>
      <div className="divider-nk mx-auto" />
      <p className="text-muted-nk">
        Halaman yang Anda cari tidak ada, atau mungkin sudah dipindahkan.
      </p>
      <Link href="/" className="btn btn-nk">
        Kembali ke Home
      </Link>
    </Container>
  );
}
