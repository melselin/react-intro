import React from 'react';
import TodoList from './ToDoList';

// Javascript Xml
// JSX => js + html
//export function App() { <- normal export işleminde başına export geliyor
function App() {  // <- default export işleminde
  return (
      <div className="App">
        <TodoList />
      </div>
    );
}

export default App;
//export const variable = 1;
//export const variable2= 2;
