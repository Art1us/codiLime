import React, { useState } from "react";
import "./BottomSection.css";
import BottomOption from "../BottomOption/BottomOption";
import bottomOptions from "../../data/bottomOptions";

function BottomSection() {
  const [selected, setSelected] = useState();

  return (
    <section className="bottomSection">
      <article>
        <h2 className="bottomSection__title">
          Massa tempor nec feugiat nisl pretium fusce
        </h2>
        <p className="bottomSection__desc">
          Pellentesque <strong>habitant</strong> morbi tristique senectus et
          netus et malesuada. <strong>Ipsum faucibus vitae</strong> aliquet nec
          ullamcorper sit amet risus nullam. Dictum varius duis at consectetur{" "}
          <strong>lorem donec</strong> massa sapien. Massa tempor nec feugiat
          nisl pretium fusce.
        </p>
        <p>Elit scelerisque mauris pellentesque?</p>
      </article>

      <ul className="bottomSection__container">
        {bottomOptions.map((item, index) => (
          <BottomOption
            selected={selected}
            setSelected={setSelected}
            key={item.id}
            index={index}
            props={item}
          />
        ))}
      </ul>
    </section>
  );
}

export default BottomSection;
