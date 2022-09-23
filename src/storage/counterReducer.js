const initialState = {
count:0
}
function counterReducer(state=initialState,action)
{
    if(action.type=='INCREMENT')
    {
        return{...state,count:state.count+1}
    console.log(state.count)
    }
    if(action.type=='DECREMENT')
    {
        return{...state,count:state.count-1}

    }
    return state
}
export default counterReducer;