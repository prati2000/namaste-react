import React from "react";
import ReactDOM from "react-dom/client";

//react element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "I am Pratishtha Singh!!"
);

//React component
const HeadingComponent = () => {
  return <h1>Heading</h1>;
};

const Title = () => (
  <div>
    {HeadingComponent()}
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    {heading}
    <h1>Title</h1>
  </div>
);

const jsxHeading = <h1 id="heading">Namaste-react</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

//how to render functional component?

root.render(<Title />);
