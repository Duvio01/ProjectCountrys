import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = ({name, image, continent, id}) => {
    return (
        <div className={style.content}>
        <Link style={{ 'textDecoration': 'none'}} to={`/detail/${id}`}>
            <span className={name.length > 29 ? style.textLarge : name.length > 17 ? style.textMedium : ''}>{name}</span>
        </Link>
            <img width='260px' height='150px' src={image} alt="Prueba"/>
            <span>{continent}</span>
        </div>
    )
}
export default Card