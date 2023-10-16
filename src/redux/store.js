import {createStore} from 'redux';
import initialState from './initialState';
import shortid from "shortid";
import column from "../components/Column/Column.jsx";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return {
                ...state,
                columns: [
                    ...state.columns,
                    {
                        ...action.newColumn,
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
                        title: action.cardTitle,
                    },
                ],
            };
        default:
            return state;
    }
};




const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
