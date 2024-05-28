import mongoose from "mongoose";

const Client = new mongoose.Schema({
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  });
export default mongoose.model('Client', Client)
