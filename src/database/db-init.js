require("dotenv").config();
const { createPool } = require("./mysql-connection.js");

const DATABASE_NAME = process.env.MYSQL_DATABASE;

const initDB = async () => {
    const pool = createPool();
    await pool.query(`DROP DATABASE IF EXISTS  ${DATABASE_NAME}`);
    await pool.query(`CREATE DATABASE ${DATABASE_NAME} ` );
    await pool.query(`USE ${DATABASE_NAME} `);

    await pool.query(`
    CREATE TABLE users(
        id CHAR(36) PRIMARY KEY,
        username VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        password VARCHAR(150) NOT NULL,
        location VARCHAR(150) NOT NULL,
        first_name VARCHAR(150) NOT NULL,
        last_name VARCHAR(150) NOT NULL,
        bio_summary VARCHAR(150) NOT NULL,
        profile_img VARCHAR(150) NOT NULL,
        acceptedTOS BOOL NOT NULL,
        emailValidated BOOL NOT NULL DEFAULT false,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

    await pool.query(`
    CREATE TABLE items(
        id CHAR(36) PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        description TEXT(3072) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_id CHAR(3) NOT NULL,
        price FLOAT (9,2),
        userid CHAR(36) NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id)
    )`);

    await pool.query(`
    CREATE TABLE category(
        id CHAR(36) PRIMARY KEY,
        category_name VARCHAR(150) NOT NULL,
    )`);

    await pool.query(`
    CREATE TABLE condition(
        id CHAR(36) PRIMARY KEY,
        condition_name VARCHAR(150) NOT NULL,
    )`);


    await pool.query(`
    CREATE TABLE item_status(
        id CHAR(36) PRIMARY KEY,
        status_name VARCHAR(150) NOT NULL,
    )`);

    await pool.query(`
    CREATE TABLE validation_codes(
        id CHAR(36) PRIMARY KEY,
        code CHAR(8) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        userid CHAR(36) NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(id)
    )`);


    await pool.execute(`
    INSERT INTO users(id, username, email, password, location, first_name, last_name, bio_summary, acceptedTOS, emailValidated) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)`,
    ["c7a19ef8-ef0a-4e11-b325-02f7d1facf9f", "Troco Mocho", "troco@troco.com", "trocopassword","galicia", "mocho", "pocho", "trocolo mocolo por la vida", true, true]
);   


    await pool.end();
};

initDB();


