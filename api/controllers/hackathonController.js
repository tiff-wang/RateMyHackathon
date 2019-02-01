var hackathonService = require('../services/hackathonService')

module.exports = {
    getHackathons: (callback) => {
        hackathonService.getAll(function(res) {
            return callback(res)
        })
    },

    getHackathonByName: (req, callback) => {
        hackathonService.getAll(function(res) {
            // TODO: Change to foreach loop.
            var name = req.param.name
            for (i = 0 ; i < res.length ; i++) {
                if (res[i].name === name) return callback(res[i])
            }
            return callback("ERROR, HACKATHON DOES NOT EXIST YET :(")
        })
    },

    getHackathonByHost: (req, callback) => {
        hackathonService.getAll(function(res) {
            // TODO: Change to foreach loop.
            var host = req.params.host
            for (i = 0 ; i < res.length ; i++) {
                if (res[i].host === req) return callback(res[i])
            }
            return callback("ERROR, THIS HOST DOES NOT EXIST YET :(")
        })
    },

    createHackathon: (req, callback) => {
        var newHackathon = {
            name : req.query.name,
            host : req.query.host, 
            review : req.query.host, 
            rating : req.query.rating
        }
        hackathonService.createHackathon(newHackathon, function(err, res) {
            return callback(res)
        })
    },

    addHackathonReview: (req, callback) => {

    },

    deleteHackathon: (req, callback) => {
        var hackathon = { name: req.params.name };
        hackathonService.deleteHackathon(hackathon, function(err, res) {
            return callback(res)
        })
    }
}