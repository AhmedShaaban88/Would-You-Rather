const SET_USER = '[LOGIN] SET_USER';
const LOGOUT_USER = '[LOGIN] LOGOUT_USER';
const USER_ANSWER_QUESTION = '[USERS] USER_ANSWER_QUESTION';
const USER_ADDED_QUESTION  = '[USERS] USER_ADDED_QUESTION';
const login = (user) => ({
    type: SET_USER,
    user: user

});
const logout = () => ({
    type: LOGOUT_USER,
    user: ""
});
const saveUserAnswer =  (qid, option) => ({
    type: USER_ANSWER_QUESTION,
    qid,
    option
});

const saveUserQuestion = (qid) => ({
   type: USER_ADDED_QUESTION,
   qid
});



export {login, logout, saveUserAnswer, saveUserQuestion, SET_USER, LOGOUT_USER, USER_ANSWER_QUESTION, USER_ADDED_QUESTION};

