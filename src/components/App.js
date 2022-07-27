import React, {useState} from 'react';
import logo from '../logo.svg';
import './App.css';
import NewTodo from './NewTodo';
import todo, {name} from "../todos";
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = useState(todo)
  function deleteTodo(id){
    const updatedTodoList = todoList.filter((item)=> item.id !== id);
    setTodoList(updatedTodoList)
  }


  return (
    <div>
      <NewTodo  todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} deleteTodo={deleteTodo}/>
    </div>
  );
}
export default App;
