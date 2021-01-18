import React from "react";
import {Badge, Button, Card, Col} from "react-bootstrap";
import "../style/PortfolioCard.css"

export function PortfolioCard({name, text, url}) {

    return (
        <Col xs={12} lg={3} className="mb-5">
        <Card className="h-100 shadow bg-white rounded">
            <Card.Body className="d-flex flex-column">
                <div className="justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                        {name}
                    </Card.Title>
                    <Card.Text className="text-secondary pt-3 pb-4 pr-3">
                        {text}
                    </Card.Text>
                </div>
                <Button type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            if(url.includes("nathandesign")){
                                window.location.href = 'https://nathandesign.be'
                            }else if(url.includes("github")){
                                window.location.href = 'https://github.com/justnathan321'
                            }
                        }} className="mt-auto  font-weight-bold btnStyling pb-0" variant="outline-light">
                    <p className="font-weight-bold">Visit</p>
                </Button>
            </Card.Body>
        </Card>
        </Col>
    )
}