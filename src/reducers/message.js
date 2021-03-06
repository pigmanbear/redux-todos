import { TODO_ADD } from './todo'


const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = msg => ({type: MESSAGE_SHOW, payload: msg})

export default(state = '', action) => {

    switch (action.type) {
        case MESSAGE_SHOW:
            return action.payload
        case TODO_ADD:
            return ''
        default:
            return state
    }

}