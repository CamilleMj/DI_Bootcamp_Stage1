CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE,
    FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

INSERT INTO Customer (id, first_name, last_name)
VALUES
    (1, 'John', 'Doe'),
    (2, 'Jerome', 'Lalu'),
    (3, 'Lea', 'Rive');

INSERT INTO CustomerProfile (id, isLoggedIn, customer_id)
VALUES (
    (SELECT id FROM CustomerProfile),
    true,
    (SELECT id FROM Customer WHERE first_name = 'John')
);

INSERT INTO CustomerProfile (id, isLoggedIn, customer_id)
VALUES (
    (SELECT id FROM CustomerProfile),
    false,
    (SELECT id FROM Customer WHERE first_name = 'Jerome')
);

SELECT
    COALESCE(Customers.first_name, 'Unknown') AS CustomerProfile_FirstName,
    Customers.first_name,
    CustomerProfile.isLoggedIn
FROM
    CustomerProfile
INNER JOIN
    Customers ON Customer.CustomerID = CustomerProfile.CustomerID
UNION ALL
SELECT
    'Unknown' AS CustomerProfile_FirstName,
    Customers.first_name,
    CustomerProfile.isLoggedIn
FROM
    Customers
LEFT JOIN
    CustomerProfile ON Customers.CustomerID = CustomerProfile.CustomerID
WHERE
    CustomerProfile.CustomerID IS NULL;

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

INSERT INTO Book (title, author)
VALUES
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K. Rowling'),
    ('To Kill a Mockingbird', 'Harper Lee');

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

INSERT INTO Student (name, age)
VALUES
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);
	
CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Library (student_fk_id, book_fk_id, borrowed_date)
SELECT
    (SELECT student_id FROM Student WHERE name = 'John'),
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    '2022-02-15';
	
INSERT INTO Library (student_fk_id, book_fk_id, borrowed_date)
SELECT
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    (SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'),
    '2021-03-03';

INSERT INTO Library (student_fk_id, book_fk_id, borrowed_date)
SELECT
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    '2021-05-23';

INSERT INTO Library (student_fk_id, book_fk_id, borrowed_date)
SELECT
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    '2021-08-12';

SELECT
    student.student_name,
    book.book_title
FROM
    Book
JOIN student ON library.student_id = student.student_id
JOIN book ON library.book_id = book.book_id;

SELECT
    AVG(DATEDIFF(YEAR, student.borrowed_date, '2022-02-15')) AS avg_age
FROM
    book
JOIN student ON book.student_id = student.student_id
JOIN books ON book.book_id = book.book_id
WHERE
    book.book_title = 'Alice In Wonderland';