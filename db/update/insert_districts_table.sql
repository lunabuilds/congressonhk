INSERT INTO districts (district_name, district_start_date, district_end_date, state_name, congress_ids)
VALUES
    ('IN1', MAKE_DATE(1823, 1, 1), NULL, 'Indiana', ARRAY[1, 2]),
    ('IN2', MAKE_DATE(1823, 1, 1), NULL, 'Indiana', ARRAY[3, 4]),
    ('IN3', MAKE_DATE(1823, 1, 1), NULL, 'Indiana', ARRAY[5, 6]),
    ('IN4', MAKE_DATE(1833, 1, 1), NULL, 'Indiana', ARRAY[7, 8]),
    ('IN5', MAKE_DATE(1833, 1, 1), NULL, 'Indiana', ARRAY[9, 10]),
    ('IN6', MAKE_DATE(1833, 1, 1), NULL, 'Indiana', ARRAY[11, 12]),
    ('IN7', MAKE_DATE(1833, 1, 1), NULL, 'Indiana', ARRAY[13]),
    ('IN8', MAKE_DATE(1843, 1, 1), NULL, 'Indiana', ARRAY[14]),
    ('IN9', MAKE_DATE(1843, 1, 1), NULL, 'Indiana', ARRAY[15, 16]),
    ('SEN', MAKE_DATE(1816, 1, 1), NULL, 'Indiana', ARRAY[17, 18, 19, 20]);