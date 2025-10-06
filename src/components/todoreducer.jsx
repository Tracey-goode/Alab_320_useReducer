export function todoReducer(state, action) {
    switch (action.type) {
        case "Add_todo":
            return [
                {
                    id: Date.now(),
                    title: action.title,
                    completed: false,
                },
                ...state,
            ];
        case "Toggle":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "Edit_todo":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, title: action.title } : todo
            );
        case "DeleteTodo":
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}