import React from "react";
import "./QuoteSection.css";
import logo from "../../assets/images/invision.png";
import { QuoteDownIcon, QuoteUpIcon} from '../../assets/icons/icons'

function QuoteSection() {
  return (
    <section className="quoteSection">
      <div className="quoteSection__left">
        <h3>Bibendum at varius vel pharetra vel turpis nunc eget lorem.</h3>
      </div>
      <article className="quoteSection__right">
        <div className="quoteSection__quote">
          <QuoteUpIcon className="quoteSection_quote2" />
          <blockquote>
            Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus
            in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus
            faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi
            ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit duis
            tristique sollicitudin nibh sit amet commodo nulla.
          </blockquote>

          <p> Faucibus Vitae, Office Assistant </p>
          <QuoteDownIcon className="quoteSection_quote1" />
        </div>
        <img src={logo} alt="" className="quoteSection__logo" />
      </article>
    </section>
  );
}

export default QuoteSection;
