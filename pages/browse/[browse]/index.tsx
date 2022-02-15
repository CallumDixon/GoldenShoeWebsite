import { useState } from "react"
import {fetchCategories, fetchProducts} from "../../../functions/api";
import { Amplify} from "aws-amplify";
import awsExports from "../../../src/aws-exports";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import GSNavigationBar from "../../../components/GSNavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem, {IProductsItem} from "../../../components/ProductItem";
Amplify.configure({ ...awsExports, ssr: true });

// @ts-ignore
const browse = (props) => {

    const [list,setList] = useState([])
    const [loading,setLoading] = useState(false)

    return(
        <div>

            <GSNavigationBar/>

            {loading && list?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :

                <Container fluid>

                    <Row xs={2} md={3} lg={4}>
                        { props.products.map((item: IProductsItem) => (
                            <div>
                                <ProductItem image={item.image} name={item.name} price={item.price} description={item.description} parent={item.parent} stock={item.stock}/>
                            </div>
                        ))}
                    </Row>
                </Container>
            }
        </div>
    )
}

export async function getStaticPaths() {

    const categories = await fetchCategories("Categories")
    const paths = categories.map((category: { name: any; }) => ({
        params: { browse: category.name }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: { params: any }) {
    const { params } = context
    const names = params.browse

    const products = await fetchProducts()
    let props
    if (names === "All") {
        props = products
    }
    else{
        props = products.filter((product: IProductsItem) => product.parent === names)
    }

    return {
        props : {
            products : props
        }
    };
}

export default browse
