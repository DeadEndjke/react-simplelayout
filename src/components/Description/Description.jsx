import s from './Description.module.scss';
import HeadingAndButton from "./HeadingAndButton/HeadingAndButton";
import Under from "./Under/Under";


const Description = () =>{
    return(
        <div className={s.description}>
            <HeadingAndButton/>
            <Under/>
        </div>
    );
}

export default Description;