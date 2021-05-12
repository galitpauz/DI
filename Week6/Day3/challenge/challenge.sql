-- Create 3 different tables, each one with a different relationship.
-- Join them with all the types of PostgreSQL Joins you’ve learned.


create database record_company;
USE record_company;

-- TABLE bands
-- TABLE albums
-- TABLE Songs

CREATE TABLE bands(
    id SERIAL PRIMARY KEY NOT NULL,
    band_name VARCHAR (255) NOT NULL
)

CREATE TABLE albums(
    id SERIAL PRIMARY KEY NOT NULL,
    album_name VARCHAR (255) NOT NULL,
    release_year INT,
    band_id INT NOT NULL, 
    FOREIGN KEY (band_id) references bands(id)
)

---> not sure it will worked
CREATE TABLE Songs(
    id SERIAL PRIMARY KEY NOT NULL,
    song_name VARCHAR (255) NOT NULL,
    band_id INT NOT NULL,
    albums_id INT NOT NULL,
    FOREIGN KEY (band_id) references bands(id),
    FOREIGN KEY (albums_id) references albums(id)
)

INSERT INTO bands (band_name)
VALUES
    ('iron maiden'),
    ('Queen'),
    ('Pearl Jam'),
    ('Muse'),
    ('Porcupine tree');

    -- ('Black Holes and Revelations','2006',4),
INSERT INTO albums (album_name, release_year, band_id)
VALUES

    ('The Number of the Beast','1982',1),
    ('Powerslave','1984',1),
    ('A Night at the Opera','1975',2),
    ('Ten','1991',3),
    ('In Absentia','2002',5),
    ('Test Album', NULL, 3);

INSERT INTO songs (song_name, band_id, albums_id)
VALUES

    ('invaders',1,1),
    ('run to the hills',1,1),
    ('Aces High',1,2),
    ('bohemian rhapsody',2,3),
    ('Black',3,4);


--> combin the much data from both data
SELECT * FROM bands
INNER JOIN albums ON bands.id = albums.band_id

--> all from the left side
SELECT * FROM bands
LEFT JOIN albums ON bands.id = albums.band_id

--> right side 
SELECT * FROM albums
RIGHT JOIN bands ON bands.id = albums.band_id


-- --> Full
select * FROM songs
FULL JOIN albums
on albums.id = songs.albums_id

