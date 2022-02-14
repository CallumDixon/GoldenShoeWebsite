import {Button, Card, Spinner} from "react-bootstrap";
import {IProductsItem} from "./ProductItem";
import {useEffect, useState} from "react";
import {fetchImage} from "../functions/api";

const HomePageFeaturedItem = (featuredProduct: IProductsItem) => {

    const [file,setFile] = useState<string>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetchImage(featuredProduct.image)
            // @ts-ignore
            .then((img:string) => {
                setFile(img)
                setLoading(false)
            })
    },[])

    return (
        <Card id={"homePageCard"} className={"my-2"} >

                { loading ?

                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                    :
                    <Card.Img variant="bottom" src={file} className={"w-50"}/>
                }

                <Card.Body id={"featuredCardBody"}>
                <Card.Title>{featuredProduct.name}</Card.Title>
                <Card.Text>
                    {featuredProduct.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default HomePageFeaturedItem
