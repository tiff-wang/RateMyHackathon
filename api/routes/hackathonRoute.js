var hackathonController = require('../controllers/hackathonController')

module.exports = function(app) {

    app.get('/hackathon', (req, res) => {
        hackathonController.getHackathons(function(result) {
            res.status(200).send(result)
        })
    })

    app.post('/create')

    app.get('/hackathon/:id', (req, res) => {
        name = req.params.id
        hackathonController.getHackathonByName(name, function(result) {
            res.status(200).send(result)
        })
    })

    app.get('/hackathon/host/:id', (req, res) => {
        host = req.params.id
        hackathonController.getHackathonByName(host, function(result) {
            res.status(200).send(result)
        })
    })
}