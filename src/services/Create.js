const Connection = require('../database/Connection')

module.exports = async (username,password) => {
    try {
        const query = `INSERT INTO ` + 
                        `accounts ` +
                    `VALUES ` +
                        `(null, '${username}', '${password}', '0')` 

        await Connection(query)

        return true
    } catch (err) {
        return false
    }
}