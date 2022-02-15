import {IProductsItem} from "./ProductItem";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState, useContext} from "react";
import {fetchImage} from "../functions/api";
import {Image} from "react-bootstrap";
import { SetBasketContext } from "./BasketContext";
import {Amplify, API, graphqlOperation} from "aws-amplify";
import * as subscriptions from "../src/graphql/subscriptions";
import awsExports from "../src/aws-exports";

const ProductPageItem = (props: IProductsItem) => {

    const [file,setFile] = useState<string>()
    const [loading, setLoading] = useState(true)
    const [expanded, setExpanded] = useState(false)
    const [stock,setStock] = useState(props.stock)

    const setBasket = useContext(SetBasketContext)

    const expandImage = () => {
        setExpanded(!expanded)
    }

    useEffect(() => {

        fetchImage(props.image)
            // @ts-ignore
            .then((img:string) => {
                console.log(img)
                setFile(img)
                setLoading(false)
            })

        const subscription = API.graphql(
            graphqlOperation(subscriptions.onUpdateProduct)
            // @ts-ignore
        ).subscribe({
            // @ts-ignore
            next: ({ provider, value }) => setStock(value.data.onUpdateProduct.stock),
            // @ts-ignore
            error: error => console.warn(error)
        });

    },[])

    return (
        <div>
            <Container className="m-5 border-0 shadow mx-auto my-2">
                <Card >
                    <Card.Body>
                        <Row>
                            <Card.Header>{props.name}</Card.Header>
                            <Card.Img src={file} className="w-50 h-50 d-inline-block" onClick={expandImage}/>
                            <Card.Text>{props.description}</Card.Text>
                            <Card.Footer>
                                <Row>
                                    <Col> {props.price} </Col>
                                    <Col>Stock: {stock} </Col>
                                    <Col>

                                        {(parseInt(stock) > 0) ?

                                            <Button variant={"primary"} onClick={() => {

                                                setBasket(props.name,1,true)

                                            }} >Add to Basket</Button>

                                            :
                                            <Card.Text>
                                                Sorry this item is out of Stock.
                                            </Card.Text>
                                        }
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Row>
                    </Card.Body>
                    { expanded && (
                        <dialog
                            style={{ position: 'absolute' }}
                            open
                            onClick={expandImage}>

                            <Image src={file} onClick={expandImage} className="w-100 h-100 d-inline-block">

                            </Image>

                        </dialog>
                    ) }
                </Card>
            </Container>
        </div>
    );
}

const styles = {
    card: {
        borderRadius: 55,
        padding: '3rem'
    },
    cardImage: {
        objectFit: 'cover',
        borderRadius: 55
    }
}

export default ProductPageItem
