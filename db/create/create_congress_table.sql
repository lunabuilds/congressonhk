CREATE TYPE position_type AS ENUM ('Senator', 'Representative');

CREATE TABLE congress (
    id SERIAL PRIMARY KEY,
    person_name VARCHAR(100),
    district_name VARCHAR(100) NOT NULL,
    state_name VARCHAR(50) NOT NULL,
    term_start_date DATE NOT NULL,
    term_end_date DATE NOT NULL,
    party VARCHAR(50) NOT NULL,
    position position_type NOT NULL
);
