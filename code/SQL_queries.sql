--  Here is a table of data detailing people queuing for an elevator
--  The max weight for this elevator is 1000kg
--  Try to do query that return the last person who can enter the elevator without exceeding the limit

-- The answer must be ==>  'Thomas Jefferson'

CREATE TABLE line (
    id int not null PRIMARY KEY,
    name varchar(255) not null,
    weight int not null,
    turn int unique not null,
    check (weight > 0)
);

INSERT INTO line (id, name, weight, turn) VALUES(1, 'James Elephant', 500, 6);
INSERT INTO line (id, name, weight, turn) VALUES(2, 'Will Johnliams', 200, 4);
INSERT INTO line (id, name, weight, turn) VALUES(3, 'John Adams', 350, 2);
INSERT INTO line (id, name, weight, turn) VALUES(4, 'Thomas Jefferson', 175, 5);
INSERT INTO line (id, name, weight, turn) VALUES(5, 'George Washington', 250, 1);
INSERT INTO line (id, name, weight, turn) VALUES(6, 'Thomas Jefferson', 400, 3);
