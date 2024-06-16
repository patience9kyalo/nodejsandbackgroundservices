use shop

CREATE Table products(
	id Varchar(255) PRIMARY KEY,
	prodname Varchar(255),
	proddescription Varchar(255),
	prodprice INT,
	catid Varchar (255) FOREIGN KEY REFERENCES Categories(catid)
)