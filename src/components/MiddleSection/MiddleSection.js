import React, { useState } from "react";
import "./MiddleSection.css";
import MiddleOption from "../MiddleOption/MiddleOption";
import middleOptions from "../../data/middleOptions";

function MiddleSection() {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <section className="middleSection">
      <h2 className="middleSection__title">
        Lacinia quis vel eros tempor orci.
      </h2>
      <ul className="middleSection__options">
        {middleOptions.map((item, index) => (
          <MiddleOption
            key={item.id}
            data={item}
            index={index}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </ul>
    </section>
  );
}

export default MiddleSection;
