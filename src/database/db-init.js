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
        username VARCHAR(20) NOT NULL UNIQUE,
        email VARCHAR(320) NOT NULL UNIQUE,
        emailValidated BOOL DEFAULT false,
        password VARCHAR(128) NOT NULL,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        postal_code VARCHAR(20),
        profile_img VARCHAR(255),
        bio_summary VARCHAR(255),
        is_deleted BOOL DEFAULT false,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`);

await pool.query(`
    CREATE TABLE validation_codes(
        id CHAR(36) PRIMARY KEY,
        user_id CHAR(36) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        code CHAR(8) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`);

await pool.query(`
    CREATE TABLE category(
        id INT AUTO_INCREMENT PRIMARY KEY,
        category_name VARCHAR(150) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`);

await pool.query(`
    CREATE TABLE items(
        id CHAR(36) PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        description TEXT NOT NULL,
        estimated_price DECIMAL,
        item_condition ENUM('not_used', 'good', 'ok','damaged','malfunctioning') NOT NULL,
        status ENUM('available', 'sold', 'reserved') NOT NULL,
        category_id INT NOT NULL,
        is_deleted BOOL DEFAULT false,
        FOREIGN KEY (category_id) REFERENCES category(id),
        userid CHAR(36) NOT NULL,
        FOREIGN KEY (userid) REFERENCES users(id),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`);

    await pool.query(`
    CREATE TABLE deals(
        id CHAR(36) PRIMARY KEY,
        buyer_id CHAR(36) NOT NULL,
        FOREIGN KEY (buyer_id) REFERENCES users(id),
        seller_id CHAR(36) NOT NULL,
        FOREIGN KEY (seller_id) REFERENCES users(id),
        status ENUM('pending', 'accepted', 'rejected') NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`);

    await pool.query(`
    CREATE TABLE deal_items(
        id CHAR(36) PRIMARY KEY,
        deal_id CHAR(36) NOT NULL,
        FOREIGN KEY (deal_id) REFERENCES deals(id),
        item_id CHAR(36) NOT NULL,
        FOREIGN KEY (item_id) REFERENCES items(id),
        owner_id CHAR(36) NOT NULL,
        FOREIGN KEY (owner_id) REFERENCES users(id),
        type ENUM('offered', 'requested') NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`);

    await pool.query(`
    CREATE TABLE deals_exchange_conditions(
        id CHAR(36) PRIMARY KEY,
        deal_id CHAR(36) NOT NULL,
        FOREIGN KEY (deal_id) REFERENCES deals(id),
        street VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        postal_code VARCHAR(20) NOT NULL,
        exchange_date_time TIMESTAMP NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`);

    await pool.query(`
    CREATE TABLE deals_ratings(
        id CHAR(36) PRIMARY KEY,
        deal_id CHAR(36) NOT NULL,
        FOREIGN KEY (deal_id) REFERENCES deals(id),
        userid CHAR(36) NOT NULL,
        FOREIGN KEY (userid) REFERENCES users(id),
        rating DECIMAL CHECK (rating >= 1 AND rating <= 5) NOT NULL, 
        comment VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`);


// Insert mock data into the users table
    await pool.query(`
    INSERT INTO users(id, username, email, emailValidated, password, first_name, last_name, postal_code, profile_img, bio_summary, is_deleted) 
        VALUES 
        ('d84f709f-4dd1-4785-8a1c-14f62735df0b', 'user1', 'user1@example.com', false, 'password123', 'User', 'One', '12345', '/img/user1.jpg', 'Hello, I am User One!', false),
        ('f2e1afd4-c264-4126-80bf-f6731e826121', 'user2', 'user2@example.com', false, 'password123', 'User', 'Two', '23456', '/img/user2.jpg', 'Hello, I am User Two!', false),
        ('3633a9e4-1e59-4af5-9cf7-9abfa03cea1b', 'user3', 'user3@example.com', false, 'password123', 'User', 'Three', '34567', '/img/user3.jpg', 'Hello, I am User Three!', false),
        ('0e0d2925-e34f-491d-bced-2afbdc24fd53', 'user4', 'user4@example.com', false, 'password123', 'User', 'Four', '45678', '/img/user4.jpg', 'Hello, I am User Four!', false),
        ('dcbc0d07-1889-46d5-a44f-89e6df34dc0b', 'user5', 'user5@example.com', false, 'password123', 'User', 'Five', '56789', '/img/user5.jpg', 'Hello, I am User Five!', false),
        ('06d27949-94fe-4cc1-b7fe-764d68baa0b5', 'user6', 'user6@example.com', false, 'password123', 'User', 'six', '99999', '/img/user20.jpg', 'Hello, I am User six!', false);

    `);


// Insert mock data into the category table
    await pool.query(`
    INSERT INTO category(id, category_name) 
        VALUES 
        (1, 'Retro Computers'),
        (2, 'Vintage Consoles'),
        (3, 'Retro Televisions'),
        (4, 'Vintage Audio Equipment'),
        (5, 'Retro Cameras'),
        (6, 'Vintage Mobile Phones'),
        (7, 'Retro Gaming Accessories'),
        (8, 'Vintage Radios'),
        (9, 'Retro Calculators'),
        (10, 'Vintage Watches & Clocks'),
        (11, 'Retro Office Equipment')
        `);



// Insert mock data into the items table
    await pool.query(`
    INSERT INTO items(id, name, description, estimated_price, item_condition, status, category_id, userid) 
        VALUES 
        ('3659f8d9-9c4e-4c6d-9606-30824a2d3b2b', 'Commodore 64', 'A classic home computer from the 1980s.', 200.00, 'good', 'available', 1, 'd84f709f-4dd1-4785-8a1c-14f62735df0b'),
        ('93b79a87-767f-473d-bcfd-2ebf1dace69f', 'Atari 2600', 'One of the first video game consoles.', 150.00, 'good', 'available', 2, 'f2e1afd4-c264-4126-80bf-f6731e826121'),
        ('fc8c0baa-4914-4663-821f-ae0fdd8e1504', 'Sony Trinitron TV', 'A vintage color television.', 75.00, 'ok', 'available', 3, 'd84f709f-4dd1-4785-8a1c-14f62735df0b');
    `);

// Insert mock data into the deal table
    await pool.query(`
    INSERT INTO deals(id, buyer_id, seller_id, status) 
        VALUES 
        ('dfefd715-ceba-4250-8eb3-10cf7d36eb44', 'f2e1afd4-c264-4126-80bf-f6731e826121', 'd84f709f-4dd1-4785-8a1c-14f62735df0b', 'pending');

    `);

// Insert mock data into the deal_items table
    await pool.query(`
    INSERT INTO deal_items(id, deal_id, item_id, owner_id, type) 
        VALUES 
        ('81d42dea-e793-4d14-82ee-42f0e394492d', 'dfefd715-ceba-4250-8eb3-10cf7d36eb44', '93b79a87-767f-473d-bcfd-2ebf1dace69f', 'f2e1afd4-c264-4126-80bf-f6731e826121', 'offered'),
        ('506e1fe7-de08-4445-b5e7-0ec1c78351f6', 'dfefd715-ceba-4250-8eb3-10cf7d36eb44', 'fc8c0baa-4914-4663-821f-ae0fdd8e1504', 'd84f709f-4dd1-4785-8a1c-14f62735df0b', 'requested')
    `);

// Insert mock data into the exchange_conditions table
    await pool.query(`
    INSERT INTO deals_exchange_conditions(id, deal_id, street, city, state, country, postal_code, exchange_date_time) 
        VALUES 
        ('62b22346-4b07-425d-b612-866de42d063a', 'dfefd715-ceba-4250-8eb3-10cf7d36eb44', '123 Main St', 'Anytown', 'Anystate', 'USA', '12345', '2023-06-25 12:00:00');
    `);
   


    await pool.end();
};

initDB();

