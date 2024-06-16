CREATE OR ALTER PROCEDURE deleteProduct(@id Varchar(255))
AS 
BEGIN 
DELETE FROM products WHERE id = @id
END