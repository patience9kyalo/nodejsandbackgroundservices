CREATE OR ALTER PROCEDURE getUser(
    @Email Varchar(255)
)
AS
BEGIN
SELECT * FROM users WHERE Email= @Email
END;