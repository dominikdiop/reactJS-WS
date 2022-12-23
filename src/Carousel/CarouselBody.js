import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselBody = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1612916628677-475f676a6adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhdG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Hero</h3>
            <p>
              DC has featured Batman in many comic books, including comics
              published under its imprints such as Vertigo and Black Label. The
              longest-running Batman comic, Detective Comics, is the
              longest-running comic book in the United States. Batman is
              frequently depicted alongside other DC superheroes, such as
              Superman and Wonder Woman, as a member of organizations such as
              the Justice League and the Outsiders. In addition to Bruce Wayne,
              other characters have taken on the Batman persona on different
              occasions, such as Jean-Paul Valley / Azrael in the 1993–1994
              "Knightfall" story arc; Dick Grayson, the first Robin.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1583156340160-7867f31285d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmF0bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Hero</h3>
            <p>
              Batman is a superhero appearing in American comic books published
              by DC Comics. The character was created by artist Bob Kane and
              writer Bill Finger, and debuted in the 27th issue of the comic
              book Detective Comics on March 30, 1939. In the DC Universe
              continuity, Batman is the alias of Bruce Wayne, a wealthy American
              playboy, philanthropist, and industrialist who resides in Gotham
              City. Batman's origin story features him swearing vengeance
              against criminals after witnessing the murder of his parents.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1611604548018-d56bbd85d681?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Hero</h3>
            <p>
              Kane conceived Batman in early 1939 to capitalize on the
              popularity of DC's Superman; although Kane frequently claimed sole
              creation credit, Finger substantially developed the concept from a
              generic superhero into something more bat-like. The character
              received his own spin-off publication, Batman, in 1940. Batman was
              originally introduced as a ruthless vigilante who frequently
              killed or maimed criminals, but evolved into a character with a
              stringent moral code and strong sense of justice. Unlike most
              superheroes, Batman does not possess any superpowers, instead
              relying on his intellect, fighting skills, and wealth.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBody;
