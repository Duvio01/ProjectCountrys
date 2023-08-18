import style from './NavBar.module.css'

const NavBaR = () => {
    return (
        <div className={style.content}>
            <h1>Countries</h1>
            <div className={style.divSearch}>
                <input placeholder='Enter the name of the country here' />
                <button className={style.send}>Search</button>
            </div>
        </div>
    )
}

export default NavBaR