import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { findCountry } from "../../redux/action"

const DetailCard = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const country = useSelector((state) => state.country)

    useEffect(() => {
        dispatch(findCountry(id))
    }, [id, dispatch])

    return (
        <>
            Detalle de card
            <h1>{country.continent}</h1>
            <p>{country.name}</p>
            <img src={country.image}/>
        </>
    )
}

export default DetailCard