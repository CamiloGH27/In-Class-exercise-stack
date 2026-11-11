import React, { useState } from 'react';
import './style.css'; // Assuming StackBlitz has a style.css file for basic styling

// Define the main App component using a function (Functional Component)
function App() {
  // 1. Declare a state variable named 'count' and a function 'setCount' to update it.
  // The starting value of count is 0.
  let taskdata = [
    { id: 1, item: 'Soda', style: 'cool' },
    { id: 2, item: 'candy', style: 'hot' },
    { id: 3, item: 'Milk', style: 'cool' },
    { id: 4, item: 'Cereal', style: 'complete' },
    { id: 5, item: 'Beans', style: 'hot' },

  ];
  const [count, setCount] = useState(6);
  const [tasklist, setTasklist] = useState(taskdata);

  // bind the tasklist with the HTML lists // *add id entry *
const changeStyle = (event) => {
let thestyle = event.target.className;
let theid = event.target.id;
console.log(theid);
if (thestyle == 'cool'){
  thestyle = 'complete';
 
}
else if(thestyle == 'complete'){
thestyle ='hot';

}
else if (thestyle == 'hot') {
  thestyle = 'cool';
  
}
//update the list
console.log(thestyle);
let newlist = tasklist.map((task) => task.id == theid ? {...task,style: thestyle} : task );  

setTasklist(newlist);
};


  const listitems = tasklist.map((task) => (
    <li key={task.id} id={task.id} className={task.style} onClick = {changeStyle}>
      {' '}
      {task.item}{' '}
    </li>
  ));

  // 2. Define the function to run when the button is clicked
  const incrementCount = () => {
    // Use the setCount function to update the state, which triggers a re-render
    setCount(count + 1);
  };
  // multiple the value of count
  function sortCount() {
    setCount(count * 2); // count = count * 2
  }
  // blur --- addTask
  const addTask = (event) => {
    // update the tasklist
    let content = event.target.value;
    // add if statement only add task if content is not empty
    if (content != '') {
      // increase the count
      setCount(count+1);
      let newtask = { id: count, item: content, style: 'cool' };
      let newtasklist = [...tasklist, newtask];
      setTasklist(newtasklist);
      event.target.value = '';

    }
  };
  // hit enter -- addTask --- pass the event object
  function addTask2(event) {
    if (event.key == 'Enter') {
      addTask(event);
    }
  }

//remove with compleate style
const removeComplete = () => {
let newlist= tasklist.filter((task) => task.style != 'complete' );

setTasklist(newlist);
setCount(newlist.length);
}

// opt extra credit
const sortlist = () => {
  let newlist = [...tasklist];

  newlist.sort(function(a, b) {
    if (a.item.toLowerCase() > b.item.toLowerCase()) {
      return 1;
    }
    return -1;
  });

  setTasklist(newlist);
};

  // 3. The component returns JSX (HTML-like syntax) to define the UI
  return (
    <div className="app-container">
      <h2>Walmart List ⚛️</h2>

      <button className="counter-button" onClick={removeComplete}>
        Remove
      </button>

      <button className="counter-button" onClick={sortlist}>
        sort
      </button>

      <ul id="todo">{listitems}</ul>
      <input
        type="text"
        placeholder="Enter Task"
        onBlur={addTask}
        onKeyUp={addTask2}
      />

      {/* Display the current value of the state */}
      <div className="count-display">
        Total Tasks: <strong>{count}</strong>
      </div>
    </div>
  );
}

// Export the component so index.js can use it
export default App;

