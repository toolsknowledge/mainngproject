import CartModal from "../model/cart.model";
import * as allActions from "../.";

export default interface CartInterface{
    loading : boolean;
    error : any;
    finalItems:CartModal[]
};


const initialState:CartInterface = {
    loading:false,
    error:"",
    finalItems:[]
};



export function cartReducer(state=initialState,action:allActions.CartActionTypes | any):CartInterface{
    switch(action.type){
       
        case allActions.CartActions.CartLoadingSuccess:
            const item = action.payload;
        
            let index = state.finalItems.findIndex((element,index)=>{
                return element._id === item._id;
            });
            
            if(index!=-1){
                
                return{
                    ...state,
                    finalItems : state.finalItems.map((obj)=>{ return obj._id === item._id ? item : obj}),
                    error:"",
                    loading:true
                }
                
            }else{
               
                return{
                    ...state,
                    finalItems : [...state.finalItems, item ],
                    error:"",
                    loading:true
                }
            }
       
        default:
            return state;
    }
}
