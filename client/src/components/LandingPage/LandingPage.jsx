import style from './LandingPage.module.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className={style.backgroundImageLanding}>
      <div className={style.divContent}>
        <div className={style.divTitle}>
          <h1>Countries</h1>
        </div>
        <div className={style.divButton}>
          <Link to='/home'>
          <button type='button' className={`${style.button} ${style.float}`}>Enter</button>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default LandingPage