import {Card, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchImage} from "../functions/api";
import Image from 'next/image'
import awsExports from "../src/aws-exports";
import {Amplify} from "aws-amplify";
Amplify.configure({ ...awsExports, ssr: true });

export interface IProductsItem {
    image: string
    parent: string
    name: string
    price: string
    description: string
}

const productItem = (props: IProductsItem) => {

    const [file,setFile] = useState<string>()
    const [loading, setLoading] = useState(true)

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

        <Card id={"productItemCard"} className={"mx-auto my-2"} >

            { loading ?

                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

                :
                <Card.Img variant="top" src={file} />
            }
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>

        </div>
    )

}

export default productItem
