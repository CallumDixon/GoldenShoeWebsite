import * as React from 'react';
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../components/BasketContext";
import GSNavigationBar from "../components/GSNavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row, Spinner} from "react-bootstrap";

interface IBasketItem {
    name: String
    quantity: Number
}

const BasketScreen = () => {

    // @ts-ignore
    const contextBasket = React.useContext<Array<IBasketItem>>(BasketContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    },[contextBasket])

    return (
        <div>
            <GSNavigationBar/>

            {loading?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <Container fluid>
                    <Col md={3} lg={4}>
                        { contextBasket.map((item,idx)=>(

                            <Card>
                                <Card.Title>
                                    {item.name}
                                </Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        {"Quantity: " + item.quantity}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Container>
            }
        </div>
    )
}

export default BasketScreen
