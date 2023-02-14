import s from './Item.module.scss';

const Item = ({photo}) =>{
    return(
        <div className={s.item}>
            <img className={s.img} src={photo}/>
          </div>
    );
}

export default Item;