console.log("---loading script js ----");

const jsContainer = document.getElementById('jscontainer');

const reactContainer = document.getElementById('reactContainer');

const render = () => {


  jsContainer.innerHTML = `
    <div class="demo">
        Hello Javascript
        <Input/>
        <p>${new Date()}</p>
     </div>
`;

  //note the difference , in native JS we use strings and in React we use Objects

  ReactDOM.render(
    React.createElement(
      "div", {
        className: "demo"
      },
      "Hello React",
      React.createElement("input"),
      React.createElement("p", null, new Date().toString())
    ),
    reactContainer
  );
}

setInterval(render, 1000);
console.log("completed");
