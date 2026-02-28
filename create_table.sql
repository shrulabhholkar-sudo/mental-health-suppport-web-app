-- SQL script to create contact_messages table in mindcare_db database
-- Run this in phpMyAdmin to create the table if it doesn't exist

CREATE DATABASE IF NOT EXISTS mindcare_db;

USE mindcare_db;

CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
