// Models
const { User } = require('../models/users.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id }, attributes: {exclude : ['password'] }})

  if (!user) {
    return next(new AppError('User does not exist with given Id', 404));
  }

  // Add user data to the req object
  req.user = user;
  next();
});

module.exports = { userExists };