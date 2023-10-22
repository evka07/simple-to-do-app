import {createStore} from 'redux';
import initialState from './initialState';
import shortid from "shortid";
import column from "../components/Column/Column.jsx";
import {strContains} from "../utils/strContains.js";
import searchForm from "../components/SearchForm/SearchForm.jsx";
import {useSelector} from "react-redux";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return {
                ...state,
                columns: [
                    ...state.columns,
                    {
                        ...action.payload,
                        id: shortid(),
                        cards: [],
                    }
                ]
            };
        case 'ADD_CARD':
            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        id: shortid(),
                        columnId: action.columnId,
                        title: action.title,
                    },
                ],
            };

        case 'ADD_LIST':
            return {
                ...state,
                lists: [
                    ...state.lists,
                    {
                        id: shortid(),
                        title: action.payload.title,
                        description: action.payload.description
                    }
                ]
            }
        case 'UPDATE_SEARCHSTRING':

            return { ...state, searchString: action.payload };
        default:
            return state;
    }
};

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = (columnId, title) => ({type: 'ADD_CARD', columnId, title,})

export const getListById = (state, listId) => state.lists.find(list => list.id === listId)

export const getColumnByList = (state, listId) => state.columns.filter(column => column.listId === listId)

export const getAllLists = state => state.lists

export const addList = (payload) => ({type: 'ADD_LIST', payload})

export const updateSearch = (searchString) => ({
    type:'UPDATE_SEARCHSTRING',
    payload: searchString
})

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
