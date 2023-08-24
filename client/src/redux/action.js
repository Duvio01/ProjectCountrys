import axios from "axios"
import { AllCOUNTRIES, FINDCOUNTRY } from "./action_types"

export const allCountries = (nameSearch = '', pagination = 1, order = '', typeOrder = '', continent = '') => {
    const url = `http://localhost:3001/countries?name=${nameSearch}&paginate=${pagination}&sort=${order}&order=${typeOrder}&continent=${continent}`

    return async (dispatch) => {
        try {
            const { data } = await axios(url)
            return dispatch({
                type: AllCOUNTRIES,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const findCountry = (id) => {
    // const findCountry = countries.rows.find((country) => country.id === id)
    // console.log(findCountry)
    // return {
    //     type: FINDCOUNTRY,
    //     payload: findCountry
    // }

    const url = `http://localhost:3001/countries/${id}`

    return async (dispatch) => {
        try {
            const { data } = await axios(url)
            return dispatch({
                type: FINDCOUNTRY,
                payload: data
            }) 
        } catch (error) {
            alert(error.message)
        }
    }
}