import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Astana2028',
    database: 'gift_campaign'
});

connection.connect((err: mysql.MysqlError) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

export default connection;


