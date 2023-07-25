import "../assets/css/Box.css";
import Stars from "../assets/img/Stars.svg";
import georgeSexy from "../assets/img/barba-sexy-hombres.webp";
import luis from "../assets/img/luis.png";
import pablo from "../assets/img/pablo.jpg";
import selene from "../assets/img/selene.jpg";
import berto from "../assets/img/berto.jpg";
import david from "../assets/img/david.jpg";
import { useEffect } from "react";
import { useState } from "react";

export function Box() {
    const testimonials = [
        {
          name: 'George Sexy',
          quote: 'I recently had the pleasure of using the product exchange feature on TROCO, and I couldn\'t be happier with the experience. As someone who loves finding new items while decluttering my home, this feature has been a game-changer.',
          image: georgeSexy,
          stars: Stars,
        },
        {
            name: 'Luis Saavedra',
            quote: 'This retro console exchange website is amazing! I was able to find the console of my dreams and trade it for one I no longer used. The process was quick and secure! I highly recommend this website to all retro gaming enthusiasts.',
            image: luis,
            stars: Stars,
          },
          {
            name: 'Pablo Baleztena',
            quote: 'As a retro console collector, this exchange website has saved me so much time and money. I can easily find the consoles I\'m looking for and make fair trades with other enthusiasts. It\'s great to be part of this community.',
            image: pablo,
            stars: Stars,
          },
          {
            name: 'Selene Tourn',
            quote:'I never thought I would find a website dedicated to the exchange of retro consoles! Here, I have met passionate gamers who are willing to trade their beloved consoles for others. It\'s like a treasure trove for retro gaming enthusiasts like me.', 
            image: selene,
            stars: Stars,
          },
          {
            name: 'Berto',
            quote: 'This retro console exchange platform is a game-changer! I\'ve been able to expand my collection by trading with fellow gamers. The website is user-friendly, and the community is supportive. It\'s a fantastic place for anyone interested in retro gaming',
            image: berto,
            stars: Stars,
          },
          {
            name: 'David Losas',
            quote: 'I stumbled upon this retro console exchange website, and it\'s been a blast! The variety of consoles available for trade is impressive, and the whole process is smooth and secure. It\'s like having a dedicated marketplace for retro gaming enthusiasts.',
            image: david,
            stars: Stars,
          },
      ];
  
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
  
    const { name, quote, image, stars } = testimonials[currentTestimonial];
  
    return (
      <section className="boxContent">
        <h1 className="boxH1">What they think about us:</h1>
        <div className="testimonials">
          <h2 className="boxH2">{name} says:</h2>
          <p className="paragraph">{quote}</p>
          <div className="contenedorUser">
            <div
              className="imageUser"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="textWrapper">{name}</div>
            <div
              className="stars"
              style={{ backgroundImage: `url(${stars})` }}
            ></div>
          </div>
        </div>
      </section>
    );
  }
