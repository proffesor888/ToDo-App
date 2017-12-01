import {ADD_GOAL, REMOVE_GOAL, DELETE_ALL} from '../constants/constants'
import {read_cookie, bake_cookie} from 'sfcookies'

const removingReminder = (state=[], id) => {
    let reminderMas = state.filter((item) => item.id!== id);
    bake_cookie('reminders', reminderMas);
    return reminderMas; 
}

export const goalMas = (state=[], action) => {
    let reminder = null;
    state = read_cookie('reminders');
    switch(action.type) {
        case ADD_GOAL:
                reminder = [...state, goalObj({}, action)];
                bake_cookie('reminders', reminder);
                return reminder;
        case REMOVE_GOAL:
            return (
                removingReminder(state,action.id)            
            )
        case DELETE_ALL:
            reminder = [];
            bake_cookie('reminders', reminder);
            return reminder;
        default: return state;
    }
}

export const goalObj = (state={}, action) => {
    switch(action.type) {
        case ADD_GOAL:
            return {
                goal: action.goal,
                id: action.id,
                date: action.date
            }
        default: return state;
    }
}