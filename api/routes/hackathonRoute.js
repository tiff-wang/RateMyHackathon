var hackathonController = require('../controllers/hackathonController')

module.exports = function(app) {
    app.get('/hackathon', (req, res) => {
        hackathonController.getHackathons(function(result) {
            res.status(200).send(result)
        })
    })

    app.get('/hackathon/:name', (req, res) => {
        hackathonController.getHackathonByName(req, function(result) {
            res.status(200).send(result)
        })
    })

    app.get('/hackathon/host/:host', (req, res) => {
        hackathonController.getHackathonByHost(req, function(result) {
            res.status(200).send(result)
        })
    })

    app.post('/hackathon', function(req, res) {
        hackathonController.insertReview(req, function(result) {
            res.status(200).send('review saved created')
        })
    })

    app.delete('/hackathon/:name', function (req, res) { 
        hackathonController.deleteHackathon(req, function() { 
            res.status(200).send(req.params.name + ' deleted')
        })
    })
}