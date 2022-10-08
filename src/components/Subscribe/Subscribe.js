import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="subscribe__container">
        <h3 className="subscribe__title">Subscribe to our newsletter</h3>
        <form action="submit">
          <input type="email" placeholder="Company e-mail address" />
          <button type="submit">Subscribe</button>
        </form>
        <p className="subscribe__description">
          Chupa chups gummi bears shortbread candy
        </p>
      </div>
    </section>
  );
}

export default Subscribe;
