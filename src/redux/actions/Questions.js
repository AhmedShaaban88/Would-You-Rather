import {_saveQuestion, _saveQuestionAnswer} from "../../utils/_DATA";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {loadAllUsersSuccessful} from "./Users";
import {saveUserAnswer, saveUserQuestion} from "./AuthUser";
import getAll from "../../utils/getAll";

const LOAD_ALL_QUESTIONS = '[HOME] LOAD_ALL_QUESTIONS';
const SAVE_QUESTION_ANSWER = '[HOME] SAVE_QUESTION_ANSWER';
const SAVE_QUESTION = '[HOME] SAVE_QUESTION';


const loadAllQuestions_users = () => (dispatch) => {
    return getAll().then(({questions, users}) =>{
        dispatch(showLoading());
        dispatch(loadAllQuestionsSuccessful(questions));
        dispatch(loadAllUsersSuccessful(users));
        dispatch(hideLoading());

    });
};
const loadAllQuestionsSuccessful = (questions) => ({
    type: LOAD_ALL_QUESTIONS,
    questions
});


const saveQuestionAnswer = (user, questionID, answer) => ({
    type: SAVE_QUESTION_ANSWER,
    user,
    questionID,
    answer
});

const userAnswer =  (qid, option) => {
    return (dispatch, getState) => {
        const { authUser } = getState();
        const info = {
            authedUser: authUser.id,
            qid,
            answer: option
        };
        _saveQuestionAnswer(info)
            .then(() => {
                dispatch(saveQuestionAnswer(authUser.id, qid, option));
                dispatch(saveUserAnswer(qid, option));
            })
    }
};

const saveQuestion = (question) => ({
    type: SAVE_QUESTION,
    question
});

const userNewQuestion =  (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { authUser } = getState();
        const question = {
            author: authUser.id,
            optionOneText,
            optionTwoText
        };
        _saveQuestion(question)
            .then((_question) => {
                dispatch(saveQuestion(_question));
                dispatch(saveUserQuestion(_question.id));
            })
    }
};
export {loadAllQuestions_users, userAnswer ,userNewQuestion, LOAD_ALL_QUESTIONS, SAVE_QUESTION_ANSWER, SAVE_QUESTION};