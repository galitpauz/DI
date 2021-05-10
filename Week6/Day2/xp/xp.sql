-- Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
SELECT item_id, item_name, price FROM items ORDER BY price ASC
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT item_id, item_name, price FROM items WHERE price>=80 ORDER BY price ASC
-- The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
SELECT first_name, last_name FROM customers ORDER BY first_name ASC
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers ORDER BY first_name DESC
-- Create a table named purchases. It should have 2 columns : customer_id and item_id. These columns are references from the tables customers and items. Edit the data of the purchases table:
CREATE TABLE purchases(
 customer_id SERIAL PRIMARY KEY,
 item_id NUMERIC (10) NOT NULL,
 	
     FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
     FOREIGN KEY (item_id) REFERENCES items(item_id);


)

-- Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?
-- no, restricted by null  
-- Add 5 rows which reference existing customers and items.
insert into purchases (customer_id, item_id) values (8,2),(5, 4),(7, 5),(4, 4),(6, 5);
-- Use SQL to get the following from the database:
-- All purchases. Is this information useful to us?
select * from purchases
-- All purchases, joining with the customers table.
SELECT
    customer_id,item_id,first_name,last_name
FROM
    purchases
INNER JOIN customers
    ON customer_id = id;
-- Purchases of the customer with the ID equal to 4.
SELECT
    customer_id,item_id,first_name,last_name
FROM
    purchases
INNER JOIN customers
    ON customer_id = id
    where id = 4;
-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
    select * from customer

-- Exercise 2 : Dvdrental Database

-- We will use the newly installed dvdrental database.
-- In the dvdrental database write a query to select all the columns from the “customer” table.
    select * from customer
    select customer_id, store_id, first_name, last_name, email, address_id, activebool, create_date, last_update, active from customer
-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
    select first_name ||' '|| last_name as full_name from customer
-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
    select create_date  from customer group by create_date
-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
    select * from customer order by first_name desc 
-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
    select film_id, title, description, release_year, rental_rate from film order by rental_rate;
-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
    select address, district, phone FROM address where district='Texas'
-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
    select * from film where film_id='15' or film_id='150';
-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
    select * from film where title = 'Lord of the Rings'
-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
select film_id, title, description, length, rental_rate from film
where title like 'Lord%';
-- Write a query which will find the 10 cheapest movies.
select * from film order by rental_rate FETCH first 10 row only;
-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
select * from film order by rental_rate limit 10 offset 10;
-- Bonus: Try to not use LIMIT.
select * from film order by rental_rate FETCH first 10 row only offset 10;
-- Write a query which will join the data in the customer table and the payment table. You want to get the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT
    customer.customer_id, amount, payment_date
FROM
    customer
INNER JOIN payment
    ON customer.customer_id = payment.customer_id



