import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "../Card/Card"
import ConfigFilters from "../ConfigFilters/ConfigFilters"
import NavBaR from "../NavBar/Navbar"
import style from './HomePage.module.css'
import Greater from '/images/mayorque.png'
import Lesser from '/images/menorQue.png'
import { useDispatch, useSelector } from 'react-redux'
import { allCountries } from "../../redux/action"

const HomePage = () => {

    const [pagination, setPagination] = useState(1)
    const [nameSearch, setNameSearch] = useState('')
    const [order, setOrder] = useState('')
    const [typeOrder, setTypeOrder] = useState('')
    const [isOrdenamiento, setOrdenamiento] = useState(false)
    const [isfilter, setFilter] = useState(false)
    const [nameFilter, setNameFilter] = useState(null)
    const [continent, setContinent] = useState('')

    const dispatch = useDispatch()
    const countries = useSelector((state) => state.allCountries)
    const totalPages = useSelector((state) => state.totalPages)

    useEffect(() => {
        dispatch(allCountries())
    }, [])

    useEffect(() => {
        dispatch(allCountries(nameSearch, pagination, order, typeOrder, continent))
    }, [pagination, nameSearch, typeOrder, continent])


    const changePagination = (type) => {
        if (type === 'Greater') {
            setPagination(pagination + 1)
        }
        if (type === 'Lesser') {
            setPagination(pagination - 1)
        }
    }

    const searchName = (name) => {
        setPagination(1)
        setNameSearch(name)
    }

    const orderCountries = (event) => {
        setTypeOrder(event.target.name)
    }

    const filterCountries = (event) => {
        setContinent(event.target.value)
        setPagination(1)
    }

    const changeSelectFilter = (event) => {
        if (event.target.name === 'sort') {
            if (event.target.value !== '') {
                setOrdenamiento(true)
                setOrder(event.target.value)
            } else {
                setOrdenamiento(false)
                setOrder('')
                setTypeOrder('')
            }
        }

        if (event.target.name === 'filter') {
            if (event.target.value !== '') {
                setFilter(true)
                setNameFilter(event.target.value)
            } else {
                setFilter(false)
                setContinent('')
            }
        }
    }

    return (
        <>
            <div className={style.content}>
                <NavBaR onSearch={searchName} />
                <ConfigFilters
                    changeSelectFilter={changeSelectFilter}
                    isfilter={isfilter}
                    isOrdenamiento={isOrdenamiento}
                    nameFilter={nameFilter}
                    orderCountries={orderCountries}
                    filterCountries={filterCountries}
                />
                <div className={style.divCard} >
                    {
                        countries.rows?.map((country) => {
                            return (
                                <Card
                                    key={country.id}
                                    id={country.id}
                                    name={country.name}
                                    image={country.image}
                                    continent={country.continent}
                                />
                            )
                        })
                    }
                </div>
                <div className={style.divPagination}>
                    {
                        totalPages && (
                            <>
                                <button onClick={() => changePagination('Lesser')} disabled={pagination === 1}><img height='10px' width='10px' src={Lesser} /></button>
                                <span>{pagination} </span>
                                <button disabled={totalPages === pagination} onClick={() => changePagination('Greater')} ><img height='10px' width='10px' src={Greater} /></button>
                                <span>Total de paginas: {totalPages}</span>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage