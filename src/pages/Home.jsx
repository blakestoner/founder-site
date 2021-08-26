import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import { SocialList } from "../components/SocialList";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row
          style={{ display: "flex", alignItems: "center" }}
        >
          <Col>
            <p className="lead">Founder of Vngle</p>
            <h1 className="display-1">Blake Stoner</h1>
            <SocialList />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
}
