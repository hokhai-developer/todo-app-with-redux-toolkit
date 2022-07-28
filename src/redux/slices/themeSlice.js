import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: 'light',
        themList: ['light', 'dark'],
    },
    reducers: {
        set: (state, actions) => {
            state.currentTheme = state.themList[actions.payload.index];
            return state;
        },
    },
});

export default themeSlice;
