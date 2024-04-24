UPDATE Films
SET Language = 'Russian'
WHERE FilmID IN (1, 5, 10);

DROP TABLE customer_review;

SELECT
    saleID,
    COUNT(*) AS VolumeOutstanding
FROM
    your_sales_table
WHERE
    outcome = 'New'
GROUP BY
    saleID
HAVING
    COUNT(*) = 1;

SELECT TOP 30
    MovieID,
    Title,
    RentalPrice
FROM MOVIES
WHERE Returned = 0
ORDER BY RentalPrice DESC;
