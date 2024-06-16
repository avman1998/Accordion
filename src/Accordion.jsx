import React, { useState } from "react";
const data = [
  {
    id: 1,
    title: "Header 1",
    content: "Content 1",
  },
  {
    id: 2,
    title: "Header 2",
    content: "Content 2",
  },
  {
    id: 3,
    title: "Header 3",
    content: "Content 3",
  },
];
const Accordion = () => {
  const [active, setActive] = useState(null);
  return (
    <div>
      {data?.map((item) => {
        return (
          <div>
            <p onClick={() => setActive(item?.id)}>{item?.title}</p>
            {active === item?.id && <p>{item?.content}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
