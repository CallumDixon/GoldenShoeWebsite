import type { NextPage } from 'next'
import {fetchCategories, fetchImage, fetchProducts} from "../functions/api";
import Link from 'next/link'
import awsExports from "../src/aws-exports";
import {Amplify, API, graphqlOperation} from "aws-amplify";
import {Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
Amplify.configure({ ...awsExports, ssr: true });
import 'bootstrap/dist/css/bootstrap.min.css';
import GSNavigationBar from "../components/GSNavigationBar";
import HomePageFeaturedItem from "../components/HomePageFeaturedItem";

export async function getStaticProps (){

    const res = await fetchCategories("Categories")
    const prod = (await fetchProducts()).slice(0,3)


        return {
            props: {
                categories: res,
                products: prod
            }
        }
}

const Home: NextPage = ({categories,products} : any) => {

    return (

        <div>
            <GSNavigationBar/>

            <Container fluid>
                <Row sm={1} md={2} lg={2}>
                    <Col>
                        <div id={"productMenu"}>
                            <ul id={'productList'}>
                                {categories.map((category: any) => (
                                    <li>
                                        <Link href={"browse/" + category.name}>
                                            <Card className={"productListItemCard"}>
                                                <Card.Body>{category.name}</Card.Body>
                                            </Card>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>

                    <Col xs={{order: 'first'}} md={{order:'last'}}>
                        <div id={"homePageFeaturedProducts"}>
                            <Container id={"homePageFeaturedProductsCard"}>
                                <Row sm={1} md={3} lg={3}>
                                    <HomePageFeaturedItem description={products[0].description} image={products[0].image} name={products[0].name} parent={products[0].parent} price={products[0].price} stock={products[0].stock}/>
                                    <HomePageFeaturedItem description={products[1].description} image={products[1].image} name={products[1].name} parent={products[1].parent} price={products[1].price} stock={products[1].stock}/>
                                    <HomePageFeaturedItem description={products[2].description} image={products[2].image} name={products[2].name} parent={products[2].parent} price={products[2].price} stock={products[2].stock}/>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Home
