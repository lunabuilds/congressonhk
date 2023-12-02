CREATE TABLE districts (
    id SERIAL PRIMARY KEY,
    district_name VARCHAR(100) NOT NULL,
    district_start_date DATE,
    district_end_date DATE,
    state_name VARCHAR(50) NOT NULL,
    congress_ids INTEGER[]
);