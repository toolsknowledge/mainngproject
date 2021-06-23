import { HomeAction, HomeActionTypes } from "../actions/home.actions";
import { Product } from "../model/product.model";

export interface IState{
    loading:boolean;
    products:Product[];
    error:string;
}

const initialState:IState = {
    loading:false,
    products:[],
    error:""
}

export function HomeReducer(state=initialState,action:HomeActionTypes):IState{
    switch(action.type){
        case HomeAction.ProductsLoading:
            return{
                ...state,
                loading:false,
                products:[],
                error:""
            }
        case HomeAction.ProductsLoadingSucccess:
            return{
                ...state,
                loading:true,
                products:action.products,
                error:""
            }
        case HomeAction.ProductsLoadingFail:
            return{
                ...state,
                loading:true,
                products:[],
                error:action.err
            }
    }
}