import {LOGOUT_USER, SET_USER, USER_ADDED_QUESTION, USER_ANSWER_QUESTION} from "../actions/AuthUser";


export default function userReducer(state="", action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case LOGOUT_USER:
            return action.user;
        case USER_ANSWER_QUESTION:
            return {
                ...state,
                    answers: {
                        ...state.answers,
                        [action.qid]: action.option
                    }

            };
        case USER_ADDED_QUESTION:
            return {
                ...state,
                questions: state.questions.concat([action.qid])

            };
        default:
            return state
    }
}