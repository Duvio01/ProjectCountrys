import axios from "axios"
import { ALLACTIVITIES, AllCOUNTRIES, AllCOUNTRIESFORM, FINDCOUNTRY } from "./action_types"

export const allCountries = (nameSearch = '', pagination = 1, order = '', typeOrder = '', continent = '', valueActivity = '') => {
    const url = `http://localhost:3001/countries?name=${nameSearch}&paginate=${pagination}&sort=${order}&order=${typeOrder}&continent=${continent}&activity=${valueActivity}`

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

export const allCountriesForm = () => {
    const url = `http://localhost:3001/countries?limit=250`

    return async (dispatch) => {
        try {
            const {data} = await axios(url)
            return dispatch({
                type: AllCOUNTRIESFORM,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const allActivities = ()=> {
    const url = 'http://localhost:3001/activities'

    return async (dispatch) => {
        try {
            const {data} = await axios(url)
            return dispatch({
                type: ALLACTIVITIES,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}