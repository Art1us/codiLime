import React from "react";
import "./BottomOption.css";
import { AiOutlineRight } from "react-icons/ai";

function BottomOption({ props, index, selected, setSelected }) {
  return (
    <li
      className="bottomOption"
      style={{ backgroundColor: selected === index ? "#29CC6A" : "#FFFFFF" }}
      onClick={() => setSelected(index)}
    >
      {selected === index ? props.iconWhite : props.icon}
      <div className="bottomOption__details">
        {selected === index && <a href="/">View details</a>} 
        <AiOutlineRight color={selected === index ? "#FFFFFF" : "#29CC6A"} />
      </div>
    </li>
  );
}

export default BottomOption;
