-- Schema
DROP TABLE IF EXISTS students;
CREATE TABLE students (
  id           serial PRIMARY KEY,
  first_name   varchar(255) NOT NULL,
  last_name    varchar(255) NOT NULL,
  birthdate    date NOT NULL,
  address_id   integer
);

CREATE TABLE addresses (
  id           serial PRIMARY KEY,
  line_1        varchar(255) ,
  city    varchar(20) ,
  state    varchar(20) ,
  address_id   integer,
  zipcode       integer
);

CREATE TABLE classes (
  id        serial PRIMARY KEY,
  name      varchar(255) ,
  credits   varchar(255) 


);


CREATE TABLE enrollments (
  id    serial PRIMARY KEY,
  student_id  integer,
  class_id integer,
  grade varchar(255)
);
