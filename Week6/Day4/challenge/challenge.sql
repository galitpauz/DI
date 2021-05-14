
-- Create a table called orders and a table called items. You decide which fields should be in each table, 
-- although make sure the items table has a column called price.

create database itemsDB;
USE orders_items;

-- There should be a one to many relationship between the orders table and the items table.

create table items (
item_id serial PRIMARY KEY,
name VARCHAR ( 255 ) UNIQUE NOT NULL,
price integer NOT NULL
);

create table orders (
	item_id serial,
	amount integer NOT NULL,
    order_id integer NOT NULL,
	FOREIGN KEY (item_id) references items(item_id)
);


insert into items (name,price) 
values ('Lamp',15),('Book shelf',120),('Table',90),('Curtains',60),('Couch',350);
insert into orders (item_id,amount,order_id) 
values (1,10,1),(2,1,2),(3,1,2),(4,2,3),(5,1,4);

SELECT order_id, sum(amount * price) as total FROM items
INNER JOIN orders ON orders.item_id = items.item_id
group by orders.order_id;