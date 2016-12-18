import { ADD } from '../actions/constants';
import defaultStore from '../model/initialState';

function history(state = [], action) {
    switch (action.type) {
        case ADD:
            return [...state, action.value];
    }
    return state;
}

export default history;