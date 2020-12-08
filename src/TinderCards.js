import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'; 

function TinderCards() {
    const [people] = useState([
        {
            name:'Elon Musk',
            //url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
            url:"https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
        },
        {
            name:'Jeff Bezos',
            url: "https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
        },
    ]);
    const swiped = (direction, nameToDelete) =>{
        console.log("removing"+nameToDelete);
        //setLastDirection(direction);
    };
    
    const outOfFrame = (name) =>{
        console.log(name + "left the Screen!");
    };

    return (
        <div className="tinderCards">
           <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard 
                 className="swipe"
                 key={person.name}
                 preventswipe = {["up","down"]}
                 onSwipe={(dir) => swiped(dir, person.name)}
                 onCardLeftScreen = {() => outOfFrame(person.name)}
                >
                  <div
                  //Inline interpolation in url: person.url
                    style = {{backgroundImage: `url(${person.url})`}}
                    className = "card">
                    <h3>{person.name}</h3>
                  </div>
                </TinderCard>

                ))}
           </div>
            
            
        </div>
    );
}

export default TinderCards
