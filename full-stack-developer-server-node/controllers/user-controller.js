import people from './users/users.js'

let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    console.log(type);
    if (type) {
        res.json(users.filter(function (e) {
            return e.type === type;
        }))
        return
    }
    res.json(users);
}

export default userController;