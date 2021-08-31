import React, { useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Layout from '../Layout';
import { getPosts } from '../../actions';

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
                            <div>
                                <h2>{post.title}</h2>
                                <p>{post.summary}</p>
                                <Button
                                    href={post.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    variant="warning"
                                >
                                    View more
                                    <FiChevronRight />
                                </Button>
                            </div>
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
