var hackathonService = require('../services/hackathonService')

module.exports = {
    getHackathons: (callback) => {
        hackathonService.getAll(function(res) {
            return callback(res)
        })
    },

    getHackathonByName: (name, callback) => {
        hackathonService.getAll(function(res) {
            // TODO: Change to foreach loop.
            for (i = 0 ; i < res.length ; i++) {
                if (res[i].name === name) return callback(res[i])
            }
            return callback("ERROR, HACKATHON DOES NOT EXIST YET :(")
        })
    },

    getHackathonByHost: (host, callback) => {
        hackathonService.getAll(function(res) {
            // TODO: Change to foreach loop.
            for (i = 0 ; i < res.length ; i++) {
                if (res[i].host === host) return callback(res[i])
            }
            return callback("ERROR, THIS HOST DOES NOT EXIST YET :(")
        })
    } 
}