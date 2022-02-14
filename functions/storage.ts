interface IBasketItem {
    name: String
    quantity: Number
}

export const setBasketItem = (index: number,items: object) => {
    localStorage.setItem("GS" + String(index), JSON.stringify(items))
}

export const getAllBasketItems = () =>  {

    let arr = []

    for (let key in localStorage) {
       if(key.includes("GS")){
           // @ts-ignore
           arr.push(JSON.parse(localStorage.getItem(key)))
       }
    }

    return arr
}
