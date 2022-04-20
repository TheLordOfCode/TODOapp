import React from 'react';
import './CreateTodoButton.css';



function CreateTodoButton(props){

    const onClickButton = () =>{

        props.setOpenModal(true);
        //props.setOpenModal(prevState =>  !prevState);
        !!props.openModal &&  props.setOpenModal(false);
       
    }

    return(
        <button  className="CreateTodoButton" 
                onClick={onClickButton}>
            +
        </button>
    );
}

export { CreateTodoButton };