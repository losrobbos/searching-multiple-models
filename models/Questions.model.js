import mongoose from "mongoose"
const { Schema, model } = mongoose

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
})

const Question = model("Question", QuestionSchema)

export default Question