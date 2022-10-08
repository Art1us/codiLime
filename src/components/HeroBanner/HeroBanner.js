import React from "react";
import "./HeroBanner.css";

import img1 from "../../assets/images/pic1.png";

function HeroBanner() {
  return (
    <section className="heroBanner">
      <article className="heroBanner__left">
        <h1>
          <strong>Duis aute irure</strong> dolor in reprehenderit
        </h1>
        <p className="heroBanner__desc">
          Nam at lectus urna duis convallis. Id semper risus in hendrerit
          gravida rutrum quisque non tellus. Elit eget gravida cum sociis
          natoque. Ultrices neque ornare aenean euismod elementum nisi quis
          eleifend. Arcu felis bibendum ut tristique et egestas.
        </p>
        <button className="heroBanner__button">Discover now</button>
      </article>
      <figure className="heroBanner__right">
        <img src={img1} alt="image" />
      </figure>
    </section>
  );
}

export default HeroBanner;
