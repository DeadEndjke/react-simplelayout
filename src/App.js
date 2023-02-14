
import s from './App.module.scss';
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Carousel from "./components/Carousel/Carousel";
import OtherTours from "./components/OtherTours/OtherTours";
import carousel1 from './Images/carousel1.png';
import carousel2 from './Images/carousel2.png';
import carousel3 from './Images/carousel3.png';
import carousel4 from './Images/carousel2.png';
import carousel5 from './Images/carousel3.png';
import card1 from './Images/card1.png';
import card2 from './Images/card2.png';
import card3 from './Images/card3.png';
import Card from './components/Card/Card';
import Item from './components/Item/Item';

function App() {
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
  const carousel = [
    {
      id:1,
      photo:carousel1
    },
    {
      id:2,
      photo:carousel2
    },
    {
      id:3,
      photo:carousel3
    },
    {
      id:4,
      photo:carousel4
    },
    {
      id:5,
      photo:carousel5
    },
  ]
  return (
    <div className={s.App}>
      <Banner/>
      <Description/>
      <Carousel width = {313}  need={true}>
        {carousel.map((carousel)=>(
          <Item
            key={carousel.id}
            photo={carousel.photo}
          />
        ))}
      </Carousel>
      <Carousel width={566}  need={false}>
      {cards.map((cards)=>(
          <Card 
            key={cards.id}
            photo={cards.photo}
            heading={cards.heading}
            description = {cards.description}
          />
        ))}
      </Carousel>
    </div>

  );
}

export default App;
