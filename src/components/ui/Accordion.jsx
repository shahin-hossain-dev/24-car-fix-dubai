import React from "react";
import { Collapse } from "antd";

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;
// const items = [
//   {
//     key: "1",
//     label: "This is panel header 1",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "2",
//     label: "This is panel header 2",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "3",
//     label: "This is panel header 3",
//     children: <p>{text}</p>,
//   },
// ];
const Accordion = ({ data }) => {
  const items = data.map((item, idx) => {
    return {
      key: idx,
      label: <p className="text-lg font-medium">{item.title}</p>,
      children: <p className="text-base">{item.description}</p>,
    };
  });

  return <Collapse defaultActiveKey={["0"]} accordion items={items} />;
};
export default Accordion;
