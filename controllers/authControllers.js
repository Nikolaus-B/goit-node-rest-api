import { User } from "../models/user.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

const register = async (req, res) => {
  const newUser = await User.create(req.body);

  res.json({
    email: newUser.email,
  });
};

export default {
  register: ctrlWrapper(register),
};
