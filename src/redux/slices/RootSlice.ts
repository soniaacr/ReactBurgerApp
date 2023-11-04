import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        burger: 'Burger',
        fries: 'Fries',
        drink: 'Drink',
        total: 'Total'
    },
    reducers: {
        chooseBurger: (state, action) => { state.burger = action.payload},
        chooseFries: (state, action) => { state.fries = action.payload},
        chooseDrink: (state, action) => { state.drink = action.payload},
        chooseTotal: (state, action) => { state.total = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseBurger, chooseFries, chooseDrink, chooseTotal } = rootSlice.actions;