import { useState } from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { allCountriesForm } from '../../redux/action'

const NavBaR = (props) => {
    const [nameCountry, setCountry] = useState('')
    const dispatch = useDispatch()

    const searchInput = (event) => {
        setCountry(event.target.value)
    }

    const getAllCountries = () => {
        dispatch(allCountriesForm())
    }

    return (
        <div className={style.content}>
            <h1>Countries</h1>
            <Link to='/form'>
                <button onClick={getAllCountries} className={`${style.send} ${style.buttonForm}`}>Create Activity</button>
            </Link>
            <div className={style.divSearch}>
                <input value={nameCountry} onChange={searchInput} placeholder='Enter the name of the country here' />
                <button onClick={() => {
                    props.onSearch(nameCountry)
                }} className={style.send}>Search</button>
            </div>
        </div>
    )
}

export default NavBaR