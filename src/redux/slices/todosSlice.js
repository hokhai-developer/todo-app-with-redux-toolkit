import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const dataTodo = localStorage.getItem('todoAppWithReduxToolKit')
    ? JSON.parse(localStorage.getItem('todoAppWithReduxToolKit'))
    : [];

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: dataTodo,
    reducers: {
        addTodo: (state, actions) => {
            state.unshift(actions.payload);
            localStorage.setItem('todoAppWithReduxToolKit', JSON.stringify(state));
        },
        toggleTodoStatus: (state, actions) => {
            const id = actions.payload;
            const currentTodo = state.find((todo) => todo.id === id);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
            localStorage.setItem('todoAppWithReduxToolKit', JSON.stringify(state));
        },

        deleteTodo: (state, actions) => {
            const id = actions.payload;
            const currentIndex = state.findIndex((todo) => todo.id === id);
            if (currentIndex !== -1) {
                state.splice(currentIndex, 1);
                localStorage.setItem('todoAppWithReduxToolKit', JSON.stringify(state));
            }
        },
    },
});
export default todoListSlice;
