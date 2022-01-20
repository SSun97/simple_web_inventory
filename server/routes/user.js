const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//create, find, update, delete

router.get('/', userController.view);
router.post('/', userController.find);



router.get('/addproduct', userController.form);
router.post('/addproduct', userController.create);

router.get('/editproduct/:id', userController.edit);
router.post('/editproduct/:id', userController.update);

router.get('/viewproduct/:id', userController.viewall);
router.get('/:id', userController.delete);

// router.get('', (req, res) => {
//     res.render('home');
// })

module.exports = router;