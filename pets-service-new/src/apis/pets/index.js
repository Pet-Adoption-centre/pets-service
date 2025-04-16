const express = require('express');
const router = express.Router();

router.get('/:id', require('./getPet'));
router.post('/', require('./createPet'));
router.put('/:id', require('./updatePet'));
router.delete('/:id', require('./deletePet'));

module.exports = router;
