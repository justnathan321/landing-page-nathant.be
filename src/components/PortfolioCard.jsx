import React from "react";
import {Card} from "react-bootstrap";

export function PortfolioCard({name,image}){
    return(
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={image}/>
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                        {name}
                    </Card.Title>
                </div>
            </Card.Body>
        </Card>
    )
}