const initialState = { isLogged : false };

export const userReducer = (state = initialState , action) => {

    switch(action.type){
        case "LOGIN" : 
            return { isLogged : true}
        default :
            return state ;
    }
}   