const express = require('express');

// Middlewares
const { userExists } = require('../middlewares/users.middlewares');
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');


//controllers
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');

//router
const router = express.Router();

//Funciones Verbo
router.get('/', getAllUsers);

router.post('/', createUserValidations, checkValidations, createUser);

router.get('/:id',userExists, getUserById)
router.patch(':/id', userExists, updateUser)
router.delete(':/id', userExists, deleteUser)


//export default router es igual a:
module.exports = { usersRouter: router };
