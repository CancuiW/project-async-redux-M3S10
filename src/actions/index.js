import axios from "axios"

export const SET_IS_FETCHING ='SET_IS_FETCHING';
export const SET_SUCCESS ='SET_SUCCESS';
export const SET_FAIL ='SET_FAIL';

export const getDogs=(search)=>dispatch=>{
    dispatch({ type: SET_IS_FETCHING })
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=15A4sDDzI0sQg3gAMU8VayQFRECf5BF2&q=${search}`)
         .then(res=>{
            //console.log(res.data.data)
             dispatch(setSuccess(res.data.data))
         })
         .catch(err=>{
            //console.log(err.response)
            const information=`Error ${err.response.status}:${err.response.data.message}`
             dispatch(setFail(information))
         })
}


const setSuccess=(dogs)=>{
    return { type: SET_SUCCESS ,payload:dogs}
}

const setFail = (infor) => {
    return { type: SET_FAIL, payload: infor }
}

