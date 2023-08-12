import { createSlice } from '@reduxjs/toolkit';

import initial from './initial';

export const generalSlice = createSlice({
    name: initial.general.name,
    initialState: initial.general.state,
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        updateCategoryName: (state, action) => {
            const categoryIndex = state.categories.findIndex(
                category => category.id === action.payload.id,
            );
            state.categories[categoryIndex].name = action.payload.name;
        },
        updateFieldName: (state, action) => {
            const categoryIndex = state.categories.findIndex(
                category => category.id === action.payload.categoryId,
            );
            const fieldIndex = state.categories[categoryIndex].fields.findIndex(
                field => field.id === action.payload.fieldId,
            );

            state.categories[categoryIndex].fields[fieldIndex].name =
                action.payload.value;
        }
    },
});
export const { addCategory, updateCategoryName, updateFieldName } = generalSlice.actions;
export default generalSlice.reducer;
