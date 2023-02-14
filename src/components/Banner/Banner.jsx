import s from './Banner.module.scss';
import banner from '../../Images/Banner.png';

const Banner = () =>{
    return(
        <div className={s.banner}>
            <img className={s.img} src={banner} alt="banner"/>
        </div>
    );
}

export default Banner;