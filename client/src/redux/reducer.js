import { ALLACTIVITIES, AllCOUNTRIES, AllCOUNTRIESFORM, FINDCOUNTRY } from "./action_types";


const initialState = {
    allCountries: [],
    totalPages: null,
    country: {},
    allCountriesForm: [],
    allActivities: []
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
        case AllCOUNTRIESFORM:
            return {
                ...state,
                allCountriesForm: action.payload
            }
        case ALLACTIVITIES: 
            action.payload.unshift({name:''})
            return {
                ...state,
                allActivities: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer