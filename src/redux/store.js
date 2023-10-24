
// import shortid from "shortid";
// import {strContains} from "../utils/strContains.js";
// import initialState from "./initialState.js";
// import {createStore} from "redux";

//
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_COLUMN':
//             return {
//                 ...state,
//                 columns: [
//                     ...state.columns,
//                     {
//                         ...action.payload,
//                         id: shortid(),
//                         cards: [],
//                     }
//                 ]
//             };
//         case 'ADD_CARD':
//             return {
//                 ...state,
//                 cards: [
//                     ...state.cards,
//                     {
//                         id: shortid(),
//                         columnId: action.columnId,
//                         title: action.title,
//                     },
//                 ],
//             };
//
//         case 'ADD_LIST':
//             return {
//                 ...state,
//                 lists: [
//                     ...state.lists,
//                     {
//                         id: shortid(),
//                         title: action.payload.title,
//                         description: action.payload.description
//                     }
//                 ]
//             }
//
//         case 'TOGGLE_FAVORITE':
//             return {
//                 ...state,
//                 cards: state.cards.map((card) =>
//                     card.id === action.payload
//                         ? { ...card, isFavorite: !card.isFavorite }
//                         : card
//                 ),
//             };
//
//         case 'UPDATE_SEARCHSTRING':
//
//             return {...state, searchString: action.payload};
//         default:
//             return state;
//     }
// };
//
// export const getFilteredCards = ({cards, searchString}, columnId) => cards
//     .filter(card => card.columnId === columnId && strContains(card.title, searchString));
//
// export const getAllColumns = (state) => state.columns
//
// export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
//
// export const addCard = (columnId, title) => ({type: 'ADD_CARD', columnId, title,})
//
// export const getListById = (state, listId) => state.lists.find(list => list.id === listId)
//
// export const getColumnByList = (state, listId) => state.columns.filter(column => column.listId === listId)
//
// export const getAllLists = state => state.lists
//
// export const addList = (payload) => ({type: 'ADD_LIST', payload})
//
// export const getFavorite = (state) => state.cards.filter((card) => card.isFavorite)
//
// export const toggleFavorite = (cardId) => ({
//     type: 'TOGGLE_FAVORITE',
//     payload: cardId
// })
//
// export const updateSearch = (searchString) => ({
//     type: 'UPDATE_SEARCHSTRING',
//     payload: searchString
// })
//
// const store = createStore(
//     reducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//
// export default store;


import shortid from "shortid";
import { strContains } from "../utils/strContains.js";
import initialState from "./initialState.js";
import { createStore } from "redux";

const listReducer = (statePart = [], action) => {
    switch (action.type) {
        case "ADD_LIST":
            return [...statePart, { ...action.payload, id: shortid() }];
        default:
            return statePart;
    }
};

const columnReducer = (statePart = [], action) => {
    switch (action.type) {
        case "ADD_COLUMN":
            return [
                ...statePart,
                {
                    ...action.payload,
                    id: shortid(),
                    cards: []
                }
            ];
        default:
            return statePart;
    }
};

const cardReducer = (statePart = [], action) => {
    switch (action.type) {
        case "ADD_CARD":
            return [
                ...statePart,
                {
                    id: shortid(),
                    columnId: action.columnId,
                    title: action.title
                }
            ];
        case "TOGGLE_FAVORITE":
            return statePart.map((card) =>
                card.id === action.payload
                    ? { ...card, isFavorite: !card.isFavorite }
                    : card
            );
        case 'REMOVE_CARD' :
            return statePart.filter((card) => card.id !== action.payload)
        default:
            return statePart;
    }
};


const searchStringReducer = (statePart = "", action) => {
    switch (action.type) {
        case "UPDATE_SEARCHSTRING":
            return action.payload;
        default:
            return statePart;
    }
};

const reducer = (state, action) => {
    const newState = {
        lists: listReducer(state.lists, action),
        columns: columnReducer(state.columns, action),
        cards: cardReducer(state.cards, action),
        searchString: searchStringReducer(state.searchString, action)
    };

    return newState;
};

export const getFilteredCards = ({ cards, searchString }, columnId) =>
    cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;

export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });

export const addCard = (columnId, title) => ({ type: "ADD_CARD", columnId, title });

export const getListById = (state, listId) => state.lists.find((list) => list.id === listId);

export const getColumnByList = (state, listId) => state.columns.filter((column) => column.listId === listId);

export const getAllLists = (state) => state.lists;

export const addList = (payload) => ({ type: "ADD_LIST", payload });

export const getFavorite = (state) => state.cards.filter((card) => card.isFavorite);

export const removeCard = (cardId) => ({
    type: 'REMOVE_CARD',
    payload: cardId
})

export const toggleFavorite = (cardId) => ({
    type: "TOGGLE_FAVORITE",
    payload: cardId
});

export const updateSearch = (searchString) => ({
    type: "UPDATE_SEARCHSTRING",
    payload: searchString
});

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

