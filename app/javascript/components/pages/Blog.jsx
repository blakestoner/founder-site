import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
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
            <Container>
                <ul>
                    {posts.map((post, i) => (
                        <li key={i}>{post.summary}</li>
                    ))}
                </ul>
            </Container>
        </Layout>
    );
}

const structuredSelector = createStructuredSelector({
    posts: (state) => state.posts,
});
const mapDispatchToProps = { getPosts };

export default connect(structuredSelector, mapDispatchToProps)(BlogPage);
