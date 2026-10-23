import { Card } from "react-bootstrap";
import CardBody from "react-bootstrap/CardBody";
import CardText from "react-bootstrap/CardText";
import type { Member } from "@/lib/team";
import styles from "@/styles/team.module.css";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Card className={`card-nk ${styles.card}`}>
      <CardBody className="p-4 text-center">
        <div className={styles.avatar}>{member.emoji}</div>
        <h3 className={styles.name}>{member.name}</h3>
        <div className={styles.role}>{member.role}</div>
        <CardText className="text-muted-nk small mt-3 mb-0">
          {member.bio}
        </CardText>
      </CardBody>
    </Card>
  );
}
