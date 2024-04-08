import React from "react"
import ReactDOM from "react-dom/client";
// const heading= React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Example 2

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     [
//         React.createElement(
//             "div",
//             {id:"child"},
//             [React.createElement(
//                 "h1",
//                 {},
//                 "I am a heading h1 tag"
                
//             ),
//             React.createElement(
//                 "h2",
//                 {},
//                 "I am a heading h2 tag"
                
//             )
//         ]
            
//         ),
//         React.createElement(
//             "div",
//             {id:"child2"},
//             [React.createElement(
//                 "h1",
//                 {},
//                 "I am a heading h1 tag"
                
//             ),
//             React.createElement(
//                 "h2",
//                 {},
//                 "I am a heading h2 tag"
                
//             )
//         ]
            
//         )
//     ]
    
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


const heading= React.createElement("h1",{id:"heading"},"Running react application");

// jsx
const jsxHeading=(<div><h1>Hello World from JSX</h1>
</div>
);
//functional component
const TitleComponent=()=>{
    return (<h1>
        {jsxHeading}
        Title component
        </h1>);
}
const HeadingComponent =()=>{
    return (
    <div>
        <TitleComponent/>
        {/* below is another way of using components
        {TitleComponent()} */}
        <h1>Hello World from functional component</h1>
    </div>
    );
}
// industry standard


const HeadingComponent1=()=><h1>Hello World functional component in other way</h1>

const root =ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//root.render(jsxHeading);
root.render(<HeadingComponent/>);

