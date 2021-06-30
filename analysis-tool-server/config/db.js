const { connect, connection } = require('mongoose');

module.exports = () => {
    const host = process.env.MONGO_HOST;
    const database = process.env.MONGO_DATABASE;
    const port = process.env.MONGO_PORT;
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;

    const url = 'mongodb://${username}:${password}@${host}:${port}/${database}'

    connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        "auth": { "authSource": "admin" }
    })
        .then(() => {
            console.log('Connection to MongoDB successful');
        })
        .catch(error => console.error(error.message));

    connection.on('connected', () => {
        console.log('Mongoose connected to DB');
    })

    connection.on('error', (error) => {
        console.error(error.message);
    })

    connection.on('disconnected', () => {
        console.log('Mongoose Disconnected');
    })
}