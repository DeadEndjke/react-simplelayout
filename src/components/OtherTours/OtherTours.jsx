import Card from '../Card/Card';
import s from './OtherTours.module.scss';
import card1 from './../../Images/card1.png';
import card2 from './../../Images/card2.png';
import card3 from './../../Images/card3.png';
import { useState } from 'react';

const PAGE_WIDTH = 313;
const OtherTours = () =>{
    
    const cards = [
        {
            id: 1,
            photo: card1,
            heading: "St. Isaac's Cathedral in St. Petersburg",
            description: "One of the highest domed structures in the world."
        },
        {
            id: 2,
            photo: card2,
            heading: "The Bridge of Peace, Tbilisi",
            description: "Arc-shaped pedestrian bridge made of glass and steel"
        },
        {
            id: 3,
            photo: card3,
            heading: "El Caminito del Rey, Argentina",
            description: "Tango, Open-air Museum, Painting, Art and History"
        },
    ]
    const[pages, setPages] = useState([]);
    const[offset, setOffset] = useState(0);
    const[active1, setActive1] = useState(0)
    const[active2, setActive2] = useState(1)
    
    const handleLeftClick = () =>{
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
           if(Math.min(newOffset, 0) === 0){
            setActive2(1)
            setActive1(0);
           }else{
            setActive2(1)
            setActive1(1)
           }
            return Math.min(newOffset, 0)
        })
        console.log(offset)
    }
    const handleRightClick = () =>{
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const max = -(PAGE_WIDTH * 2)
            if(Math.max(newOffset, max) === -1252){
                setActive2(0)
                setActive1(1)
            }
            else{
                setActive2(1)
                setActive1(1)
            }
            return Math.max(newOffset, max)
        })
        console.log(offset)
    }
    return(
        <div className={s.otherTours}>
            <div className={s.heading}>OtherTours</div>

            <div className={s.cards}
            style={{
                transform:`translateX(${offset}px)`
            }}>
                {cards.map((cards)=>(
                    <Card 
                        key={cards.id}
                        photo={cards.photo}
                        heading={cards.heading}
                        description = {cards.description}
                        />
                ))}
            </div>
            <div className={s.buttons}>
                    <button className={active1 === 0 ? s.btnClosed: s.btn} onClick={handleLeftClick}>`{'<'}`</button>
                    <button className={active2 === 0 ? s.btnClosed: s.btn} onClick={handleRightClick}>`{'>'}`</button>
            </div>
        </div>
    );
}

export default OtherTours;