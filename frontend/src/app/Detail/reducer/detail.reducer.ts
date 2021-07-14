import { DetailAction, DetailActionTypes } from "../actions/detail.actions";
import { Product } from "../model/detail.model";

export interface IState{
    loading:boolean;
    product:Product;
    error:string;
}

const initialState:IState = {
    loading:false,
    product:{_id:"",
             brand:"",
             countInStock:0,
             description:"",
             image:"",
             name:"",
             price:0,
             rating:0,
             numReviews:0
             },
    error:""
}

export function DetailReducer(state=initialState,action:DetailActionTypes):IState{
    switch(action.type){
        case DetailAction.ProductLoading:
            return{
                ...state,
                loading:false,
                product:{_id:"",
                         brand:"",
                         countInStock:0,
                         description:"",
                         image:"",
                         name:"",
                         price:0,
                        rating:0,
                        numReviews:0},
                error:""
            }
        case DetailAction.ProductLoadingSucccess:
            return{
                ...state,
                loading:true,
                product:action.product,
                error:""
            }
        case DetailAction.ProductLoadingFail:
            return{
                ...state,
                loading:true,
                product:{_id:"",
                        brand:"",
                        countInStock:0,
                        description:"",
                        image:"",
                        name:"",
                        price:0,
                        rating:0,
                        numReviews:0},
                error:action.err
            }
    }
}