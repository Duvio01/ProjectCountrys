import style from './Card.module.css'

const Card = () => {
    return (
        <div className={style.content}>
            <span>Colombia</span>
            <img width='260px' height='150px' src="https://flagcdn.com/w320/co.png" alt="Prueba"/>
            <span>America del ser</span>
        </div>
    )
}
export default Card