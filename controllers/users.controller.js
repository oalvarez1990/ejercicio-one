//Utils
const { catchAsync } = require('../utils/catchAsync');
//Models
const { User } = require('../models/users.model');


const getAllUsers = catchAsync(async (req, res) => {
  //SELECT * FROM users  
    const users = await User.findAll();
    res.status(201).json({
      users,
    });
});

const createUser = catchAsync(async (req, res) => {
    const { name, email, password, role } = req.body;
    //INSERT INTO...
    const newUser = await User.create({ name, email, password, role });

    const users = await User.findAll();
    res.status(201).json({
      status: "done!",
      users
    });
});

const getUserById = (async (req, res) => {
    const { id } = req.params; 
    //SELECT * FROM users WHERE id = ?

    const user = await User.findOne({ where: { id: id } });

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: 'User not found given this ID',
      });
    }

    res.status(201).json({
      user,
    });
});

const updateUser = catchAsync(async (req, res) => {  
    const { id } = req.params; L
    const { name } = req.body;

    //SELECT * FROM users WHERE id = ?

    const user = await User.findOne({ where: { id: id } });

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: 'User not found given this ID',
      });
    }

    await user.update({ name: name });

    res.status(200).json({
      status: 'sucess',
    });
});

const deleteUser = catchAsync(async (req, res) => {
    const { id } = req.params; 
    //SELECT * FROM users WHERE id = ?

    const user = await User.findOne({ where: { id: id } });

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: 'User not found given this ID',
      });
    }
    //DELETE FROM ...
    user.update({ status: 'deleted' });

    res.status(200).json({
      status: 'sucess',
    });
});

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
