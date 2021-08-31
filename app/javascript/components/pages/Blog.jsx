import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Layout from "../Layout";
import { getPosts } from "../../actions";
import Post from "../Post";

function BlogPage({ posts, getPosts }) {
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Layout>
            <Container className="py-5">
                <h1 className="mb-4">
                    <span className="highlight">Blog</span>
                </h1>

                <Row className="gy-5">
                    {posts.map((post, i) => (
                        <Col md={4} key={i}>
                            <Post
                                title={post.title}
                                summary={post.summary}
                                link={post.link}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    );
}

const structuredSelector = createStructuredSelector({
    posts: (state) => state.posts,
});
const mapDispatchToProps = { getPosts };

export default connect(structuredSelector, mapDispatchToProps)(BlogPage);
