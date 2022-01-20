# This is a project about Inventory Management, a web application

## Installation

### Install Node.js
https://nodejs.org/en/download/
Verify installation
```
node -v
v14.17.6
```
## Install MySQL
for MacOS:
```
brew install mysql
```
for Windows10:
https://dev.mysql.com/downloads/installer/





mysql -uroot -p inventory < setup_database.sq
mysql -uroot -p inventory < insert_data.sql 



ssun@Simons-Mac-mini simple_web_inventory % netstat -ln | grep mysql
f9b73ae3b1fd0b9f stream      0      0 f9b73ad54d31dc27                0                0                0 /tmp/mysql.sock
f9b73ae3b1fd0177 stream      0      0 f9b73ad54cf1cc27                0                0                0 /tmp/mysqlx.sock


mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '7bvfqcQc!@#';
Query OK, 0 rows affected (0.01 sec)

mysql> flush privileges;
Query OK, 0 rows affected (0.02 sec)