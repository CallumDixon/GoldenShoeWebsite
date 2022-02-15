import { fetchProducts} from "../../../../functions/api";
import {IProductsItem} from "../../../../components/ProductItem";
import GSNavigationBar from "../../../../components/GSNavigationBar";
import awsExports from "../../../../src/aws-exports";
import {Amplify} from "aws-amplify";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductPageItem from "../../../../components/ProductPageItem";


Amplify.configure({ ...awsExports, ssr: true });

const product = (props: {products: IProductsItem}) => {

    return(
        <div>
            <GSNavigationBar/>
            <ProductPageItem
                image={props.products.image}
                parent={props.products.parent}
                name={props.products.name}
                price={props.products.price}
                description={props.products.description}
                stock={props.products.stock}
            />
        </div>
    )
}

export async function getStaticPaths() {

    const products = await fetchProducts()
    const paths = products.map((product: IProductsItem) => ({
        params: { browse:product.parent ,product: product.name }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: { params: any }) {
    const { params } = context
    const names = params.product

    const products = await fetchProducts()

    const filtered = products.find((product:IProductsItem) => product.name === names)
    return {
        props : {
            products : filtered
        }
    };
}

export default product
