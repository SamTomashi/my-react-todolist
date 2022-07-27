import React, {useState} from "react";

function TodoList({todoList, deleteTodo}){
    // const [description, updateDescription] = useState()

    function updateDescription(event){
        const description = event.target.value;
        const foundList = todoList.filter((item)=> item.id == event.target.id);
        foundList[0]['description'] = description;

        todoList = [...foundList];
    }

    console.log(todoList);

    const listItem = todoList.map(
        (item)=> 
        <li key={item.id}>
            <input id={item.id} type="text" className="m-2 " onChange={updateDescription} value={item.description} ></input>
            <button className="btn btn-sm btn-primary m-2" onClick={()=> deleteTodo(item.id)}>DELETE</button>
        </li> 
    )
    return (
        <ol>
            {listItem}
        </ol>
    )
}

export default TodoList