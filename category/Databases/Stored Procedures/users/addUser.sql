CREATE OR ALTER PROCEDURE addUser(
    @Id Varchar(255),
    @Name Varchar(255),
    @Email Varchar(255),
    @Password Varchar(255)
)
AS
BEGIN
INSERT INTO users(Id, Name, Email,Password) VALUES( @Id, @Name, @Email, @Password )
END;