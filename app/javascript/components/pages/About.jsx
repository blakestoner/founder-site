import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Layout from '../Layout';

import Blake from '../../../assets/images/blake.jpg';

export default function About() {
    return (
        <Layout>
            <Container>
                <h1 className="mb-4">
                    <span className="highlight">About Me</span>
                </h1>

                <Row className="gx-4 gy-4">
                    <Col md={6}>
                        <Image
                            src={Blake}
                            alt="Profile picture of Blake Stoner"
                            width="100%"
                            className="border border-warning border-2"
                            rounded
                        />
                    </Col>
                    <Col md={6}>
                        <div className="p-4 bg-light shadow rounded mb-5">
                            <p>
                                Blake Stoner is a grassroots community advocate
                                who founded Vngle to eradicate the legacy of
                                systematic underrepresentation that neglects and
                                ill informs diverse marginalized areas. Stoner
                                holds a BA in Economics from Morehouse College
                                and an MS in Strategic Communication from
                                Columbia University. He’s led Vngle through
                                Mozilla’s Fix-the-Internet Incubator, Envision
                                Accelerator, and DivInc’s Social Justice
                                Innovation Accelerator. Blake’s leadership also
                                earned Vngle placement as an MIT Solve Global
                                Challenge Finalist for creating Antiracist
                                Technology in the US.
                            </p>
                            <p>
                                Blake serves as a 2021 Goldin Global Fellow for
                                international grassroots leadership, a Board
                                Member of the Columbia Venture Community, and
                                has been a Harvard Franklin Fellow for Social
                                Impact x Tech, a Human-Centered Design Leader at
                                the Columbia Design Studio, and an Oprah Winfrey
                                International Leadership Fellow. Stoner’s
                                service across his hometown and the broader
                                Atlanta Metropolitan Area earned him a
                                Certificate of Special Congressional Recognition
                                from the late Congressman John Lewis.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}
