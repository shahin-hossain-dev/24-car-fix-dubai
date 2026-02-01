"use client";

const getText = (content) => {
  if (typeof document !== "undefined") {
    const element = document?.createElement("div");

    element.innerHTML = content;

    return `${element.innerText.slice(0, 100)}...`;
  }
};

const Description = (content) => {
  return <div>{getText(content?.content)}</div>;
};

export default Description;
