var hackathonController = require('../controllers/hackathonController')

module.exports = function(app) {

    app.get('/hackathon', (req, res) => {
        hackathonController.getHackathons(function(result) {
            res.status(200).send(result)
        })
    })

    app.get('/hackathon/:id', (req, res) => {
        res.status(200).send(req.params.id)
    })

}