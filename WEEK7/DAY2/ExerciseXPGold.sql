 SELECT * FROM students;

-- UPDATE students
-- SET birth_date = '02/11/1998'
-- WHERE last_name = 'Benichou';
-- SELECT * FROM students

-- DELETE FROM students
-- WHERE first_name = 'Lea';

-- SELECT COUNT(id)
-- FROM students;

-- SELECT COUNT(customer_id)
-- FROM students;
-- WHERE birth_date > 1/01/2000;

-- ALTER TABLE students
-- DROP COLUMN math_grade

-- ALTER TABLE students
-- ADD math_grade SMALLINT;

-- INSERT INTO students (math_grade)
-- VALUES (80)
-- WHERE id = 1;

-- INSERT INTO students (math_grade)
-- VALUES (90)
-- WHERE id = 2 AND id = 4;

-- INSERT INTO students (math_grade)
-- VALUES (60)
-- WHERE id = 6;

-- SELECT COUNT(customer_id)
-- FROM students;
-- WHERE math_grade > 83;

-- INSERT INTO students (last_name, first_name, birth_date, math_grade)
-- VALUES ('Simpson', 'Omer', '1980-10-03', '70');