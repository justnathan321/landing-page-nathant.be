import React from "react";
import {Card, Carousel, Col, Row} from "react-bootstrap";
import docker from "../images/logos/java.png"
import net from "../images/logos/netcore.png"
import bash from "../images/logos/bash.png"
import hcj from "../images/logos/htmlcssjs.png"
import python from '../images/logos/python.png'
import java from "../images/logos/java.png"
import c from "../images/logos/c.png"
import photoshop from "../images/logos/photoshop.png"
import gads from "../images/logos/googleAds.png"
import wp from "../images/logos/wordpress.png"
import git from "../images/logos/git.png"
import linux from "../images/logos/linux.png"
import cs from "../images/logos/csharp.png"
import "../style/LogoCards.css"


export function LogoCards() {
    return (
        <Col xs={12} lg={6} className="mb-5">
            <Card className="shadow bg-white rounded h-100">
                <Card.Body>
                    <Carousel className="carousel-fade" interval="3500" controls={false} indicators={false}>
                        <Carousel.Item>
                            <img className="logoImg m-3 justify-content-between"
                                 src={java} alt="java"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={cs}
                                 alt="c#"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={docker}
                                 alt="docker"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={bash}
                                 alt="Bash"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={net}
                                 alt="NET"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={hcj}
                                 alt="HTML,CSS,JS"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={python}
                                 alt="Python"/>

                        </Carousel.Item>
                        <Carousel.Item>

                            <img className="logoImg m-3 justify-content-between"
                                 src={c}
                                 alt="c"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={photoshop}
                                 alt="photoshop"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={wp}
                                 alt="Wordpress"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={linux}
                                 alt="linux"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={git}
                                 alt="git"/>
                            <img className="logoImg m-3 justify-content-between"
                                 src={gads}
                                 alt="google ads"/>

                        </Carousel.Item>
                    </Carousel>
                </Card.Body>
            </Card>
        </Col>
    )

}