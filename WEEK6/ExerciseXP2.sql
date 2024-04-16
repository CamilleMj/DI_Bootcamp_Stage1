SELECT * FROM students;

SELECT
   first_name,
   last_name
FROM
   students;
   
SELECT first_name,
       last_name
FROM students
WHERE id = 2;

SELECT first_name,
       last_name
FROM students
WHERE last_name = 'Benichou' and first_name = 'Marc';

SELECT first_name,
       last_name
FROM students
WHERE first_name LIKE '%a%';

SELECT first_name,
       last_name
FROM students
WHERE first_name LIKE 'a%';

SELECT first_name,
       last_name
FROM students
WHERE first_name LIKE '%a';

SELECT first_name,
       last_name
FROM students
WHERE first_name LIKE '%a%';

SELECT first_name,
       last_name
FROM students
WHERE id = 1 AND id = 3 ;

SELECT first_name,
       last_name
FROM students
WHERE birth_date >= '01/01/2000';