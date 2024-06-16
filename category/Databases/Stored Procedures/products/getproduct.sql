CREATE OR ALTER PROCEDURE getProduct(@id Varchar(255))
AS 
BEGIN 
SELECT * FROM products WHERE id = @id
END