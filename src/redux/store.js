import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './slices/filtersSlice';
import todoListSlice from './slices/todosSlice';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
    },
});
export default store;
