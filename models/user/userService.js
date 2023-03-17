const user_model = require('./userModel');
const bcrypt = require('bcryptjs');

const get_users = async () => {
    const list_user = await user_model.find({});
    return list_user;
};

const get_users_by_username = async (username) => {
    const user = await user_model.findOne({ email: username });
    return user;
};

const get_user = async (_idIser) => {
    const user = await user_model.findById(_idIser);
    return user;
};
const login = async (email, password) => {
    const user = await user_model.findOne({ email });
    if (user != null && await bcrypt.compare(password, user.password)) {
        //console.log('UserService login: ', user);
        return user;
    }
    return null;
};

const register = async (email, password, name, avatar, address) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user_server = await user_model.findOne({ 'email': email });
    if (user_server != null) {
        return;
    } else {
        if (email == "" || password == "") {
            return;
        } else {
            const user = new user_model({ email, password: hash, name, avatar, address });
            await user.save();
            return user;
        }
    }
};

const update_user = async (_idUser, email, password, name, birthday, address, numberPhone, avatar) => {
    const user = await user_model.findByIdAndUpdate(
        _idUser, { email, password, name, birthday, address, numberPhone, avatar }
    );
    return user;
};

const delete_user = async (_idUser) => {
    await user_model.deleteOne(_idUser);
};

const forgot_password = async (email) => {
    const user = await user_model.findOne({ email });
    if (user) {
        const token = jwt.sign({ user }, 'shhhhh', { expiresIn: '300s' });
        user.accessToken = token;
        await user.save();
        return user;
    }
    return null;
};

module.exports = { 
    get_user, get_users, login, register, 
    update_user, delete_user, forgot_password,
    get_users_by_username 
};