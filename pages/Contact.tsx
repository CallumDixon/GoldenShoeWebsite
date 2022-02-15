import GSNavigationBar from "../components/GSNavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {fetchCSQueries} from "../functions/api";
import {CSQuery} from "../src/API";
import { Amplify} from "aws-amplify";
import awsExports from "../src/aws-exports";
import {Button, Card, Col, Container, Image, Row, Spinner} from "react-bootstrap";
Amplify.configure({ ...awsExports, ssr: true });

interface ICSQueryItem {
    id: string
    name: string
    parent: string
    description: string
    leaf_node: boolean
    order: number
}

const Contact = () => {

    const [loading, setLoading] = useState(true)
    const [parent, setParent] = useState("CSQuery")
    const [list, setList] = useState<Array<ICSQueryItem>>()

    useEffect(() => {


        fetchCSQueries(parent)
            .then((res) => {
                setList(res)
                setLoading(false)
            })
    },[parent])

    return (
        <div>
            <GSNavigationBar/>
            <Container className="m-5 border-0 shadow mx-auto my-2">

                {loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <div>
                        <ul className={"mx-auto"}>
                            {list?.map((item) => (
                                <div onClick={() => {setParent(item.name)}}>
                                    <Card>
                                        <Card.Header>
                                            {item.name}
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </ul>
                    </div>
                }
            </Container>
        </div>
    )
}

export default Contact
