const mysql = require('mysql');
const { search } = require('../routes/user');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    socketPath: '/tmp/mysql.sock'
  });

// View users
exports.view = (req, res) => {
    // res.render('home');
    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        //User the connecion
        connection.query('SELECT * FROM product', (err, rows) => {
            // // when done with the connection, release it
            connection.release();

            if(!err) {
                res.render('home', { rows });
            } else {
                console.log(err);
            }
            console.log('The date from user table:\n', rows);
        });
    });
}
// Find product by searching
exports.find = (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);
        let searchTerm = req.body.search;
        //User the connecion
        connection.query('SELECT * FROM product WHERE Item LIKE ? OR SKU LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
            // // when done with the connection, release it
            connection.release();
            if(!err) {
                res.render('home', { rows });
            } else {
                console.log(err);
            }
            console.log('The date from user table:\n', rows);
        });
    });
}

exports.form = (req, res) => {
    res.render('add_product');
}

// Add new product
exports.create = (req, res) => {
    // res.render('add_product')
    const { Item, SKU, Amount, Features, Notes} = req.body;

    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);
        let searchTerm = req.body.search;
        //User the connecion
        connection.query('INSERT INTO product SET Item = ?, SKU = ?, Amount = ?, Features = ?, Notes = ?', [Item, SKU, Amount, Features, Notes], (err, rows) => {
            // // when done with the connection, release it
            connection.release();
            if(!err) {
                res.render('add_product', { alert: 'Product added successfully!' });
            } else {
                console.log(err);
            }
            console.log('The date from user table:\n', rows);
        });
    });
}

// Edit product
exports.edit = (req, res) => {
    // res.render('edit_product');

    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        //User the connecion
        connection.query('SELECT * FROM product WHERE id = ?', [req.params.id], (err, rows) => {
            // // when done with the connection, release it
            connection.release();

            if(!err) {
                res.render('edit_product', { rows });
            } else {
                console.log(err);
            }
            console.log('The date from user table:\n', rows);
        });
    });
}

// Update product
exports.update = (req, res) => {
    // res.render('edit_product');
    const { Item, SKU, Amount, Features, Notes} = req.body;

    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        //User the connecion
        connection.query('UPDATE product SET Item = ?, SKU = ?, Amount = ?, Features = ?, Notes = ? WHERE id = ?', [Item, SKU, Amount, Features, Notes, req.params.id], (err, rows) => {
            // // when done with the connection, release it
            connection.release();

            if(!err) {

                pool.getConnection((err, connection) => {
                    if(err) throw err; // not connected
                    console.log('Connected as ID ' + connection.threadId);
            
                    //User the connecion
                    connection.query('SELECT * FROM product WHERE id = ?', [req.params.id], (err, rows) => {
                        // // when done with the connection, release it
                        connection.release();
            
                        if(!err) {
                            res.render('edit_product', { rows, alert: `${Item} has been updated` });
                        } else {
                            console.log(err);
                        }
                        console.log('The date from user table:\n', rows);
                    });
                });
                // res.render('edit_product', { rows });
            } else {
                console.log(err);
            }
            console.log('The date from user table:\n', rows);
        });
    });
}

// Delete product
exports.delete = (req, res) => {
    // res.render('edit_product');

    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        //User the connecion
        connection.query('DELETE FROM product WHERE id = ?', [req.params.id], (err, rows) => {
            // // when done with the connection, release it
            connection.release();

            if(!err) {
                let removedProduct = encodeURIComponent('Product successfully removed!');
                res.redirect('/?removed=' + removedProduct);
            } else {
                console.log(err);
            }
            console.log('The date from user table:\n', rows);
        });
    });
}

// View all products
exports.viewall = (req, res) => {
    // res.render('home');
    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err; // not connected
        console.log('Connected as ID ' + connection.threadId);

        //User the connecion
        connection.query('SELECT * FROM product WHERE id = ?', [req.params.id], (err, rows) => {
            // // when done with the connection, release it
            connection.release();

            if(!err) {
                res.render('view_product', { rows });
            } else {
                console.log(err);
            }
            console.log('The date from user table:\n', rows);
        });
    });
}