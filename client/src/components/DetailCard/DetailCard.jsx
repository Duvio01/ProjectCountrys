import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import style from './DetailCard.module.css'

const DetailCard = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [country, setCountry] = useState(null)
    const countries = useSelector(state => state.allCountries)

    useEffect(() => {
        setCountry(countries.rows.find(country => country.id === id))
    }, [])

    return (
        <div className={style.container}>
            <div className={style.dislayButton}>
                <Link to='/home'>
                    <button>Back</button>
                </Link>
            </div>
            {
                country && (
                    <div className={style.content}>
                        <div>
                            <h1>{country.name}</h1>
                        </div>
                        <div className={style.contentDescription}>
                            <div className={style.contentDataPrincpial}>
                                <p><strong>Capital:</strong> {country.capital}</p>
                                <p><strong>Subregion:</strong> {country.subregion}</p>
                                <p><strong>Population:</strong> {country.population}</p>
                                <p><strong>Continent:</strong> {country.continent}</p>
                            </div>
                            <div>
                                <img className={style.imgCountry} width='400px' height='350px' src={country.image} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DetailCard