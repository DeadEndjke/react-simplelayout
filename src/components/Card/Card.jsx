import s from './Card.module.scss';


const Card = ({photo, heading, description}) =>{
    return(
        <div className={s.card}>
            <img className={s.cardPhoto} src={photo} alt="" />
            <div className={s.heading}>{heading}</div>
            <div className={s.description}>{description}</div>
        </div>
    );
}

export default Card;