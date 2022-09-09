import mongoose from "mongoose";
import Preposition from "./models/Prepositions.model.js";
import Question from "./models/Questions.model.js";

mongoose
  .connect("mongodb://localhost/deutschify")
  .then(() => console.log("Works"))
  .catch((err) => console.log("ERR", err.message));

const insertPreps = async () => {
  const prepsCreated = await Prepositions.insertMany([
    { prepo: "fuck", lang: "en" },
    { prepo: "unter", lang: "de" },
    { prepo: "über", lang: "de" }
  ])
  console.log(prepsCreated)
}

const insertQuestions = async () => {
  await Question.deleteMany({});
  const questionsCreated = await Question.insertMany([
    { question: "Hallo Rambo", answer: "Mir gehts gut" },
    { question: "Hallo ihr", answer: "Uns gehts gut" },
    { question: "Rambo Rambo", answer: "What the fuck?" },
    { question: "What the fuck", answer: "What the fuck, Rambo?" },
  ]);

  console.log(questionsCreated);
};

const searchAll = async (searchTerm) => {
  const questions = await Question.find({
    $or: [{ question: { $regex: searchTerm }}, { answer: { $regex: searchTerm } }],
  });
  const prepos = await Preposition.find({
    prepo: { $regex: searchTerm }
  })

  console.log({ questions, prepos });
};

// insertQuestions();
// insertPreps()
searchAll("Rambo")
