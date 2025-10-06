export function todoReducer(state, action){
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
        case "Toggle_todo":
            return state.map((todo) => 
                todo.id === action.id ? { ...todo })
    }
    return state;
}