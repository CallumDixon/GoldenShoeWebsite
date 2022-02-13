import {IProductsItem} from "./ProductItem";
import {Card, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchImage} from "../functions/api";
import {Image} from "react-bootstrap";

const ProductPageItem = (props: IProductsItem) => {

    const [file,setFile] = useState<string>()
    const [loading, setLoading] = useState(true)
    const [expanded, setExpanded] = useState(false)

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
                            <Card.Footer>{props.price}</Card.Footer>
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
