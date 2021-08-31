import React from "react";
import { Button } from "react-bootstrap";
import { FiChevronRight } from "react-icons/fi";

export default function Post({ title, summary, link }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{summary}</p>
            <Button
                href={link}
                target="_blank"
                rel="noreferrer"
                variant="warning"
            >
                View more
                <FiChevronRight />
            </Button>
        </div>
    );
}
