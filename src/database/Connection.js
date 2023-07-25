const mysql = require('mysql')

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "nodejs-mysql",
} 

const connection = mysql.createPool(dbConfig)

module.exports = (query) => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, sql) => {
            if(err){
                reject(err)
            } else {
                sql.query(query, (err, results) => {
                    if(err) {
                        console.log("Query error: ", err);
                        reject(err)
                    } else {
                        resolve(results)
                    }

                    sql.release()
                })
            }
        })
    })
}