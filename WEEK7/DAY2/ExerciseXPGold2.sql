-- CREATE TABLE purchases (
--   id SERIAL PRIMARY KEY,
--   REFERENCES customers(customer_id),
--   REFERENCES items(item_id,
--   quantity_purchased SMALLINT,
-- );
	
-- SELECT * FROM items

-- INSERT INTO purchases (customer_id, item_id, quantity_purchased)
-- VALUES
--     ((SELECT customer_id FROM customers WHERE first_name = 'Scott'),
--     (SELECT item_id FROM items WHERE name = 'fan'),
--     1),

--     ((SELECT customer_id FROM customers WHERE first_name = 'Melanie'),
--     (SELECT item_id FROM items WHERE name = 'large desk'),
--     10),

--     ((SELECT customer_id FROM customers WHERE first_name = 'Greg'),
--     (SELECT product_id FROM products WHERE name = 'small desk'),
--     2);
