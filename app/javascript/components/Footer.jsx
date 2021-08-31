import React, { useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addNewContact } from "../actions";

function Footer({ addNewContact }) {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = () => {
        console.log(form);
        addNewContact(form);
        setShow(false);
    };

    return (
        <>
            <footer className="bg-warning py-3">
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>Made with ☮️❤️🍜☕️ by Blake</div>
                        <Button variant="dark" onClick={handleShow}>
                            Let's connect!
                        </Button>
                    </div>
                </Container>
            </footer>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's talk!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Feel free to shoot me a message about anything. Would
                        love to connect and chat!
                    </p>

                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Blake Stoner"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="youremail@address.com"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                I'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const structuredSelector = createStructuredSelector({
    contacts: (state) => state.contacts,
});
const mapDispatchToProps = { addNewContact };

export default connect(structuredSelector, mapDispatchToProps)(Footer);
