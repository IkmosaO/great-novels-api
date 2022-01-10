CREATE DATABASE greatnovelsDB;

CREATE USER 'novels'@'localhost' IDENTIFIED WITH mysql_native_password BY 'n0v3lS';

GRANT ALL ON greatnovelsDB.* TO 'novels'@'localhost';

USE greatnovelsDB;

CREATE TABLE authorsTable (
id INT auto_increment,
nameFirst VARCHAR(255),
nameLast VARCHAR(255),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY(id)
);

INSERT INTO authorsTable (nameFirst, nameLast)
VALUES ('Bram', 'Stoker'),
('Oscar', 'Wilde'),
('Alice', 'Walker'),
('Leo', 'Tolstoy'),
('Charles', 'Dickens'),
('Arthur', 'Miller'),
('Alexandre', 'Dumas'),
('Arthur', 'Conan Doyle'),
('Robert', 'Louis Stevenson'),
('Fyodor', 'Dostoyevsky'),
('Agatha', 'Christie'),
('Ray', 'Bradbury'),
('George', 'Orwell'),
('H.G.', 'Wells'),
('Chinua', 'Achebe')
