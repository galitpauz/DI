select * from language 
select name from language

SELECT
    title,
	description,
FROM
   film
INNER JOIN language
    ON language.language_id = film.language_id;


FROM film right JOIN language ON language.language_id = film.language_id;

SELECT * FROM film
LEFT JOIN language ON film.language_id = language.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film  (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR (255) NOT NULL
    );

INSERT INTO new_film (name)
VALUES
    ('Fast and Furious'),
    ('Wonder Woman'),
    ('Dune');
-- Create a new table called customer_review, which will contain film reviews that customers will make.
create table customer_review
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review.
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
create table customer_review(
	review_id serial primary key,
	film_id int,
	language_id int,
	title VARCHAR (255) NOT NULL,
	score int,
	review_text text NOT NULL,
	last_update DATE DEFAULT CURRENT_DATE
    FOREIGN KEY (film_id) references new_film(id)
    FOREIGN KEY (language_id) references language(language_id)
	);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review(film_id, language_id, title,score,review_text)
VALUES

    (1,1,'Fast Review',6,'Lots of familiar faces and speed demons are back for the latest in the franchise'),
    (2,1,'WW Review',6,'More than understanding the films message, it is the timing it is being delivered at. We need positivity, and thats what this Gal Gadot led film offers');

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- the delete won't work because references key - violates foreign key constraint 


-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
update film
set language_id=2 where film_id<3;
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- address_id
-- we need to connect address_id to the new data inserted into the customer table

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
drop table customer_review;
-- easy step but the table still remain in the count in the DB

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select count(1) from rental WHERE return_date IS NULL

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select film.film_id,title,replacement_cost from film 
INNER JOIN inventory ON inventory.film_id = film.film_id 
INNER JOIN rental ON inventory.inventory_id = rental.inventory_id 
WHERE return_date IS NULL ORDER BY replacement_cost DESC LIMIT 30
-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

SELECT title FROM actor 
INNER JOIN film_actor ON actor.actor_id = film_actor.actor_id 
INNER JOIN film ON film_actor.film_id = film.film_id 
WHERE first_name = 'Penelope' 
AND last_name = 'Monroe' 
AND fulltext @@ to_tsquery('sumo')
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title FROM film 
INNER JOIN film_category ON film.film_id = film_category.film_id 
INNER JOIN category ON film_category.category_id = category.category_id 
WHERE category.name = 'Documentary' AND length < 60 AND rating = 'R'
