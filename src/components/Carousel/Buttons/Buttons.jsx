import s from './Buttons.module.scss';


const Buttons = ({active1, active2, handleLeftClick, handleRightClick}) => {
    
    return(
        <div className={s.buttons}>
                <button className={active1 === 0 ? s.btnClosed: s.btn} onClick={handleLeftClick}>`{'<'}`</button>
                <button className={active2 === 0 ? s.btnClosed: s.btn} onClick={handleRightClick}>`{'>'}`</button>
        </div>
    );
}

export default Buttons;