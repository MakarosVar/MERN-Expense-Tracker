import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const incomeSchema = new mongoose.Schema({
  title: {
    required: [true, "Title is required."],
    type: String,
  },
  description: {
    required: [true, "Description is required."],
    type: String,
  },
  amount: {
    required: [true, "Amount is required."],
    type: Number,
  },
  type: {
    type: String,
    default: "income",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, //this is the id of the user
    ref: "User",
    required: [true, "User is required."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//add pagination plugin
incomeSchema.plugin(mongoosePaginate);

const Income = mongoose.model("Income", incomeSchema);
export default Income;
