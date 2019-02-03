var hackathonService = require('../services/hackathonService')

module.exports = {
    getHackathons: (callback) => {
        hackathonService.getAll(function(res) {
            return callback(res)
        })
    },

    getHackathonByName: (req, callback) => {
        hackathonService.getHackathonByName(req.params.name, function(res) {
            return callback(res)
        })
    },

    getHackathonByHost: (req, callback) => {
        hackathonService.getHackathonByHost(req.params.host, function(res) {
            return callback(res)
        })
    },

    createHackathon: (req, callback) => {
        var newHackathon = {
            name : req.query.name.toLowerCase(),
            host : req.query.host.toLowerCase(), 
            review : req.query.review, 
            rating : req.query.rating
        }
        hackathonService.createHackathon(newHackathon, function(err, res) {
            return callback(res)
        })
    },

    deleteHackathon: (req, callback) => {
        var hackathon = { name: req.params.name.toLowerCase() };
        hackathonService.deleteHackathon(hackathon, function(err, res) {
            return callback(res)
        })
    }
}