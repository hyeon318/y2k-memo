import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import Banner from "../banner.jpg";

// const test = <div>테스트에요 ㅠㅜㅠ</div>;

// const container = document.createElement("div");
// document.body.appendChild(container);
// const root = createRoot(container);
// root.render(test);

const test = (
  <div>
    <h1 className="text-5xl text-green-500">Hello World</h1>
    <img
      src={Banner}
      alt="helpme"
    />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequuntur? In ratione est ea eligendi hic
      non sequi quibusdam libero, cumque repudiandae id nihil! Obcaecati et ullam nostrum nam voluptatum!
    </p>
  </div>
);
const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
