import React from "react";
import {Badge, Card, Carousel, Jumbotron} from "react-bootstrap";
import "../style/LogoCards.css"


export function LogoCards() {
    return (
        <Card className="h-100 shadow bg-white rounded ">
            <Card.Body>
                <Carousel className="carousel-fade" interval="3500" controls={false} indicators={false}>
                    <Carousel.Item>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://assets.stickpng.com/images/58480979cef1014c0b5e4901.png" alt="java"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png" alt="c#"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://axxius.nl/wp-content/uploads/2018/09/docker-logo.png" alt="docker"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/99392883/original/a865ebd9fee758e35d3e87d1d02b4cdb97285092/develop-website-using-html-css-javascript-and-angular.png"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"/>

                        <img className="logoImg m-3 justify-content-between"
                             src="https://www.britefish.net/wp-content/uploads/2019/07/logo-c-1.png" alt="c"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://lisettelubbers.com/wp-content/uploads/2020/08/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com_.png" alt="photoshop"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" alt="linux"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git"/>
                        <img className="logoImg m-3 justify-content-between"
                             src="https://www.conversies.nl/wp-content/uploads/2016/12/unnamed.png" alt="google ads"/>



                    </Carousel.Item>
                </Carousel>
            </Card.Body>
        </Card>
    )

}