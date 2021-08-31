import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {
    FiMail,
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiLinkedin,
} from 'react-icons/fi';

import '../../assets/stylesheets/SocialList.css';

export function SocialList() {
    return (
        <Row className="social-list">
            <Col>
                <a href="mailto:blake@vngle.com">
                    <FiMail />
                </a>
            </Col>
            <Col>
                <a href="">
                    <FiLinkedin />
                </a>
            </Col>
            <Col>
                <a href="">
                    <FiTwitter />
                </a>
            </Col>
            <Col>
                <a href="">
                    <FiInstagram />
                </a>
            </Col>
            <Col>
                <a href="">
                    <FiFacebook />
                </a>
            </Col>
        </Row>
    );
}
