# This is a backend project about Inventory Management, a web application
- CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete. Persistent storage refers to any data storage device that retains power after the device is powered off, such as a hard disk or a solid-state drive. In contrast, random access memory and internal caching are two examples of volatile memory - they contain data that will be erased when they lose power.
- In this project, Node.js is used as the runtime and MySQL as the database.
## Installation
This project had been test on MacOS 12.1. Testing on Windows will be proceed if required.

### Install Node.js
https://nodejs.org/en/download/
* Verify installation
```
$ node -v
v14.17.6
```
## Install MySQL(Kepp the password for later use)
```
brew install mysql
```
* Verify installation
```
$ mysql --version
mysql  Ver 8.0.27 for macos12.0 on arm64 (Homebrew)
```
## Install install dev dependencies(need to install npm if it's not avilable in the environment)
```
npm install
```

## Setup MySql
Running Mysql server
```
$ mysql.server start
Starting MySQL
 SUCCESS! 
```
login to MySQL server(Need to input password)
```
% mysql -uroot -p
Enter password:
...
mysql> 
```
Input command and create database named "inventory" 
```
mysql> CREATE DATABASE inventory; 
```
!!!Very Important!!! for MySQL version 6.0+ if you have issue connecting to DB server the 2 commands below need to be run one time.
password is mySQL login credential, single quote mark ('')need to be added around the password. 
```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>';
Query OK, 0 rows affected (0.01 sec)

mysql> flush privileges;
Query OK, 0 rows affected (0.02 sec)
```

Exit from MySQL
```
mysql> exit;
Bye
```
Run Script to create table "product" in database "inventory"
```
mysql -uroot -p inventory < setup_database.sql
```
Run Script to instert some data for testing
```
mysql -uroot -p inventory < insert_data.sql 
```
After setting up
```
mysql> select * from product;
+----+---------------------+-------------------+--------+------------+------------------+--------+
| id | Item                | SKU               | Amount | Features   | Notes            | status |
+----+---------------------+-------------------+--------+------------+------------------+--------+
|  1 | Men T-shirt         | SKU76453210       |     21 | Design     | short lead timee | active |
|  2 | Women T-shirt       | SKU76453211       |     85 | Iron Free  | Long lead time   | active |
|  3 | Men Polo            | SKU76453212       |     43 | Iron Free  | short lead time  | active |
|  4 | Women Polo          | SKU76453213       |     27 | Iron Free  | Long lead time   | active |
|  5 | Headset             | SKU89012345       |     23 | ABC        | Sales            | active |
| 13 | Microphone logitech | SKU89012345111223 |     56 | 15 buttons | Hot product      | active |
+----+---------------------+-------------------+--------+------------+------------------+--------+
6 rows in set (0.00 sec)
```

## Modify credential file
In file ".env", line 4
```
DB_PASS = 'your_password'
```

## Modify socketPath if needed
run command
```
% netstat -ln | grep mysql
```
see the result, if your result od mysql.sock directory is the same as bellow "/tmp/", NO NEED to further modify.
```
f9b73ae3b1fd0b9f stream      0      ...                0 /tmp/mysql.sock
f9b73ae3b1fd0177 stream      0      ...                0 /tmp/mysqlx.sock
```
If not, modify file "./server/controllers/userController" line 9. replace the socketPath with yours 


# Start testing
Start Server
```
npm start
```

Go to localhost in web browser http://localhost:5500/

Function
* Home page show the list of product
![alt text](https://github.com/ssun97/simple_web_inventory/blob/main/list_of_products.png?raw=true)
* add product
![alt text](https://github.com/ssun97/simple_web_inventory/blob/main/add_product.png?raw=true) 
* view product
![alt text](https://github.com/ssun97/simple_web_inventory/blob/main/view_product.png?raw=true)
* Edit(update) product
![alt text](https://github.com/ssun97/simple_web_inventory/blob/main/edit_product.png?raw=true)
* Delete product
Botton avilable on main page

## Future Plan
* Add checking before input to DB
* Deply on real web server

# Author 
- Simon Sun - https://github.com/SSun97
- Linkedin - https://www.linkedin.com/in/ssun97/

# Licence 
- This project is licensed under the MIT License