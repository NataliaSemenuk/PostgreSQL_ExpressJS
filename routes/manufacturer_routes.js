const Router = require('express');

const router = new Router();
const manufacturerController = require('../controllers/manufacturer_controller');

router.post('/manufacturer', manufacturerController.createManufacturer);
router.get('/manufacturer', manufacturerController.getManufacturers);
router.get('/manufacturer/:id', manufacturerController.getOneManufacturer);
router.put('/manufacturer', manufacturerController.updateManufacturer);
router.delete('/manufacturer/:id', manufacturerController.deleteManufacturer);

module.exports = router;