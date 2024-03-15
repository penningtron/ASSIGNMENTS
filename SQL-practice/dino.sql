
DROP TABLE IF EXISTS dinosaurs;
CREATE TABLE dinosaurs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lived_period VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    flying BOOLEAN NOT NULL
  
);
  
  


\COPY dinosaurs FROM './data/dinosaurs.csv' WITH CSV HEADER;

SELECT * FROM dinosaurs;
