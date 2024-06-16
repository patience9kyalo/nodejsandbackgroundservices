CREATE OR ALTER PROCEDURE addCategory(
    @catid Varchar (255),
    @catname Varchar(255),
    @catdescription Varchar(255)

)
AS 
BEGIN
    INSERT INTO Categories VALUES (@catid, @catname, @catdescription)
END