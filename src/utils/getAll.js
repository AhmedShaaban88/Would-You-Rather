import {_getQuestions, _getUsers} from "./_DATA";
export default function getAll() {
    return Promise.all([
        _getQuestions(),
        _getUsers(),
    ]).then(([questions, users]) => ({
        users,
        questions,
    }))
}