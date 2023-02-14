import { Children, cloneElement, useEffect, useState } from 'react';
import Buttons from './Buttons/Buttons';
import s from './Carousel.module.scss';



const Carousel = ({children, width, need}) =>{
    const PAGE_WIDTH = width;
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
            const max = -(PAGE_WIDTH * (pages.length - 2))
            if(Math.max(newOffset, max) === max){
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
        console.log(widthh)
        console.log(need)
    }



    useEffect(() => {
        setPages(
            
            Children.map(children, child =>{
                return cloneElement(child, {
                    // style:{
                    //     height:'100%',
                    //     minWidth:`${PAGE_WIDTH}px`,
                    //     maxWidth:`${PAGE_WIDTH}px`
                    // }
                })
            })
        ) 
    }, [])
    const [widthh, setWidthh] = useState(window.innerWidth);
    const breakpoint = 1100;
    useEffect(() => {
     const handleResizeWindow = () => setWidthh(window.innerWidth);
      // subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);


    return(
        <div className={s.anotherContainer}>
            <div className={s.mainContainer}
            style={{
                height: `${width}px`
            }}>
                <div className={s.window}>
                    <div className={s.allPagesContainer}
                    style={{
                        transform:`translateX(${offset}px)`
                    }}>
                        {pages}
                    </div>
                </div>
            </div>
            {((widthh < breakpoint) || (need == true)) ? 
            <Buttons 
            active1={active1} 
            active2={active2} 
            handleLeftClick={handleLeftClick} 
            handleRightClick={handleRightClick}
        /> : <div></div>
            }
            
        </div>
    );
}

export default Carousel;