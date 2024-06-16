CREATE OR ALTER PROCEDURE getcategoryProducts(
    @catid VARCHAR(255)
)
AS
BEGIN
SELECT *FROM products WHERE catid = @catid
END