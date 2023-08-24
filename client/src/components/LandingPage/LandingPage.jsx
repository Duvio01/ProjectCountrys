import { useDispatch } from 'react-redux'
import style from './LandingPage.module.css'
import { Link } from 'react-router-dom'
import { allCountries } from '../../redux/action'

const LandingPage = () => {

  const dispatch = useDispatch()

  const getCharacter = () => {
    dispatch(allCountries())
  }

  return (
    <div className={style.backgroundImageLanding}>
      <div className={style.divContent}>
        <div className={style.divTitle}>
          <h1>Countries</h1>
        </div>
        <div className={style.divButton}>
          <Link to='/home'>
          <button type='button' onClick={getCharacter} className={`${style.button} ${style.float}`}>Enter</button>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default LandingPage