"use client";

import { FormEvent, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  }

  return (
    <Form onSubmit={handleSubmit}>
      {sent && (
        <Alert variant="success" dismissible onClose={() => setSent(false)}>
          Terima kasih! Pesan Anda sudah kami terima dan akan dibalas maksimal 1x24 jam.
        </Alert>
      )}
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nama</Form.Label>
        <Form.Control type="text" placeholder="Nama lengkap" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="nama@email.com" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="service">
        <Form.Label>Layanan yang diminati</Form.Label>
        <Form.Select defaultValue="">
          <option value="" disabled>
            Pilih layanan
          </option>
          <option>Company Profile Website</option>
          <option>Toko Online</option>
          <option>UI/UX Design</option>
          <option>Maintenance & Support</option>
          <option>Belum tahu, mau konsultasi dulu</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-4" controlId="message">
        <Form.Label>Pesan</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Ceritakan kebutuhan proyek Anda..."
          required
        />
      </Form.Group>
      <Button type="submit" className="btn-nk">
        Kirim Pesan
      </Button>
    </Form>
  );
}
