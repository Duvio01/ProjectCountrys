import { useState } from 'react'
import style from './ConfigFilters.module.css'

const ConfigFilters = ({ changeSelectFilter, isOrdenamiento, isfilter, nameFilter, orderCountries, filterCountries }) => {

    const continents = [ '', 'South America',
        'Oceania',
        'Antarctica',
        'Africa',
        'Asia',
        'North America',
        'Europe']

    return (
        <div className={style.content}>
            <div className={style.contentDiv}>
                <label>Filter by:</label>
                <select onChange={changeSelectFilter} name='filter' className={style.select}>
                    <option></option>
                    <option>Continent</option>
                    <option>Activity</option>
                </select>
                {
                    isfilter && (
                        <>
                            <label>{nameFilter}:</label>
                            <select onChange={filterCountries} className={style.select}>
                                {   
                                    nameFilter === 'Continent' ? (
                                        continents.map((continent, index) => <option key={index} value={continent}>{continent}</option>)
                                    ) : (
                                        <>
                                            <option>opcion 1</option>
                                            <option>opcion 1</option>
                                            <option>opcion 1</option>
                                        </>
                                    )
                                }
                            </select>
                        </>
                    )
                }
            </div>
            <div className={style.contentDiv}>
                <label>Sort by:</label>
                <select onChange={changeSelectFilter} name='sort'>
                    <option></option>
                    <option value='name'>Alphabetically</option>
                    <option value='population'>Population</option>
                </select>
                {
                    isOrdenamiento && (
                        <>
                            <button onClick={orderCountries} name='asc'>Ascending</button>
                            <button onClick={orderCountries} name='desc'>Descending</button>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default ConfigFilters