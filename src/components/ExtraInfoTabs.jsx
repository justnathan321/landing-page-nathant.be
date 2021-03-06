import {Col, Nav, Row, Tab} from "react-bootstrap";
import React from "react";

export function ExtraInfoTabs(){
    return(
        <Tab.Container defaultActiveKey="first">
            <Row className="shadow rounded w-100 p-5 mb-2">
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">About me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9} xs={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <p>Hi</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <p>Hallo</p>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
