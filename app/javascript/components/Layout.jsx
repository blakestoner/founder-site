import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main style={{ flex: 1, display: "flex", alignItems: "center" }}>
                {children}
            </main>
            <Footer />
        </>
    );
}
