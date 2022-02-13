import {API, graphqlOperation} from "aws-amplify";
import { Storage } from "@aws-amplify/storage"
import {categoryByOrder, listProducts, productByOrder} from "../src/graphql/queries";
import {ModelSortDirection} from "../src/API";

export const fetchProducts = async () => {


   let products = await API.graphql(graphqlOperation(listProducts))
    // @ts-ignore
    return products.data.listProducts.items
}

export const fetchCategories = async (parent: string) => {

    const categories = await API.graphql(graphqlOperation(categoryByOrder,{
        sortDirection: ModelSortDirection.ASC,
        parent: parent
    }))

    // @ts-ignore
    return(categories.data.categoryByOrder.items.map((item: { name: string; parent: string; order: any; leaf_node: boolean}) =>
        ({name:item.name,parent:item.parent,order:item.order, leaf_node: item.leaf_node})))
}

export const fetchImage = async (name: string) => {

    return await Storage.get(name, {
        level: "public"
    })
}

