import { Container } from "react-bootstrap";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="text-center pt-5 pb-4">
      <Container>
        <span className="text-accent font-display eyebrow">{eyebrow}</span>
        <h1 className="display-6 mt-2">{title}</h1>
        {subtitle && (
          <p className="text-muted-nk mx-auto mb-0" style={{ maxWidth: "40rem" }}>
            {subtitle}
          </p>
        )}
      </Container>
    </header>
  );
}
