const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/socialNetworkDB';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDb!!')
});

module.exports = mongoose.connection;