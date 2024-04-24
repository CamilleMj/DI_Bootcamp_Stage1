SELECT *
FROM items
ORDER BY Price;

SELECT *
FROM Items
WHERE Price >= 80
ORDER BY Price DESC;

SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

SELECT last_name
FROM customers
ORDER BY last_name DESC;