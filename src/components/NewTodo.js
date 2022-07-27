import React, {useState} from "react";
import getNextId from "../getNextId";
function NewTodo({todoList, setTodoList}){

    const [description, setDescription] = useState("")

    function handleOnChange(event){
        setDescription(event.target.value)
    }

    function addNewTodo(event){
        event.preventDefault()
        const todo = {
            id: getNextId(),
            description: description
        }
        const updatedTodoList = [...todoList, todo]
        setTodoList(updatedTodoList)
    }

    return (
        <div>
            <form onSubmit={addNewTodo}>
                <label>Add Todo</label>
                <input type="text"  name="newTodo" value={description} onChange={handleOnChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewTodo