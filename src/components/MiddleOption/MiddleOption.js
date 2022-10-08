import React from "react";
import "./MiddleOption.css";

import {
  AiOutlinePlusCircle,
  AiFillPlusCircle,
  AiOutlineMinusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

function MiddleOption({ index, data, selectedOption, setSelectedOption }) {
  const { title, desc } = data;
  const i = (index + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <li className="middleOption">
      <div className="middleption__infoContainer">
        <p className="middleOption__number">{i}.</p>
        <h4 className="middleOption__title">{title}</h4>
        {selectedOption === index && (
          <p className="middleOption__desc">{desc}</p>
        )}
      </div>
      <div
        className="middleOption__iconContainer"
        onClick={() => setSelectedOption(index)}
      >
        {selectedOption === index ? (
          <>
            <AiOutlineMinusCircle className="middleOption__icon outline" />
            <AiFillMinusCircle className="middleOption__icon fill" />
          </>
        ) : (
          <>
            <AiOutlinePlusCircle className="middleOption__icon outline" />
            <AiFillPlusCircle className="middleOption__icon fill" />
          </>
        )}
      </div>
    </li>
  );
}

export default MiddleOption;
