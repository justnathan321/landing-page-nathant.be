import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import NathanDesignImage from "./images/VRmockup1.png"
import {Col, Container, Row} from "react-bootstrap";
import {PortfolioCard} from './components/PortfolioCard';

function App() {
    return (
        <Container>
            <Row>
                <Col xs={3} className="mb-5" >
                    <PortfolioCard name="NathanDesign" image={NathanDesignImage}/>
                </Col>
                <Col xs={3} className="mb-5" >
                    <PortfolioCard name="GitHub" image={NathanDesignImage}/>
                </Col>
            </Row>
        </Container>

    );

}

export default App;