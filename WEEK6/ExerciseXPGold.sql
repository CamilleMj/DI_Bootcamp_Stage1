SELECT first_name, last_name, birth_date
FROM 
   students
ORDER BY last_name ASC
LIMIT 4;

SELECT
   first_name, last_name, birth_date
FROM
   students
WHERE birth_date = (select max(birth_date) from students);

SELECT
   first_name, last_name, birth_date
FROM
   students
LIMIT 3 OFFSET 2;