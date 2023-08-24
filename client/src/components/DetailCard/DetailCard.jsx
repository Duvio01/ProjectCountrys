import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { findCountry } from "../../redux/action"

const DetailCard = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(findCountry(id))
    }, [id])

    const country = useSelector((state) => console.log(state.country))
    console.log(typeof country)
    //console.log(id, allCountries)
    return (
        <>
            <p>{JSON.stringify(country)} aqui estoy</p>
            {
                country !== undefined && country.hasOwnProperty('name') (
                    <>
                        Detalle de card
                        <p>{country.name}</p>
                    </>
                )
            }
        </>
    )
}

export default DetailCard