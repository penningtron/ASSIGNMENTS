-- Note: We're inserting records with an id value set because we want to use
-- particular ids as foreign keys. I.e. setting the address_id for a student
-- so it references a specific address record. If we didn't specify a value
-- for the id columns, the database would choose an integer for us.

INSERT INTO students (id, first_name, last_name, age, grade) VALUES (1, 'John', ' Doe', 18, 'A' );
INSERT INTO students (id, first_name, last_name, age, grade) VALUES (2, 'John', ' Doe', 18, 'A' );
INSERT INTO students (id, first_name, last_name, age, grade) VALUES (3, 'John', ' Doe', 18, 'A' );
INSERT INTO students (id, first_name, last_name, age, grade) VALUES (4, 'John', ' Doe', 18, 'A' );
INSERT INTO students (id, first_name, last_name, age, grade) VALUES (5, 'John', ' Doe', 18, 'A' );
INSERT INTO students (id, first_name, last_name, age, grade) VALUES (6, 'John', ' Doe', 18, 'A' );
INSERT INTO students (id, first_name, last_name, age, grade) VALUES (7, 'John', ' Doe', 18, 'A' );
INSERT INTO students (id, first_name, last_name, age, grade) VALUES (8, 'John', ' Doe', 18, 'A' );
INSERT INTO students (id, first_name, last_name, age, grade) VALUES (9, 'John', ' Doe', 18, 'A' );
INSERT INTO students (id, first_name, last_name, age, grade) VALUES (10, 'John', ' Doe', 18, 'A' );




-- Because we've inserted rows with hardcoded values for the primary key, id
-- the sequence used to generate id values for new rows is stuck at "1". So
-- we manually reset the sequences to the max value of id for each table.


