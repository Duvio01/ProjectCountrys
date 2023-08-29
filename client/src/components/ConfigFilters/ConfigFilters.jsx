import { useState } from 'react'
import style from './ConfigFilters.module.css'
import { useSelector } from 'react-redux'

const ConfigFilters = ({ changeSelectFilter, isOrdenamiento, isfilter, nameFilter, orderCountries, filterCountries }) => {

    const [selectContinent, setSelectContinent] = useState('')
    const [selectActivity, setSelectActivity] = useState('')

    const continents = ['', 'South America',
        'Oceania',
        'Antarctica',
        'Africa',
        'Asia',
        'North America',
        'Europe']

    const activities = useSelector(state => state.allActivities)

    const handleChange = (event) => {
        if(event.target.name === 'filter' && event.target.value === ''){
            setSelectContinent('')
            setSelectActivity('')
        }
        if(event.target.name === 'Continent') setSelectContinent(event.target.value)
        if(event.target.name === 'Activity') setSelectActivity(event.target.value)
    }

    return (
        <div className={style.content}>
            <div className={style.contentDiv}>
                <label>Filter by:</label>
                <select onChange={ ()=> { changeSelectFilter(event); handleChange(event) }} name='filter' className={style.selectFilter}>
                    <option></option>
                    <option>Continent</option>
                    <option>Activity</option>
                </select>
                {
                    isfilter && (
                        <>
                            <label>{nameFilter}:</label>
                            {
                                nameFilter === 'Continent' ? (
                                    <select onChange={ () => {filterCountries(event); handleChange(event)}} value={selectContinent} name={nameFilter} className={style.selectFilter}>
                                        {
                                            continents.map((continent, index) => <option key={index} value={continent}>{continent}</option>)
                                        }
                                    </select>
                                ) : (
                                    <select onChange={ () => {filterCountries(event); handleChange(event)}} value={selectActivity} name={nameFilter} className={style.selectFilter}>
                                        {
                                            activities?.map((activity, index) => <option key={index} value={activity.name}>{activity.name}</option>)
                                        }
                                    </select>
                                )
                            }
                            {/* <select onChange={filterCountries} className={style.selectFilter}>
                                {   
                                    nameFilter === 'Continent' ? (
                                        continents.map((continent, index) => <option key={index} value={continent}>{continent}</option>)
                                    ) : (
                                        activities.length > 0 && (
                                            activities?.map((activity, index) => <option key={index} value={activity.name}>{activity.name}</option>)
                                        )
                                    )
                                }
                            </select> */}
                        </>
                    )
                }
            </div>
            <div className={style.contentDiv}>
                <label>Sort by:</label>
                <select className={style.selectFilter} onChange={changeSelectFilter} name='sort'>
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