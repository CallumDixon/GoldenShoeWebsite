import * as React from "react";
import { useState, createContext, useEffect } from "react";
import {setBasketItem, getAllBasketItems} from "../functions/storage";
import Basket from "../pages/Basket";

interface IBasketItem {
    name: String
    quantity: Number
}

const BasketContext = createContext <object | undefined>(undefined)
const SetBasketContext = createContext <any>(undefined)

const BasketContextProvider = ({children}:any) => {

    const [items, setItems] = useState<Array<IBasketItem>>([])

    useEffect(() => {

        const BasketItems = getAllBasketItems()
        // @ts-ignore
        setItems(BasketItems)

    },[])

    const setBasketStorage =  (name : string, quantity : number, AddFlag: boolean) => {

        if(AddFlag){

            const newItem = { "name" : name, "quantity" : quantity }
            const oldItems = items;
            oldItems.push(newItem)
            setItems([...oldItems])
            setBasketItem(items.length,newItem)
            getAllBasketItems()
        }

        else {
            setItems([])
        }
    }

    return (
        <BasketContext.Provider value={items}>
            <SetBasketContext.Provider value = {setBasketStorage}>
                { children }
            </SetBasketContext.Provider>
        </BasketContext.Provider>
    )

}



export { BasketContext, SetBasketContext, BasketContextProvider}
