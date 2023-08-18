import style from './Card.module.css'

const Card = ({name, image, continent}) => {
    return (
        <div className={style.content}>
            <span className={name.length > 29 ? style.textLarge : name.length > 17 ? style.textMedium : ''}>{name}</span>
            <img width='260px' height='150px' src={image} alt="Prueba"/>
            <span>{continent}</span>
        </div>
    )
}
export default Card