module.exports = function(app) {

    app.get('/hackathon', (req, res) => {
        res.status(200).send('hackathon routes')
    })

    app.get('/hackathon/:id', (req, res) => {
        res.status(200).send(req.params.id)
    })
}