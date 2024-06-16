CREATE OR ALTER PROCEDURE updateProduct(
    @id Varchar(255),
    @prodname Varchar(255),
    @proddescription Varchar (255),
    @prodprice INT,
    @catid Varchar (255)
)
AS 
BEGIN 
UPDATE products SET prodname = @prodname, proddescription = @proddescription, prodprice = @prodprice, catid = @catid
END