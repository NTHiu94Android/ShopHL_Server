const userService = require('./userService');

const get_users = async () => {
    try {
        const users = await userService.get_users();
        return users;
    } catch (error) {
        console.log('Error get users: ' + error.message);
    }
};

const get_user = async (_idUser) => {
    try {
        const user = await userService.get_user(_idUser);
        return user;
    } catch (error) {
        console.log('Error get user: ' + error.message);
    }
};
const get_users_by_username = async (username) => {
    try {
        const user = await userService.get_users_by_username(username);
        return user;
    } catch (error) {
        console.log('Error get user by username: ' + error.message);
    }
};
const login = async (email, password) => {
    try {
        const user = await userService.login(email, password);
        if (user) {
            return user;
        }
        return null;
    } catch (error) {
        console.log('Error login: ' + error.message);
    }
};

const register = async (email, password, name, birthday, address, numberPhone, avatar) => {
    try {
        const user = await userService.register(
            email, password, name, birthday, address, numberPhone, avatar
        );
        return user;
    } catch (error) {
        console.log('Error register: ' + error.message);
    }
};

const update_user = async (_idUser, email, password, name, birthday, address, numberPhone, avatar) => {
    try {
        const user = await userService.update_user(
            _idUser, email, password, name, birthday, address, numberPhone, avatar
        );
        return user;
    } catch (error) {
        console.log('Error update_user: ' + error.message);
    }
};

const delete_user = async (_idUser) => {
    try {
        await userService.delete_user(_idUser);
        return 'Delete successfully';
    } catch (error) {
        console.log('Error delete_user: ' + error.message);
    }
};

const forgot_password = async (email) => {
    try {
        const user = await userService.forgot_password(email);
        if (user) {
            return user;
        }
        return null;
    } catch (error) {
        console.log('Error forgot_password: ' + error.message);
    }
};

module.exports = { 
    get_user, get_users, login, register, 
    update_user, delete_user, forgot_password,
    get_users_by_username
}