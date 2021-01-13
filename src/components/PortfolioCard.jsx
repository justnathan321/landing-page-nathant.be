import React from "react";
import {Badge, Button, Card} from "react-bootstrap";

export function PortfolioCard({name,image,text,url}){
    return(
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={image}/>
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                        {name}
                    </Card.Title>
                    <Card.Text className="text-secondary p-5">
                        {text}
                    </Card.Text>
                    <Button onClick={url} className="mt-auto font-weight-bold" variant="success">
                    <p>click on me</p>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}