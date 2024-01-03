import {ADD_TO_CART} from "../ContentIndex"


export function addToCart(data){
    console.warn("actions", data);
    return{
        type:"ADD_TO_CART",
        data:data
    }
}