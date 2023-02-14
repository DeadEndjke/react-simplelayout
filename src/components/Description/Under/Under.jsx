import s from './Under.module.scss'

const Under = () =>{
    return(
        <ul>
            <li className={s.paragraph}>
                Welcome to Old Tallinn, the heart of the Estonian capital!
                The history of the settlement once began from here, and today it is one of the best preserved medieval cities in Europe.
            </li>
            <li className={s.paragraph}>
                I will take you through the streets and doorways and show you where they traded, what they ate, what they sued about and what our Estonian ancestors aspired to.
            </li>
            <li className={s.paragraph}>
                You will visit the oldest pharmacy, get acquainted with the royal privileges, see firsthand a real "gingerbread" house, look into an old tavern, walk along the widest and longest streets of the city and even find out that Tallinn is a lame city!
            </li>
            <li className={s.paragraph}>
                And you will also find beautiful and interesting souvenirs, of course!
            </li>
        </ul>
    );
}

export default Under;