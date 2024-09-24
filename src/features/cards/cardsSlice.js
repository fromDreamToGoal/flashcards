import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;

            state.cards[id] = {
                id,
                front,
                back
            };
        }
    }
});

export const selectCards = (id) => (state) => state.cards.find(card => card.id === id);
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;