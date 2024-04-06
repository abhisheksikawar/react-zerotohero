import React from "react"
import ReactDOM from "react-dom/client";
// const heading= React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Example 2

const parent=React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
            [React.createElement(
                "h1",
                {},
                "I am a heading h1 tag"
                
            ),
            React.createElement(
                "h2",
                {},
                "I am a heading h2 tag"
                
            )
        ]
            
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [React.createElement(
                "h1",
                {},
                "I am a heading h1 tag"
                
            ),
            React.createElement(
                "h2",
                {},
                "I am a heading h2 tag"
                
            )
        ]
            
        )
    ]
    
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
