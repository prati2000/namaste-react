const heading = document.createElement("h1");
heading.innerHTML = "HelloWorld JS";
const root = document.getElementById("root");
root.appendChild(heading);

const headingR = React.createElement("h1", {}, "This is a heading");
const rootR = ReactDOM.createRoot(document.getElementById("rootR"));
rootR.render(headingR);
