var MongoClient = require('mongodb').MongoClient

const URL = 'mongodb://localhost:27017/'
const DATABASE = 'RateMyHackathon'
const COLLECTION = 'hackathon'

var testHackathon = {
    name: "McHacks",
    host: "McGill University",
    review: "It's pretty bad, no food..... :(",
    rating: 1,
}


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
    },

    /** 
     * Query hackathon information by hackathon name. 
     * eg. name: McHacks 
     */
    getHackathonByName: (req, callback) => {
        MongoClient.connect(URL, function(err, db) {
            if (err) throw err
            var dbo = db.db(DATABASE)
            var query = { name : req }
            dbo.collection(COLLECTION).find(query).toArray(function(err, res) {
                if (err) throw err
                db.close()
                return callback(res)
            })
        })
    },

    /**
     * Query hackathon information by hosting organization / school. 
     * eg. host: McGill University
     */
    getHackathonByHost: (req, callback) => {
        MongoClient.connect(URL, function(err, db) {
            if (err) throw err;
            var dbo = db.db(DATABASE)
            var query = { host : req}
            dbo.collection(COLLECTION).find(query).toArray(function(err, res) {
                if (err) throw err
                db.close()
                return callback(res)
            })
        })
    },

    /**
     * Create hackathon. 
     */
    createHackathon: (req, callback) => {
        MongoClient.connect(URL, function(err, db) {
            if (err) throw err
            var dbo = db.db(DATABASE)
            dbo.collection(COLLECTION).insertOne(req, function(err, res) {
                if (err) throw err
                db.close()
                return callback(res)
            })
        })
    },

    /**
     * Insert review to existing hackathon. 
     * TODO: (tiff) add function update overall rating.
     */
    insertReview: (name, req, callback) => {
        MongoClient.connect(URL, function(err, db) {
            if (err) throw err
            var dbo = db.db(DATABASE)
            var query = { name : name }
            var updateQuery = { $push: { reviews: { req } } }
            dbo.collection(COLLECTION)
               .updateOne(query, updateQuery, function(err, res) {
                if (err) throw err
                db.close()
                console.log(res)
                return callback (res)
            })
        })
    },

    /** 
     * Delete hackathon by name. 
     */
    deleteHackathon: (req, callback) => {
        MongoClient.connect(URL, function(err, db) {
            if (err) throw err
            var dbo = db.db(DATABASE)
            dbo.collection(COLLECTION).deleteOne(req, function(err, res) {
                if (err) throw err
                db.close()
                return callback(res)
            })
        })
    }
}
