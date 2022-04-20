import logo from '../logo.svg';
//import './App.css';
import React from 'react';
import { TodoProvider } from './TodoContext';
import { AppUI } from './AppUI';
/*
const todos = [
  {text: "Mercar", completed: true },
  {text: "servir atun", completed: false },
  {text: "terminar el curso de intro a react", completed: false },
  {text: "conquistar al mundo", completed: false }
];

localStorage.setItem('TODOS_V1', JSON.stringify(alltodos))
*/




function App() {
 
  return (
  
     <TodoProvider>
       <AppUI/>
     </TodoProvider>

    
  );
}

export default App;
