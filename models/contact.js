import { Schema, model } from "mongoose";
import handleMongoooseError from "../helpers/handleMongooseError.js";

const contactShema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactShema.post("save", handleMongoooseError);

const Contact = model("contact", contactShema);

export default Contact;
