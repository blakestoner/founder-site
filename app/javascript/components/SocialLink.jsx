import React from "react";

export default function SocialLink({ href, icon }) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            {icon}
        </a>
    );
}
