import {ADD_GOAL, REMOVE_GOAL, DELETE_ALL} from '../constants/constants';



export const add = (input) => {
    return {
        type: ADD_GOAL,
        goal: input.goal,
        date: input.date,
        id: (Math.random()* (100 - 1) + 1)
    }
}

export const remove = (id) => {
    return {
        type: REMOVE_GOAL,
        id
    }
}

export const deleteAllReminders = () => {
    return {
        type: DELETE_ALL
    }
}