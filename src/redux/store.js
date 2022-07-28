import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '~/redux/slices/themeSlice';

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    },
});

export default store;
