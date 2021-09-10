import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../Layout";
import { SocialList } from "../SocialList";
import Typed from "react-typed";

import VngleImg from "../../../assets/images/vngle.png";

export default function Home() {
    return (
        <Layout>
            <Container className="h-100">
                <Row>
                    <Col
                        className="d-flex align-items-center justify-content-center justify-content-md-start"
                        md={6}
                    >
                        <div style={{ height: "fit-content" }}>
                            <p className="lead mb-1 fw-bold">
                                Founder of Vngle
                            </p>
                            <h1 className="display-1 fw-bold">
                                <span className="highlight">Blake Stoner</span>
                            </h1>
                            <p className="lead">
                                <Typed
                                    loop
                                    strings={[
                                        "Social Entrepreneur",
                                        "Grassroots Advocate",
                                        "Tech Enthusiast",
                                    ]}
                                    typeSpeed={40}
                                />
                            </p>
                            <SocialList />
                        </div>
                    </Col>
                    <Col md={6}>
                        <Card style={{ width: "80%", margin: "0 auto" }}>
                            <Card.Img variant="top" src={VngleImg} />
                            <Card.Body>
                                <Card.Title className="display-5 mb-4">
                                    Vngle
                                </Card.Title>
                                <Card.Text>
                                    Various angles of verified news near you!
                                </Card.Text>
                                <Button
                                    variant="warning"
                                    href="https://www.vngle.com/"
                                >
                                    See more
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}
