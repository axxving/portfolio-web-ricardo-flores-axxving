import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ShieldFillCheck, Laptop } from 'react-bootstrap-icons'; // Importamos iconos

export const Hero = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <h1 className="hero-title">Hacker Ético</h1>
                        <p className="hero-paragraph">¡Protegiendo y asegurando la información en línea!</p>
                        <div className="hero-buttons">
                            <Button className='button-hero' variant="success"><ShieldFillCheck className="mr-2" />Contratar</Button>
                            <Button className='button-hero' variant="primary"><Laptop className="mr-2" />Servicios</Button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        {/* Aquí puedes agregar cualquier contenido adicional, como una imagen o un video */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
