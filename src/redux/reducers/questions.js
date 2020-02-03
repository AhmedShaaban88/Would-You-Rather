import {
    LOAD_ALL_QUESTIONS,
    SAVE_QUESTION_ANSWER,
    SAVE_QUESTION
} from '../actions/Questions';

export default function questionsReducer(state={}, action) {
    switch (action.type) {
        case LOAD_ALL_QUESTIONS:
            return {
                ...state,
                 ...action.questions
            };
        case SAVE_QUESTION_ANSWER:
            const { user, questionID, answer } = action;
            return {
                ...state,
                [questionID]: {
                    ...state[questionID],
                    [answer]: {
                        ...state[questionID][answer],
                        votes: state[questionID][answer].votes.concat([user])
                    }
                }
            };
        case SAVE_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id]: {
                    ...question,
                }
            };
        default:
            return state
    }
}