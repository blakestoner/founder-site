import React from "react";
import { Row, Col } from "react-bootstrap";
import {
    FiMail,
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiLinkedin,
} from "react-icons/fi";

import SocialLink from "./SocialLink";

import "../../assets/stylesheets/SocialList.css";

export function SocialList() {
    const listData = [
        {
            href: "mailto:blake@vngle.com",
            icon: <FiMail />,
        },
        {
            href: "https://www.linkedin.com/in/blakestoner/",
            icon: <FiLinkedin />,
        },
        {
            href: "https://twitter.com/iamblakestoner/",
            icon: <FiTwitter />,
        },
        {
            href: "https://instagram.com/iamblakestoner/",
            icon: <FiInstagram />,
        },
        {
            href: "https://www.facebook.com/blake.p.stoner/",
            icon: <FiFacebook />,
        },
    ];

    return (
        <Row className="social-list">
            {listData.map((link) => {
                return (
                    <Col key={link.href}>
                        <SocialLink href={link.href} icon={link.icon} />
                    </Col>
                );
            })}
        </Row>
    );
}
