import people from './users/users.js'

let users = people;

const usersController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updatedUser = req.body;
    users = users.map(usr =>
        usr._id === userId ?
            updatedUser :
            usr);
    res.sendStatus(200);
}


const deleteUser = (req, res) => {
    const userId = req.params.uid;
    users = users.filter(e => e._id !== userId);
    res.sendStatus(200);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
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

export default usersController;