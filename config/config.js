const config = {
    database: {
        url: 'mongodb+srv://<username>:<password>@cluster0.avxlk.mongodb.net/<dbname>?retryWrites=true&w=majority',
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
        dbName: process.env.MONGO_DBNAME
    }
}

module.exports = config