import Card from "../Card/Card"
import ConfigFilters from "../ConfigFilters/ConfigFilters"
import NavBaR from "../NavBar/Navbar"
import style from './HomePage.module.css'

const HomePage = () => {

    const arrayMuestra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            <div className={style.content}>
                <NavBaR />
                <ConfigFilters />
                <div className={style.divCard} >
                    {
                        arrayMuestra.map((element) => {
                            return (
                                <Card
                                    key={element}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    Paginacion
                </div>
            </div>
        </>
    )
}

export default HomePage