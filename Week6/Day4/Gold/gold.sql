-- Update Statement
-- Write a SQL statement to change the following details belonging all employes who’s department_id is 110:
-- email column should be: ‘not available’
-- commission_pct column should be: 0.10
UPDATE employees SET email='not available' WHERE department_id=10
-- Write a SQL statement which will change the email column of all employees to ‘available’ whom work in the ‘Accounting’ department.
UPDATE employees SET email='available' from departments WHERE employees.department_id=departments.department_id and departments.department_name='Accounting'
-- Write a SQL statement to change the salary of the employee whose ID is 105. If the existing salary is less than 5000, change it to 8000.
UPDATE employees SET salary=8000 WHERE employee_id=105 and salary<5000;

-- Aggregate Functions
-- Write a query to get the number of employees working in each post.
select job_id, count(job_id) from employees group by job_id
-- Write a query to get the difference between the highest and lowest salaries.
select max(salary),min(salary),max(salary)-min(salary) as difference from employees
-- Write a query to find a manager ID and the salary of the lowest-paid employee under that manager.
select min(salary),manager_id from employees
group by manager_id
-- Write a query to get the average salary for each post excluding programmer.
select avg(salary),manager_id from employees
WHERE department_id!=6
group by manager_id;
-- Write a query to get the average salary for all departments that employ more than 10 employees.
select avg(salary),manager_id from employees
group by manager_id
having count(manager_id)>10;
-- Alter Table Statement
-- Write a SQL statement to change the name of the column “state_province” to “state” in the locations table, keeping the same data type and size.
ALTER TABLE locations RENAME COLUMN state_province TO state;
-- Write a SQL statement to add a primary key to the “location_id” column in the locations table.
ALTER TABLE locations ADD PRIMARY KEY (location_id);

