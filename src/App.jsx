import { useReducer, useState } from 'react'
import { todoReducer } from './components/todoreducer'
import initialState from './data/initialState'
import './App.css';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    dispatch({ type: "Add_todo", title: newTodo });
    setNewTodo("");
  };

  return (
    <div className="container">
      <h1 className="title"> Todo List </h1>
      <form onSubmit={handleAdd} className="todo-form">
        <input
          type="Text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} placeholder="Add New!" className="input" />
        <button>
        
        </button>
      </form>
    </div>
  )
}

export default App
