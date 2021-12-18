import React from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm'
import {RiClosecircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Todo({ todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null, 
        value: ''
    });


    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit ({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <TodoForm edit={edit} onsubmit={submitUpdate}/>;
         
    }


    return todos.map((todo, index) =>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
         key={index}
         >
             <div key={todo.id} onclick={() => completeTodo(todo.id)}>
                 {todo.text}
             </div>
             <div className="icons">
                 <RiClosecircleLine 
                 onclick={() => remove(todo.id)}
                 className='delete-icon'    
                 />
                 <TiEdit onclick={() => setEdit({id: todo.id, value: todo.text})}
                 className='edit-icon'/>
             </div>

        </div>

    ))
}

export default Todo
