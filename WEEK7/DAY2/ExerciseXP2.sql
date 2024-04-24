SELECT * FROM customer;

SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customer;

SELECT DISTINCT create_date
FROM customer;

SELECT *
FROM customer
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT address, phone
FROM address
WHERE district = 'Texas';

SELECT *
FROM movies
WHERE movie_id IN (15, 150);

SELECT
    film_id,
    title,
    description,
    length,
    rental_rate
FROM
    film
WHERE
    title = 'Pretty Woman';
	
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'FA%'
   OR title ILIKE 'FA%';
   
SELECT
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date
FROM
    customer AS c
INNER JOIN
    payment AS p
ON
    c.customer_id = p.customer_id
ORDER BY
    c.customer_id;
	
SELECT
    f.film_id AS "Film ID",
    f.title AS Title,
    f.release_year AS "Release Year",
    f.rating AS Rating,
    f.description AS Description
FROM
    film f
LEFT JOIN
    inventory i ON f.film_id = i.film_id
WHERE
    i.inventory_id IS NULL
ORDER BY
    f.rating, f.title;
	
SELECT
    c.id,
    'countries' AS table_name,
    co.name AS country,
    '' AS state,
    '' AS city
FROM countries co

UNION ALL

SELECT
    s.id,
    'states' AS table_name,
    co.name AS country,
    s.name AS state,
    '' AS city
FROM states s
INNER JOIN countries co ON s.country_id = co.id

UNION ALL

SELECT
    ci.id,
    'cities' AS table_name,
    co.name AS country,
    s.name AS state,
    ci.name AS city
FROM cities ci
INNER JOIN states s ON ci.state_id = s.id
INNER JOIN countries co ON s.country_id = co.id;