import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.css'
import NathanDesignImage from "./images/VRmockup1.png"
import {Col, Container, Row} from "react-bootstrap";
import {PortfolioCard} from './components/PortfolioCard';
import {JumboAboutMe} from "./components/JumboAboutMe";

function App() {
    return (
        <Container>
            <Row>
                <JumboAboutMe aboutMeText="You can call me a digital wizard. 🧙 " aboutMeTitle="Hi. I am Nathan."/>
            </Row>
            <Row>
                <Col xs={3} className="mb-5" >
                    <PortfolioCard name="NathanDesign" text="Founder of the digital agency NathanDesign. Websites, graphic design, photography, and much more. Take a look 👇🏻" url="https://nathandesign.be"/>
                </Col>
                <Col xs={3} className="mb-5" >
                    <PortfolioCard name="GitHub" text="You won't see much on my GitHub yet, but you never know what the future brings. In other words: Follow. Me. 😊" url="https://" />
                </Col>
            </Row>
        </Container>

    );

}

export default App;