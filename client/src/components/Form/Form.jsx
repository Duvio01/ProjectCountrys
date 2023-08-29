import { useDispatch, useSelector } from 'react-redux'
import style from './Form.module.css'
import { useEffect, useState } from 'react'
import { validations } from './Validations'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { allCountriesForm } from '../../redux/action'

export const Form = () => {

    const [dataForm, setDataForm] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })
    const [errors, setErrors] = useState({})
    const [disableButton, setDisableButton] = useState(true)
    const countries = useSelector(state => state.allCountriesForm)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allCountriesForm())
    }, [])

    const changeForm = (event) => {
        if (event.target.name === 'countries') {
            const arrayCountries = Array.from(event.target.selectedOptions, option => option.value)
            setDataForm({ ...dataForm, [event.target.name]: arrayCountries })
            setErrors(validations({ ...dataForm, [event.target.name]: arrayCountries }))
        } else {
            setDataForm({ ...dataForm, [event.target.name]: event.target.value })
            setErrors(validations({ ...dataForm, [event.target.name]: event.target.value }))
        }

        if (Object.keys(errors).length === 0 && dataForm.name !== '') {
            setDisableButton(false)
        }
    }

    const submitForm = (event) => {
        event.preventDefault()
        if (Object.keys(errors).length === 0 && dataForm.name !== '') {
            axios.post('http://localhost:3001/activities', dataForm).then((data) => {
                alert(data.data)
                navigate('/home')
            })
        } else {
            alert('Error: Some fields are empty or have errors')
        }
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <Link to='/home' className={style.dislayButton}>
                    <button>Back</button>
                </Link>
                <h1>New Activity</h1>
                <form onSubmit={submitForm} className={style.divForm}>
                    <div>
                        <label>Name: </label>
                        <input value={dataForm.name} onChange={changeForm} name='name'></input>
                        {
                            errors.name && (
                                <span>{errors.name}</span>
                            )
                        }
                    </div>
                    <div>
                        <label>Dificultad: </label>
                        <select value={dataForm.difficulty} onChange={changeForm} name='difficulty'>
                            <option value=''></option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        {
                            errors.difficulty && (
                                <span>{errors.difficulty}</span>
                            )
                        }
                    </div>
                    <div>
                        <label>Duration: </label>
                        <input value={dataForm.duration} onChange={changeForm} type='number' name='duration'></input>
                        {
                            errors.duration && (
                                <span>{errors.duration}</span>
                            )
                        }
                    </div>
                    <div>
                        <label>Season: </label>
                        <select value={dataForm.season} onChange={changeForm} name='season'>
                            <option value=''></option>
                            <option value='Summer'>Summer</option>
                            <option value='Autumn'>Autumn</option>
                            <option value='Winter'>Winter</option>
                            <option value='Spring'>Spring</option>
                        </select>
                        {
                            errors.season && (
                                <span>{errors.season}</span>
                            )
                        }
                    </div>
                    <div>
                        <label>Countries: </label>
                        <select onChange={changeForm} className={style.checkboxSelect} name='countries' multiple>
                            {
                                countries.rows?.map((country, index) => {
                                    return (
                                        <>
                                            <option key={index} value={country.id}>{country.name}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                        {
                            errors.countries && (
                                <span>{errors.countries}</span>
                            )
                        }
                    </div>
                    <div>
                        <button disabled={disableButton}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}