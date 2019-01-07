var MongoClient = require('mongodb').MongoClient

const URL = 'mongodb://localhost:27017/'
const DATABASE = 'RateMyHackathon'
const COLLECTION = 'hackathon'

module.exports = {
    /** 
     * Get all Hackathons information.
     */
    getAll: (callback) => {
        MongoClient.connect(URL, function(err, db) {
            if (err) throw err
            
            var dbo = db.db(DATABASE)
            dbo.collection(COLLECTION).find({}).toArray(function(err, res) {
              if (err) throw err
              db.close()
              return callback(res)
            })
        })  
    }
}

