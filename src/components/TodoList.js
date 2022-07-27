import React from "react";

function TodoList({todoList, deleteTodo}){

    const listItem = todoList.map(
        (item)=> 
        <li key={item.id}>{item.description} 
        <button onClick={()=> deleteTodo(item.id)}>DELETE</button></li> 
    )
    return (
        <div>
            {listItem}
        </div>
    )
}

export default TodoList