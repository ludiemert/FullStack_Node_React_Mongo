import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  phone: String,
});

export default mongoose.model("users", UserSchema);