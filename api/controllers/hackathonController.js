var hackathonService = require('../services/hackathonService')

module.exports = {
    getHackathons: (callback) => {
        hackathonService.getAll(function(res) {
            return callback(res)
        })
    }
}