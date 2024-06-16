
CREATE OR ALTER PROCEDURE addProduct(
    @id Varchar(255),
    @prodname Varchar(255),
    @proddescription Varchar (255),
    @prodprice INT,
    @catid Varchar (255)
)
AS
BEGIN 
INSERT INTO products VALUES(@id,@prodname,@proddescription,@prodprice, @catid)
END