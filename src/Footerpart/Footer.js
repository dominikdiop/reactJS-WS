import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-part">
      <article className="all-browsers">
        <h1>Most Popular Pages About BatMan</h1>
        <article className="browser">
          <h2>Batman - DC</h2>
          <p>
            One of the most iconic fictional characters in the world, Batman has
            dedicated his life to an endless crusade, a war on all criminals in
            the name of his murdered parents, who were taken from him when he
            was just a child. Since that tragic night, he has trained his body
            and mind to near physical perfection to be a self-made Super Hero
          </p>
        </article>
        <article className="browser">
          <h2>Batman (comic book) - Wikipedia</h2>
          <p>
            Batman is an ongoing American comic book series featuring the DC
            Comics superhero Batman as its main protagonist. The character,
            created by Bob Kane and Bill Finger, first appeared in Detective
            Comics (cover dated May 1939). Batman proved to be so popular
            that a self-titled ongoing comic book series began publication with
            a cover date of spring 1940.It was first advertised in early April
            1940, one month after the first appearance of his new sidekick,
            Robin the Boy Wonder
          </p>
        </article>
        <article className="browser">
          <h2>Batman Publication History | DC Database - Fandom</h2>
          <p>
            Ever since his first appearance in Detective Comics #27, Batman has
            had a consistent publication history, with multiple series published
            every month. His main titles Batman and Detective Comics have run
            successfully for over eight decades, and even after renumbering
            remained big sellers..
          </p>
        </article>
      </article>

      <footer>
        <p>
          Author: Tarek Essid
          <hr />
          <a href="mailto:hege@example.com">tarekpp464@gmail.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
