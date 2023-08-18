import { useState } from 'react'
import style from './ConfigFilters.module.css'

const ConfigFilters = () => {

    const [isOrdenamiento, setOrdenamiento] = useState(false)
    const [isfilter, setFilter] = useState(false)
    const [nameFilter, setNameFilter] = useState(null)

    const changeSelect = (event) => {
        if (event.target.name === 'sort') {
            if (event.target.value !== '') {
                setOrdenamiento(true)
            } else {
                setOrdenamiento(false)
            }
        }

        if (event.target.name === 'filter') {
            if (event.target.value !== '') {
                setFilter(true)
                setNameFilter(event.target.value)
            } else {
                setFilter(false)
            }
        }

    }

    return (
        <div className={style.content}>
            <div className={style.contentDiv}>
                <label>Filter by:</label>
                <select onChange={changeSelect} name='filter' className={style.select}>
                    <option></option>
                    <option>Continent</option>
                    <option>Activity</option>
                </select>
                {
                    isfilter && (
                        <>
                            <label>{nameFilter}:</label>
                            <select className={style.select}>
                                <option></option>
                                <option>opcion1</option>
                                <option>opcion1</option>
                            </select>
                        </>
                    )
                }
            </div>
            <div className={style.contentDiv}>
                <label>Sort by:</label>
                <select onChange={changeSelect} name='sort'>
                    <option></option>
                    <option value='Alphabetically'>Alphabetically</option>
                    <option value='Population'>Population</option>
                </select>
                {
                    isOrdenamiento && (
                        <>
                            <button>Ascending</button>
                            <button>Descending</button>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default ConfigFilters