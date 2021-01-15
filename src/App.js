import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.css'
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {PortfolioCard} from './components/PortfolioCard';
import {JumboIntro} from "./components/JumboIntro";
import {LogoCards} from "./components/LogoCards";
import {ExtraInfoTabs} from "./components/ExtraInfoTabs";

function App() {
    return (
        <Container>
                <Row>
                    <JumboIntro aboutMeText="You can call me a digital wizard. 🧙 " aboutMeTitle="Hi. I am Nathan."/>
                </Row>
                <Row>
                    <Col xs={3} className="mb-5">
                        <PortfolioCard name="NathanDesign"
                                       text="Founder of the digital agency NathanDesign. Websites, graphic design, photography, and much more. Take a look 👇🏻"
                                       url="nathandesign"/>
                    </Col>
                    <Col xs={3} className="mb-5">
                        <PortfolioCard name="GitHub"
                                       text="You won't see much on my GitHub yet, but you never know what the future brings. In other words: Follow. Me. 😊"
                                       url="github"/>
                    </Col>
                    <Col className="mb-5">
                        <LogoCards/>
                    </Col>
                </Row>
            <Row className="shadow p-5 rounded">
                <ExtraInfoTabs/>
            </Row>
            </Container>
    );

}

export default App;