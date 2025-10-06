import { useState } from 'react'
import '../App.css'

export default function TodoItem({ todo, dispatch }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.title);

    const handleSave = () => {
        dispatch({ type: "Edit", id: todo.id, title: editText });
        setIsEditing(false);
    };

    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <div className="left">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch({ type: "Toggle", id: todo.id })} />
                {isEditing ? (
                    <input
                        className="edit-input"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)} /> 
                ) : (
                    <span>{todo.title}</span>
                )}
            </div>
            <div className="buttons">
                {isEditing ? (
                    <button className="save" onClick={handleSave}>
                        Save
                    </button>
                ) : (
                    
                )
                )}

            </div>
        </li>
    )
}