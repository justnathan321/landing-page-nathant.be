import React from "react";
import {Badge, Button, Card} from "react-bootstrap";
import "../style/PortfolioCard.css"

export function PortfolioCard({name, image, text, url}) {
    return (
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
                <Button onClick={url} className="mt-auto  font-weight-bold btnStyling pb-0" variant="outline-light">
                    <p className="font-weight-bold">Visit</p>
                </Button>
            </Card.Body>
        </Card>
    )
}