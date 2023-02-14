import s from './HeadingAndButton.module.scss';

const HeadingAndButton = () =>{
    return(
        <div className={s.headingAndButton}>
            <div className={s.heading}>
                Walking in Old Tallinn
            </div>
            <button className={s.btn}>
                    Feedback

            </button>
        </div>
    );
}
export default HeadingAndButton;