const {protect} = require('../controllers/authController');
const {forwardHandler, checkCoords} = require("../controllers/locationController");
const router = require('express').Router();
const {
  getOneStore,
  updateStore,
  deleteStore,
  getStores,
} = require('../controllers/storeController');

router.get('/getOneStores',protect, getOneStore),
  router.put('/updateStore',protect, checkCoords, forwardHandler, updateStore),
  router.delete('/deleteStore',protect, deleteStore),
  router.get('/getStores', getStores);

module.exports = router;
