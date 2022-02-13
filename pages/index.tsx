import type { NextPage } from 'next'
import {fetchCategories} from "../functions/api";
import Link from 'next/link'
import awsExports from "../src/aws-exports";
import {Amplify} from "aws-amplify";
import {Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
Amplify.configure({ ...awsExports, ssr: true });
import 'bootstrap/dist/css/bootstrap.min.css';
import GSNavigationBar from "../components/GSNavigationBar";
import HomePageFeaturedItem from "../components/HomePageFeaturedItem";

export async function getStaticProps (){

  const res = await fetchCategories("Categories")

  return {
    props: {
      categories: res
    }
  }
}

const Home: NextPage = ({categories} : any) => {
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
                                        <Link href={category.name}>
                                            <Card className={"productListItemCard"}>
                                                <Card.Body>{category.name}</Card.Body>
                                            </Card>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>

                    <Col>
                        <div id={"homePageFeaturedProducts"}>
                            <Container fluid id={"homePageFeaturedProductsCard"}>
                                <Row sm={1} md={2} lg={2}>
                                    <HomePageFeaturedItem/>
                                    <HomePageFeaturedItem/>
                                    <HomePageFeaturedItem/>
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
