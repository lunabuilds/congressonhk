UPDATE districts AS d
SET congress_ids = (
    SELECT ARRAY_AGG(c.id)
    FROM congress AS c
    WHERE c.district_name = d.district_name
    GROUP BY c.district_name
);