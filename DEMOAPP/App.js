import React from 'react';
import ReactDOM  from 'react-dom/client';
// const parent
{/* <div id= "parent">
    <div id = 'child'>
        <h1>This is h1 heading tag</h1>
        <h1>This is h2 teading tag</h1>
    </div>
</div> */}

const parent = React.createElement("div", 
{id:"parent1"},
[React.createElement('div',{id:'child1'},
[React.createElement('h1',{},"This is h1 heading tag"),React.createElement('h2',{},"This is h2 heading tag")])
,React.createElement('div',{id:'child2'},
[React.createElement('h1',{},"This is h1 heading tag"),React.createElement('h2',{},"This is h2 heading tag")])
]);

const heading = React.createElement("h1",{id:'heading'},"Hellow world from react!!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);