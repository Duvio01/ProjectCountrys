import { useState } from 'react'
import style from './NavBar.module.css'

const NavBaR = (props) => {
    const [nameCountry, setCountry] = useState('')

    const searchInput = (event) => {
        setCountry(event.target.value)
    }

    return (
        <div className={style.content}>
            <h1>Countries</h1>
            <div className={style.divSearch}>
                <input value={nameCountry} onChange={searchInput} placeholder='Enter the name of the country here' />
                <button onClick={ () => {
                    props.onSearch(nameCountry)
                } } className={style.send}>Search</button>
            </div>
        </div>
    )
}

export default NavBaR