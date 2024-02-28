import mysql from "mysql2"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'adityaisop18@183',
    database: 'social_nest'
})