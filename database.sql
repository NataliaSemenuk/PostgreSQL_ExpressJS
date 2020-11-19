DROP TABLE IF EXISTS goods, categories, manufacturers;

CREATE TABLE manufacturers (
	id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	country VARCHAR(100) NOT NULL
);

CREATE TABLE categories (
	id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE goods (
	id INT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	category_id INT NOT NULL DEFAULT 1,
	manufacturer_id INT NOT NULL DEFAULT 1,
	price NUMERIC(18, 2) NULL,
	CONSTRAINT fk_manufacturer_id_goods FOREIGN KEY (manufacturer_id) REFERENCES manufacturers (id),
	CONSTRAINT fk_category_id_goods FOREIGN KEY (category_id) REFERENCES categories (id)
);

INSERT INTO manufacturers (name, country)
VALUES ('Garnier', 'France'),
('Masstige', 'Belarus'),
('Eveline', 'Belarus'),
('OGX', 'USA');

INSERT INTO categories (name)
VALUES ('Face Care'),
('Hands Care'),
('Nails Care'),
('Hair Care');

INSERT INTO goods (name, category_id, manufacturer_id, price)
VALUES ('Face Fluid, volcany mineral water', (select id from categories where name = 'Face Care'), (select id from manufacturers where name = 'Masstige'), 12),
('Shampoo, thick & full + biotin & collagen', (select id from categories where name = 'Hair Care'), (select id from manufacturers where name = 'OGX'), 17),
('Makeup remover lotion', (select id from categories where name = 'Face Care'), (select id from manufacturers where name = 'Garnier'), 13),
('Nail firming agent', (select id from categories where name = 'Nails Care'), (select id from manufacturers where name = 'Eveline'), 5);

UPDATE goods SET price = 666 WHERE price = 17;
DELETE FROM goods WHERE price = 12;

SELECT
c.name Категория,
g.name Наименование,
m.name Производитель,
g.price Цена
FROM goods g
INNER JOIN categories c ON g.category_id = c.id
INNER JOIN manufacturers m ON g.manufacturer_id = m.id;

SELECT * FROM goods;

COPY goods TO 'D:\SMBD\csv_file.txt';
COPY categories TO 'D:\SMBD\csv_file.csv' WITH CSV HEADER;