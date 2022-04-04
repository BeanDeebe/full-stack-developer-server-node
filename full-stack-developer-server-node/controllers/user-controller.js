import people from './users/users.js'

let users = people;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
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