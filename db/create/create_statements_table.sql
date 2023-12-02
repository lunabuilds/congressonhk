CREATE TABLE statements (
    id SERIAL PRIMARY KEY,
    statement_title VARCHAR(300) NOT NULL,
    statement_url VARCHAR(255),
    sponsor_id INTEGER REFERENCES congress(id)
);