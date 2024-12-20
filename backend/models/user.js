import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "Number",
    required: true,
    minlength: 6,
    maxlength: 6,
  },
});

const User = new mongoose.model("User", userSchema);
export default User;
