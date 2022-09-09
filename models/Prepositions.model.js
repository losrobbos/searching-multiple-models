import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PrepositionSchema = new Schema({
  prepo: { type: String, required: true },
  lang: { type: String, enum: ["de", "en"] }
});

const Preposition = model("Preposition", PrepositionSchema);

export default Preposition;
