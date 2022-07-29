import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'all',
        priorities: [],
    },
    reducers: {
        searchChange: (state, actions) => {
            state.search = actions.payload;
        },
        statusChange: (state, actions) => {
            state.status = actions.payload;
        },
        prioritiesChange: (state, actions) => {
            if (state.priorities.length === 0) {
                state.priorities.push(actions.payload);
            } else {
                const index = state.priorities.findIndex((priority) => priority.id === actions.payload.id);
                if (index !== -1) {
                    state.priorities.splice(index, 1);
                } else {
                    state.priorities.push(actions.payload);
                }
            }
        },
        priorityDelete: (state, actions) => {
            const index = state.priorities.findIndex((priority) => priority.id === actions.payload);
            if (index !== -1) {
                state.priorities.splice(index, 1);
            }
        },
    },
});
export default filtersSlice;
