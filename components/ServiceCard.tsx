import Link from "next/link";
import { Card } from "react-bootstrap";
import CardBody from "react-bootstrap/CardBody";
import CardText from "react-bootstrap/CardText";
import type { Service } from "@/lib/services";
import styles from "@/styles/card.module.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className={`card-nk ${styles.card}`}>
      <CardBody className="p-4 d-flex flex-column">
        <span className={styles.icon}>{service.icon}</span>
        <h3 className={styles.title}>{service.title}</h3>
        <CardText className="text-muted-nk flex-grow-1">
          {service.summary}
        </CardText>
        <div className={styles.meta}>
          <span className="text-accent">{service.price}</span>
          <span className="text-muted-nk small">{service.timeline}</span>
        </div>
        <Link href={`/services/${service.slug}`} className="btn btn-nk btn-sm mt-3">
          Detail Layanan
        </Link>
      </CardBody>
    </Card>
  );
}
