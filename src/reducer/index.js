import { SET_IS_FETCHING, SET_SUCCESS, SET_FAIL } from './../actions/index'
import data from './../data/gifs'
 const initialState={
    gifs:data,
    error:"",
   loading:false
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case SET_IS_FETCHING:
            return({
                ...state,loading:true
            })
        case (SET_SUCCESS):
            return ({
                ...state, loading: false, gifs:action.payload
            })
        case (SET_FAIL):
            return ({
                ...state, loading: false,error:action.payload
            })
        default:
            return state
    }
}
export default reducer;
