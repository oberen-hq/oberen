const INITIAL_STATE = {
    scrollToElement: null
}

export const appReducer = ( state=INITIAL_STATE, action: any ) =>{
switch (action. type){
    case "scrollToElement":{
        return {
            ...state,
            scrollToElement: action.payload
        }
    }
   }