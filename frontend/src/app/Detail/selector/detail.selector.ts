import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IState } from "../reducer/detail.reducer";

export const getProduct = createSelector(createFeatureSelector<IState>("detail"),
                                            (state:IState)=>{
    return state;
})

