import Qualification from "../models/qualification.model.js";

const qualificationById = async (req, res, next, id) => {
  try {
    const qualification = await Qualification.findById(id);
    if (!qualification)
      return res.status(404).json({error: "Qualification not found"});
    req.profile = qualification;
    next();
   } catch (err){
    return res.status(400).json({error: "Qualification not found"});
   }
  };

  const list = async (req, res) => {
    let qualification = await Qualification.find();
    res.json(qualification);
  }

  const create = async (req, res) => {
    try {
      const qualification = new Qualification(req.body);

    await qualification.save();
    res.status(201).json({message: "Qualification was created!"});
    }catch (err){
      res.status(400).json({error: err.message});
    }
  };

  const read = (req, res) => {
    res.json(req.profile);
  };

  const update = async (req, res) => {
    try {
      let qualification = req.profile;
      qualification.title = req.body.title || qualification.title;
      qualification.firstname = req.body.firstname || qualification.firstname;
      qualification.lastname = req.body.lastname || qualification.lastname;
      qualification.email = req.body.email || qualification.email;
      qualification.completion = req.body.completion || qualification.completion;
      qualification.description = req.body.description || qualification.description;

      await qualification.save();
      res.json({message: "Qualifcation updated!"});
    } catch (err){
            res.status(400).json({error: err.message});
    }
  };

  const remove = async (req, res) => {
    try {
      await Qualification.findByIdAndDelete(req.profile._id);
      res.json({message: "Qualification deleted!"});
    }catch (err){
           res.status(400).json({error: err.message});
    }
  };


  export default {list, create, read, update, remove, qualificationById}