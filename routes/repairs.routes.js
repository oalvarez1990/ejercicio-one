const express = require('express');

// Middlewares
const { repairExist } = require('../middlewares/repairs.middlewares');
const {
  createRepairsValidation,
  checkValidations,
} = require('../middlewares/validations.middlewares');

//controllers
const {
  getAllPendings,
  getPendingById,
  createPending,
  completePending,
  cancellPending
} = require('../controllers/repairs.controller');

//router
const router = express.Router();

//Functions
router.route(`/`)
    .get( getAllPendings)
    .post( createRepairsValidation, checkValidations, createPending);

router.route(`/:id`)
    .get(getPendingById)
    .patch(completePending)
    .delete(cancellPending);

//export default router es igual a:
module.exports = { repairsRouter: router };
