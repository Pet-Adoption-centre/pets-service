const express = require('express');
const router = express.Router();

router.get('/:id', require('./getBreed'));
router.post('/', require('./createBreed'));
router.put('/:id', require('./updateBreed'));
router.delete('/:id', require('./deleteBreed'));

module.exports = router;
