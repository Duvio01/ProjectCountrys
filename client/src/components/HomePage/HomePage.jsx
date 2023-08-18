import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "../Card/Card"
import ConfigFilters from "../ConfigFilters/ConfigFilters"
import NavBaR from "../NavBar/Navbar"
import style from './HomePage.module.css'
import Greater from '/images/mayorque.png'
import Lesser from '/images/menorQue.png'

const HomePage = () => {

    const [countries, setCountries] = useState([])
    const [pagination, setPagination] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [nameSearch, setNameSearch] = useState('')

    useEffect(()=> {
        callApiCountries()
    },[])

    const callApiCountries = (pagination = 1, name = '') => {
        // http://localhost:3001/countries?name=&paginate=1
        axios(`http://localhost:3001/countries?name=${name}&paginate=${pagination}`).then(({data}) => {
            setCountries(data)
            setTotalPages(Math.ceil(data.count / 10))
        })
        .catch((error) => alert(error.response.data))
    }

    const changePagination = (type) => {
        if(type === 'Greater') {
            setPagination(pagination + 1)
            callApiCountries(pagination + 1, nameSearch)
        } 
        if(type === 'Lesser') {
            setPagination(pagination - 1)
            callApiCountries(pagination - 1, nameSearch)
        } 
    }

    const searchName = (name) => {
        callApiCountries(1, name)
        setNameSearch(name)
    }

    return (
        <>
            <div className={style.content}>
                <NavBaR onSearch={searchName} />
                <ConfigFilters />
                <div className={style.divCard} >
                    {
                        countries.rows?.map((country) => {
                            return (
                                <Card
                                    key={country.id}
                                    name={country.name}
                                    image={country.image}
                                    continent={country.continent}
                                />
                            )
                        })
                    }
                </div>
                <div className={style.divPagination}>
                    <button onClick={ () => changePagination('Lesser') } disabled={pagination === 1}><img height='10px' width='10px' src={Lesser}/></button>
                    <span>{pagination} </span>
                    <button disabled={totalPages === pagination} onClick={ () => changePagination('Greater') } ><img height='10px' width='10px' src={Greater}/></button>
                    <span>Total de paginas: {totalPages}</span>
                </div>
            </div>
        </>
    )
}

export default HomePage