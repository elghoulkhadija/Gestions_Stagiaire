import {configureStore} from '@reduxjs/toolkit';
import stagiaireReducer from "./Redux/reducer";
export const store=configureStore({
    reducer:{
        stagiaires: stagiaireReducer
    }
});