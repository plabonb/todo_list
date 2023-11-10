import React, { useState } from "react";
import "./App.css";

import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheck2Circle} from 'react-icons/bs';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] =useState (false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");


const handleAddTodo = ()=>{
  let newTodoItem = {
    title:newTitle,
    Description:newDescription
  }

  let updatedTodoArr = [ ...allTodos];
}




  return (
    <div className="App">
      <h1>My ToDos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="What's the task title?" />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="What's the task description?" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`isCompleteScreen ${
              isCompleteScreen === false && `active`
            }`}
            onClick={() => setIsCompleteScreen(false)}
          >
            To-Do
          </button>
          <button
            className={`isCompleteScreen ${
              isCompleteScreen === true && `active`
            }`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          <div className="todo-list-item">
            <div>
            <h3>task 1</h3>
            <p>Discription</p>
            </div>
            <div>
              <AiOutlineDelete className="icon"/>
              <BsCheck2Circle className="check-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
