import { createSelector } from '@reduxjs/toolkit';

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, search, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'all') {
                return priorities.length === 0
                    ? todo.search.includes(search)
                    : todo.search.includes(search) && priorities.some((priority) => priority.value === todo.priority);
            } else if (status === 'completed') {
                if (todo.completed) {
                    return priorities.length === 0
                        ? todo.search.includes(search)
                        : todo.search.includes(search) &&
                              priorities.some((priority) => priority.value === todo.priority);
                }
            } else {
                if (!todo.completed) {
                    return priorities.length === 0
                        ? todo.search.includes(search)
                        : todo.search.includes(search) &&
                              priorities.some((priority) => priority.value === todo.priority);
                }
            }
        });
    },
);
