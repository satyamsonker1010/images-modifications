const dotenv = require('dotenv');

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 3501;


module.exports = {
    SERVER_PORT
}