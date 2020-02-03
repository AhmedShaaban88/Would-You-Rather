const LOAD_ALL_USERS = '[USERS] LOAD_ALL_USERS';

const loadAllUsersSuccessful = (users) => ({
    type: LOAD_ALL_USERS,
    users
});


export {LOAD_ALL_USERS, loadAllUsersSuccessful};