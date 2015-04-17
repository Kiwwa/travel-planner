CREATE TABLE locations (
  id            BIGSERIAL PRIMARY KEY,
  latitude      FLOAT8 NOT NULL,
  longitude     FLOAT8 NOT NULL,
  street_number INTEGER,
  route         VARCHAR(100),
  locality      VARCHAR(100),
  admin_area    VARCHAR(100),
  country       VARCHAR(100) NOT NULL,
  post_code     INTEGER,
  full_address  VARCHAR(300),
  place_id      INTEGER
);

CREATE TABLE places (
  id           BIGSERIAL PRIMARY KEY,
  arrival      TIMESTAMP,
  departing    TIMESTAMP,
  accomodation VARCHAR(200),
  stuff_to_do  VARCHAR(500),
  trip_id      INTEGER
);

CREATE TABLE trips (
  id           BIGINT PRIMARY KEY DEFAULT make_random_id(),
  name         VARCHAR(100)
);

---------------------------------------------
-- FUNCTIONS USED TO BUILD UID's
-- http://bit.ly/1zbcxQw
---------------------------------------------

-- Taken from http://wiki.postgresql.org/wiki/Pseudo_encrypt
CREATE OR REPLACE FUNCTION pseudo_encrypt(VALUE int) returns bigint AS $$
DECLARE
l1 int;
l2 int;
r1 int;
r2 int;
i int:=0;
BEGIN
 l1:= (VALUE >> 16) & 65535;
 r1:= VALUE & 65535;
 WHILE i < 2 LOOP
   l2 := r1;
   r2 := l1 # ((((1366.0 * r1 + 150889) % 714025) / 714025.0) * 32767)::int;
   l1 := l2;
   r1 := r2;
   i := i + 1;
 END LOOP;
 RETURN ((l1::bigint << 16) + r1);
END;
$$ LANGUAGE plpgsql strict immutable;

-- Create a sequence for generating the input to the pseudo_encrypt function
create sequence random_int_seq;

-- A function that increments the sequence above and generates a random integer
create function make_random_id() returns bigint as $$
  select pseudo_encrypt(nextval('random_int_seq')::int)
$$ language sql;
