import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const userById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id).select("-hashed_password -salt");
    if (!user)
      return res.status(404).json({error: "User not found"});
    req.profile = user;
    next();
   } catch (err){
    return res.status(400).json({error: "User not found"});
   }
  };

  const list = async (req, res) => {
    let users = await User.find().select("-hashed_password -salt");
    res.json(users);
  }

  const create = async (req, res) => {
    try {
      const hashed = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        hashed_password:hashed,
      });

    await user.save();
    res.status(201).json({message: "User was created!"});
    }catch (err){
      res.status(400).json({error: err.message});
    }
  };

  const read = (req, res) => {
    res.json(req.profile);
  };

  const update = async (req, res) => {
    try {
      let user = req.profile;
      user.name = req.body.name || user.name;
      user.updated = Date.now();

      await user.save();
      res.json({message: "User updated!"});
    } catch (err){
            res.status(400).json({error: err.message});
    }
  };

  const remove = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.profile._id);
      res.json({message: "User deleted!"});
    }catch (err){
           res.status(400).json({error: err.message});
    }
  };


  export default {list, create, read, update, remove, userById}