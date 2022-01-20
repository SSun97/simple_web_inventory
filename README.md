# This is a project about Inventory Management, a web application

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
!!!Very Important!!! for MySQL version 6.0+ the 2 commands below need to be run one time.
<password> is mySQL login credential, single quote mark ('')need to be added around the password. 
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
mysql -uroot -p inventory < setup_database.sq
```
Run Script to instert some data for testing
```
mysql -uroot -p inventory < insert_data.sql 
```


ssun@Simons-Mac-mini simple_web_inventory % netstat -ln | grep mysql
f9b73ae3b1fd0b9f stream      0      0 f9b73ad54d31dc27                0                0                0 /tmp/mysql.sock
f9b73ae3b1fd0177 stream      0      0 f9b73ad54cf1cc27                0                0                0 /tmp/mysqlx.sock


mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '7bvfqcQc!@#';
Query OK, 0 rows affected (0.01 sec)

mysql> flush privileges;
Query OK, 0 rows affected (0.02 sec)