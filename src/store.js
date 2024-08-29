import { createStore } from 'redux';
import notes from './notesData';

const notesReducer = (state = notes, action) => {
    switch (action.type) {
        case 'completed':
            return state.completed === false ? true : false;
        case 'addNote':
            return [...state, action.payload];
        default:
            return state;
    }
}

export const store = createStore(notesReducer);

export const addNote = (text) => {
    return {
        type: 'addNote',
        payload: text
    }
}