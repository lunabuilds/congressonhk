CREATE TYPE status AS ENUM ('Introduced', 'Committee Consideration', 'Passed House', 'Passed Senate', 'Failed House', 'Failed Senate', 'Resolving Differences', 'Veto Actions', 'To President', 'Became Law', 'Agreed to in Senate', 'Agreed to in House');

CREATE TABLE bills (
    id SERIAL PRIMARY KEY,
    bill_name VARCHAR(300) NOT NULL,
    bill_url VARCHAR(255),
    sponsor_id INTEGER,
    cosponsors INTEGER[],
    yeas INTEGER[],
    novotes INTEGER[],
    nays INTEGER[],
    latest_status status NOT NULL,
    bill_type VARCHAR(50) NOT NULL
);
