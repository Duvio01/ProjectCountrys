import { AllCOUNTRIES, FINDCOUNTRY } from "./action_types";


const initialState = {
    allCountries: [],
    totalPages: null,
    country: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AllCOUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                totalPages: Math.ceil(action.payload.count / 10)  
            }
        case FINDCOUNTRY: 
            return {
                ...state,
                country: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer