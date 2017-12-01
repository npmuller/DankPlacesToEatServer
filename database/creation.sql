-- drop database dank;
create database if not exists dank;
use dank;

create table if not exists foreign_host (
    id INT NOT NULL AUTO_INCREMENT,
    dsc VARCHAR(60) NOT NULL,
    last_updated_ts DATETIME NOT NULL,
    PRIMARY KEY (id)
);

create table if not exists foreign_host_access_key (
    id INT NOT NULL AUTO_INCREMENT,
    foreign_host_id INT NOT NULL,
    encrypted_foreign_host_access_key VARCHAR(255) NOT NULL,
    key_expiration_ts DATETIME NULL,
    user_id INT NOT NULL,
    last_updated_ts DATETIME NOT NULL,
    PRIMARY KEY (id)
);

create table if not exists media (
    id INT NOT NULL AUTO_INCREMENT,
    uri TEXT(500) NOT NULL,
    foreign_host_id INT NOT NULL,
    last_updated_ts DATETIME NOT NULL,
    PRIMARY KEY (id)
);

create table if not exists restaurant (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    website VARCHAR(255) NULL,
    phone_number VARCHAR(14) NULL,
    address VARCHAR(120) NOT NULL,
    active TINYINT NOT NULL,
    added_by_user_id INT NULL,
    restaurant_price_level_id INT NULL,
    average_rating FLOAT NULL,
    hours VARCHAR(77),
    last_updated_ts DATETIME NOT NULL,
    primary key (id)
);

create table if not exists restaurant_comment (
    id INT NOT NULL AUTO_INCREMENT,
    restaurant_id INT NOT NULL,
    comment TEXT(500) NOT NULL,
    added_by_user_id INT NOT NULL,
    active TINYINT NOT NULL,
    created_ts DATETIME NOT NULL,
    last_updated_ts DATETIME NOT NULL,
    PRIMARY KEY (id)
);

create table if not exists restaurant_price_level (
    id INT NOT NULL AUTO_INCREMENT,
    dsc VARCHAR(6) NOT NULL,
    last_updated_ts DATETIME NOT NULL,
    PRIMARY KEY (id)
);

create table if not exists restaurant_rating (
    restaurant_id INT NOT NULL,
    rating FLOAT NOT NULL,
    user_id INT NULL,
    last_updated_ts DATETIME NOT NULL
);

create table if not exists users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    user_name VARCHAR(35) NOT NULL,
    created_ts DATETIME NOT NULL,
    last_updated_ts DATETIME NOT NULL,
    PRIMARY KEY (id)
);

create table if not exists whitty_quote (
    id INT NOT NULL AUTO_INCREMENT,
    quote VARCHAR(255) NOT NULL,
    last_updated_ts DATETIME NOT NULL,
    PRIMARY KEY (id)
);
