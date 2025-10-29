import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  
  title:{
    type: String,
    trim: true,
    required: "Title is required",
  },
  
    firstname: {
    type: String,
    trim: true,
    required: "Firstname is required",
  },

  lastname: {
    type: String,
    trim: true,
    required: "Lastname is required",
  },

  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },

  completion:{
    type: String,
    trim: true,
    required: "Completion is required"
  },

  description:{
    type: String,
    trim: true,
    required: "Description is required"
  },

  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Project", ProjectSchema);

