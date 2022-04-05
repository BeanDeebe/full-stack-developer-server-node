const helloController = (app) => {
    app.get('/', (req, res) => {
        res.send('Life is good!')
    });
}
export default helloController;