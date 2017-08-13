const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);

//we wont use 'require' statements in anything mongoose related...sometimes you "required" files will get loaded multiple times in mongo/mongoose
//because of this, we'll load in required stuff differently
