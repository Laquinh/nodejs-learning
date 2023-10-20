const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/edit/:id', customerController.edit);
router.post('/edit/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

module.exports = router;