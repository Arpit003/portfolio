
import { ACTION_TYPES } from './Actions';


const initState = {
    toast : {
        enable  : false,
        message : ""
    }
}

const Reducer = (state = initState, action) => {
    switch (action.type) {

        case ACTION_TYPES.TOAST_MESSAGE_ENABLE:
            return {
                ...state,
                toast : {
                    enable : true,
                    message : action.message
                }
            };

        case ACTION_TYPES.TOAST_MESSAGE_DISABLE:
            return {
                ...state,
                toast : {
                    enable : false,
                    message : ''
                }
            };

        default:
            return state;
    }
    
}

export default Reducer;