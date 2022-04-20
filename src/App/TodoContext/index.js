import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: alltodos,
        saveItem: saveTodos,
        loading, 
        error,
      }  = useLocalStorage('TODOS_V1', []); //custom hooks
      const [searchValue, setSearchValue] = React.useState(''); 
      const [openModal, setOpenModal ] = React.useState(false);

      const completedTodos = alltodos.filter(todo => todo.completed===true).length;
      const totalTodos = alltodos.length;
    
      let searchedTodos =[];
      if(!searchValue.length >=1){
        searchedTodos = alltodos;
      }else{
        searchedTodos = alltodos.filter(todo =>{
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return todoText.includes(searchText);
    
        })
      }
    
      const addTodo = (text) => {
        const newTodos = [...alltodos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };
    
      const completeTodo = (text) => {
        const todoIndex = alltodos.findIndex(todo => todo.text === text);
        const newTodos = [...alltodos];
        newTodos[todoIndex].completed = true;
        //setTodos(newTodos);
        saveTodos(newTodos); 
      };
    
      const deleteTodo = (text) => {
        const todoIndex = alltodos.findIndex(todo => todo.text === text);
        const newTodos = [...alltodos];
        newTodos.splice(todoIndex, 1);
        //  setTodos(newTodos);
        saveTodos(newTodos); 
      };
    /*  console.log('antes del useEffect');
      React.useEffect(()=>{
        console.log('aqui ta el useEffect');
      },[totalTodos]); //array vacio se ejecuta 1 vez, // totaltodos si tiene cambios, entonces se ejecuta en el render
      console.log('despues del useEffect'); */
    return(
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal, 
        setOpenModal,
    }}>
        {props.children}
    </TodoContext.Provider>
    );

}
export{TodoContext, TodoProvider};